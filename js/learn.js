function renderCourses() {
    const container = document.getElementById("courses");

    for (const course of Object.values(COURSES)) {
        const card = document.createElement("div");

        card.className = "course-card";

        card.innerHTML = `
            <div class="course-icon">
                ${course.icon}
            </div>

            <div class="course-content">
                <h2>${course.title}</h2>

                <p>${course.description}</p>

                <div class="course-progress">
                    <div class="progress-info">
                        <span>Progress</span>
                        <span>0%</span>
                    </div>

                    <div class="progress-bar">
                        <div
                            class="progress-fill"
                            style="width: 0%;"
                        ></div>
                    </div>
                </div>
            </div>

            <button
                class="course-button"
                data-course="${course.id}"
            >
                Start
            </button>
        `;

        container.appendChild(card);
    }
    document.addEventListener("click", event => {
        const button = event.target.closest(".course-button");

        if (!button) {
            return;
        }

        const courseId = button.dataset.course;

        window.location.href = `course.html?id=${courseId}`;
    });
}