function renderCourseProgress() {
    const container =
        document.getElementById("course-progress");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    Object.values(COURSES).forEach(course => {
        const progress = getCourseProgress(course);
        const completed = isCourseCompleted(course);

        const card = document.createElement("div");
        card.className = "course-card";

        card.innerHTML = `
            <div class="course-header">

                <div>

                    <span class="course-icon">
                        ${course.icon}
                    </span>

                    <span class="course-name">
                        ${course.title}
                    </span>

                </div>

                <span class="course-status ${completed ? "completed" : ""}">
                    ${completed ? "✓ Complete" : `${progress}%`}
                </span>

            </div>

            <div class="course-bar">

                <div
                    class="course-progress ${completed ? "complete" : ""}"
                    style="width: ${progress}%"
                ></div>

            </div>
        `;

        container.appendChild(card);
    });
}
const ACHIEVEMENTS_PER_PAGE = 6;

let showingAllAchievements = false;

function renderAchievementProgress() {
    const container =
        document.getElementById("achievement-progress");

    const button =
        document.getElementById("achievement-show-more");

    if (!container || !button) {
        return;
    }

    const player = getPlayer();

    const achievements = showingAllAchievements
        ? ACHIEVEMENTS
        : ACHIEVEMENTS.slice(0, ACHIEVEMENTS_PER_PAGE);

    container.innerHTML = "";

    achievements.forEach(achievement => {

        const unlocked =
            isAchievementUnlocked(achievement.id, player);

        const hidden =
            achievement.hidden && !unlocked;

        const icon = hidden
            ? "❓"
            : unlocked
                ? achievement.icon
                : "🔒";

        const title = hidden
            ? "Hidden Achievement"
            : achievement.title;

        const description = hidden
            ? "Keep exploring to discover this achievement!"
            : achievement.description;

        const card = document.createElement("div");

        card.className =
            `achievement-card ${unlocked ? "unlocked" : "locked"}`;

        card.innerHTML = `
            <span class="achievement-icon">
                ${icon}
            </span>

            <div>
                <h3>${title}</h3>

                <p>${description}</p>
            </div>
        `;

        container.appendChild(card);
    });

    if (showingAllAchievements) {
        button.textContent = "Show less";
    } else {
        button.textContent = "Show more";
    }

    button.style.display =
        ACHIEVEMENTS.length > ACHIEVEMENTS_PER_PAGE
            ? "block"
            : "none";
}
function renderProgressPage() {
    updatePlayerDisplay();

    renderCourseProgress();
    renderAchievementProgress();
    document
    .getElementById("achievement-show-more")
    .addEventListener("click", () => {

        showingAllAchievements =
            !showingAllAchievements;

        renderAchievementProgress();
    });
}

renderProgressPage();