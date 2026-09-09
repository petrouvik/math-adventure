const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

const course = COURSES[courseId];
function renderCourse() {
    if (!course) {
        return;
    }

    renderCourseHeader();
    renderLessons();
    document.addEventListener("click", event => {
        const button = event.target.closest(".lesson-button");

        if (!button) {
            return;
        }

        const lessonId = button.dataset.lesson;

        window.location.href =
            `lesson.html?course=${course.id}&lesson=${lessonId}`;
    });
}

function renderCourseHeader() {
    const header = document.getElementById("course-header");

    header.innerHTML = `
        <div class="large-course-icon">
            ${course.icon}
        </div>

        <div>
            <h1>${course.title}</h1>

            <p>
                ${course.description}
            </p>
        </div>
    `;
}
function renderLessons() {
    const container = document.getElementById("lesson-list");

    course.lessons.forEach((lesson, index) => {
        const card = document.createElement("div");

        card.className = "lesson-card";

        card.innerHTML = `
            <div class="lesson-number">
                ${index + 1}
            </div>

            <div class="lesson-info">
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
            </div>

            <button
                class="lesson-button"
                data-lesson="${lesson.id}"
            >
                Start
            </button>
        `;

        container.appendChild(card);
    });
}