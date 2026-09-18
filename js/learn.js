function getCourseProgress(course) {
    const completedLessons =
        course.lessons.filter(lesson =>
            isLessonCompleted(
                course.id,
                lesson.id
            )
        ).length;

    return Math.floor(
        (completedLessons / course.lessons.length) * 100
    );
}
function renderCourses() {
    const container =
        document.getElementById("courses");

    container.innerHTML = "";

    for (const course of Object.values(COURSES)) {
        const progress =
            getCourseProgress(course);

        const completed =
            progress === 100;

        const card =
            document.createElement("div");

        card.className = "course-card";

        card.innerHTML = `
            <div class="course-header">
                <div class="course-icon">
                    ${course.icon}
                </div>

                <h2>${course.title}</h2>
            </div>

            <div class="course-content">
                <p>${course.description}</p>

                <div class="course-progress">
                    <div class="course-progress-info">
                        <span>Progress</span>
                        <span>${progress}%</span>
                    </div>

                    <div class="course-progress-bar">
                        <div
                            class="course-progress-fill"
                            style="width: ${progress}%"
                        ></div>
                    </div>
                </div>
            </div>

            <button
                class="course-button"
                data-course="${course.id}"
            >
                ${completed ? "Review" : "Start"}
            </button>
        `;

        container.appendChild(card);
    }

    document.addEventListener("click", event => {
        const button =
            event.target.closest(".course-button");

        if (!button) {
            return;
        }

        const courseId =
            button.dataset.course;

        window.location.href =
            `course.html?id=${courseId}`;
    });
}