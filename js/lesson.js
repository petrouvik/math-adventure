const params = new URLSearchParams(window.location.search);

const courseId = params.get("course");
const lessonId = params.get("lesson");

const course = COURSES[courseId];

const lesson = course?.lessons.find(
    lesson => lesson.id === lessonId
);

function renderLessonHeader() {
    const header = document.getElementById("lesson-header");

    const lessonIndex = course.lessons.findIndex(
        item => item.id === lesson.id
    );

    header.innerHTML = `
        <div>
            <p class="lesson-label">
                Lesson ${lessonIndex + 1}
            </p>

            <h1>
                ${lesson.title}
            </h1>
        </div>
    `;
}

document.title =
    `${lesson.title} - Math Adventure`;

const backLink = document.getElementById("back-to-course");

backLink.href = `course.html?id=${course.id}`;

backLink.textContent =
    `← ${course.title}`;

function renderLesson() {
    if (!course || !lesson) {
        renderLessonNotFound();
        return;
    }

    if (!isLessonUnlocked(courseId, lessonId)) {
        renderLessonLocked();
        return;
    }

    renderLessonHeader();

    if (lesson.type === "explanation") {
        renderExplanationLesson();
    }

    if (lesson.type === "practice") {
        renderPracticeLesson();
    }
}
function renderLessonLocked() {
    document.getElementById("lesson-content").innerHTML = `
        <section class="lesson-locked">
            <h2>Lesson Locked 🔒</h2>

            <p>
                Complete the previous lesson to unlock this one.
            </p>

            <button
                class="next-button"
                type="button"
                onclick="window.location.href='course.html?id=${course.id}'"
            >
                Back to Course
            </button>
        </section>
    `;
}

function renderExplanationLesson() {

    const container = document.getElementById("lesson-content");

    container.innerHTML = `
        <div class="explanation-lesson">
            <div class="explanation-intro">
                <div class="explanation-intro-icon">💡</div>

                <div>
                    <h2>Let's learn!</h2>
                    <p>
                        Take your time and explore the examples below.
                    </p>
                </div>
            </div>

            <div class="explanation-content"></div>
        </div>
    `;

    const contentContainer =
        container.querySelector(".explanation-content");

    lesson.content.forEach(item => {

        if (item.type === "text") {
            renderTextBlock(contentContainer, item);
        }

        if (item.type === "example") {
            renderExampleBlock(contentContainer, item);
        }
        if (item.type === "image-example") {
            renderImageExampleBlock(contentContainer, item);
        }

    });

    completeLesson(courseId, lessonId);
}
function renderTextBlock(container, item) {
    const element = document.createElement("section");

    element.className = "lesson-text-card";

    element.innerHTML = `
        <div class="text-card-icon">
            📖
        </div>

        <p>${item.text}</p>
    `;

    container.appendChild(element);
}
function renderExampleBlock(container, item) {
    const element = document.createElement("section");

    element.className = "lesson-example-card";

    element.innerHTML = `
        <div class="example-label">
            ✨ Example
        </div>

        <div class="lesson-example-expression">
            ${item.expression}
        </div>

        <p class="example-explanation">
            ${item.explanation}
        </p>
    `;

    container.appendChild(element);
}
function renderImageExampleBlock(container, item) {
    const element = document.createElement("section");

    element.className = "lesson-image-example-card";

    element.innerHTML = `
        <div class="example-label">
            ✨ Example
        </div>

        ${item.title
            ? `<h3>${item.title}</h3>`
            : ""
        }

        <div class="lesson-example-image">
            ${item.svg}
        </div>

        <p class="example-explanation">
            ${item.explanation}
        </p>
    `;

    container.appendChild(element);
}
const lessonState = {
    problems: [],
    currentProblem: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    completed: false
};


function renderPracticeLesson() {
    const generator =
        GENERATORS[
            lesson.practice.generator
        ];

    if (!generator) {
        document.getElementById("lesson-content").textContent =
            "Problem generator not found.";

        return;
    }

    /*
     * Generate the entire problem set.
     */
    lessonState.problems =
        generator.generate(
            lesson.practice.settings,
            lesson.practice.problemCount
        );

    lessonState.currentProblem = 0;
    lessonState.correctAnswers = 0;
    lessonState.incorrectAnswers = 0;

    renderCurrentProblem();
}


function renderCurrentProblem() {
    const interaction =
        INTERACTIONS[
            lesson.practice.interaction
        ];

    if (!interaction) {
        document.getElementById("lesson-content").textContent =
            "Practice interaction not found.";

        return;
    }

    const problem =
        lessonState.problems[
            lessonState.currentProblem
        ];

    renderPracticeProgress();

    interaction.render(
        document.getElementById("lesson-content"),
        problem,
        {
            onCorrect: handleCorrect,
            onIncorrect: handleIncorrect
        }
    );
}


function handleCorrect(problem, answer) {
    lessonState.correctAnswers++;

    renderNextButton();

    document
        .querySelector(".next-button")
        ?.focus();

}


function handleIncorrect(problem, answer, explanationContainer) {
    lessonState.incorrectAnswers++;

    renderExplanation(
        explanationContainer,
        problem
    );
}

function renderExplanation(
    container,
    problem
) {
    const explanation =
        EXPLANATIONS[problem.explanation.type];

    if (!explanation) {
        return;
    }

    explanation.render(
        container,
        problem.explanation,
        problem
    );
}

function renderNextButton() {
    const container =
        document.getElementById("lesson-content");

    const isLastProblem =
        lessonState.currentProblem ===
        lessonState.problems.length - 1;

    const button =
        document.createElement("button");

    button.className = "next-button";
    button.type = "button";

    button.textContent =
        isLastProblem
            ? "Finish Lesson"
            : "Next Problem";

    button.addEventListener("click", () => {
        if (isLastProblem) {
            finishLesson();
        } else {
            nextProblem();
        }
    });

    container.appendChild(button);
}


function nextProblem() {
    lessonState.currentProblem++;

    renderCurrentProblem();
}


function finishLesson() {
    if (lessonState.completed) {
        return;
    }

    lessonState.completed = true;

    rewardLessonCompletion(
        lessonState.problems.length
    );

    completeLesson(courseId, lessonId);

    updateStreak();

    const unlockedAchievements =
    checkAllAchievements(
        courseId,
        lessonId,
        lessonState.incorrectAnswers > 0
    );
    showAchievementNotifications(unlockedAchievements);

    const unlockedThemes = unlockAvailableThemes()
    
    
    const progressContainer =
        document.getElementById("lesson-progress");

    if (progressContainer) {
        progressContainer.querySelector(".lesson-progress-fill").style.width =
    "100%";

        progressContainer.querySelector(".progress-info span:last-child")
            .textContent = "100%";
    }

    const container =
        document.getElementById("lesson-content");

    container.innerHTML = `
        <section class="lesson-complete">
            <h2>Lesson Complete! 🎉</h2>

            <p>
                You got
                <strong>
                    ${lessonState.correctAnswers}
                </strong>
                out of
                <strong>
                    ${lessonState.problems.length}
                </strong>
                problems correct.
            </p>
            <div class="lesson-rewards">
                <p>⭐ +50 XP</p>
                <p>🪙 +10 Coins</p>
            </div>

            <button
                class="next-button"
                type="button"
                onclick="window.location.href='course.html?id=${course.id}'"
            >
                Back to Course
            </button>
        </section>
    `;
}


function renderPracticeProgress() {
    const current =
        lessonState.currentProblem + 1;

    const total =
        lessonState.problems.length;

    const completed =
        lessonState.currentProblem;

    const progress =
        Math.floor(
            (completed / total) * 100
        );

    let progressContainer =
        document.getElementById("lesson-progress");

    if (!progressContainer) {
        progressContainer =
            document.createElement("div");

        progressContainer.id =
            "lesson-progress";

        document
            .getElementById("lesson-content")
            .before(progressContainer);
    }

    progressContainer.innerHTML = `
        <div class="progress-info">
            <span>Problem ${current} / ${total}</span>
            <span>${progress}%</span>
        </div>

        <div class="lesson-progress-bar">
            <div
                class="lesson-progress-fill"
                style="width: ${progress}%"
            ></div>
        </div>
    `;
}

