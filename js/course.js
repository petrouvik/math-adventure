const params = new URLSearchParams(
    window.location.search
);

const courseId = params.get("id");

const course = COURSES[courseId];


function renderCourse() {

    if (!course) {
        return;
    }

    renderCourseHeader();
    renderLessons();

    document.addEventListener("click", event => {

        const button =
            event.target.closest(".lesson-button");

        if (!button) {
            return;
        }

        const lessonId =
            button.dataset.lesson;

        window.location.href =
            `lesson.html?course=${course.id}&lesson=${lessonId}`;
    });
}


function renderCourseHeader() {

    const header =
        document.getElementById("course-header");

    header.innerHTML = `
        <div class="large-course-icon">
            ${course.icon}
        </div>

        <div>
            <h1>${t(course.title)}</h1>

            <p>
                ${t(course.description)}
            </p>
        </div>
    `;
}


function renderLessons() {

    const container =
        document.getElementById("lesson-list");

    container.innerHTML = "";

    course.lessons.forEach((lesson, index) => {

        const completed =
            isLessonCompleted(
                course.id,
                lesson.id
            );

        const unlocked =
            isLessonUnlocked(
                course.id,
                lesson.id
            );

        const card =
            document.createElement("div");

        card.className = "lesson-card";

        if (completed) {
            card.classList.add("completed");

        } else if (!unlocked) {
            card.classList.add("locked");
        }


        let numberContent;
        let buttonContent;

        if (completed) {

            numberContent = "✓";
            buttonContent = t("course.review");

        } else if (unlocked) {

            numberContent = index + 1;
            buttonContent = t("course.start");

        } else {

            numberContent = "🔒";
            buttonContent = t("course.locked");
        }


        card.innerHTML = `
            <div class="lesson-number">
                ${numberContent}
            </div>

            <div class="lesson-info">
                <h3>${t(lesson.title)}</h3>
                <p>${t(lesson.description)}</p>
            </div>

            <button
                class="lesson-button"
                data-lesson="${lesson.id}"
                ${!unlocked ? "disabled" : ""}
            >
                ${buttonContent}
            </button>
        `;

        container.appendChild(card);
    });
}