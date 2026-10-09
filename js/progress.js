
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
                        ${t(course.title)}
                    </span>
                </div>

                <span class="course-status ${completed ? "completed" : ""}">
                    ${completed
                ? t("progress.complete")
                : `${progress}%`}
                </span>
            </div>

            <div class="course-bar">
                <div
                    class="course-progress"
                    style="width: 0%"
                ></div>
            </div>
        `;

        container.appendChild(card);

        const bar = card.querySelector(".course-progress");

        requestAnimationFrame(() => {
            bar.style.width = `${progress}%`;
        });
    });
}


const ACHIEVEMENTS_PER_PAGE = 6;

let showingAllAchievements = false;


// 0 = unlocked, 1 = locked with a plain requirement, 2 = locked with a cryptic hint
function getAchievementGroup(achievement, player) {
    if (isAchievementUnlocked(achievement.id, player)) {
        return 0;
    }

    return achievement.hint ? 2 : 1;
}

function renderAchievementProgress() {
    const container =
        document.getElementById("achievement-progress");

    const button =
        document.getElementById("achievement-show-more");

    if (!container || !button) {
        return;
    }

    const player = getPlayer();

    // sort() is stable, so each group keeps its order from ACHIEVEMENTS.
    const sorted = [...ACHIEVEMENTS].sort(
        (a, b) =>
            getAchievementGroup(a, player) -
            getAchievementGroup(b, player)
    );

    const achievements =
        showingAllAchievements
            ? sorted
            : sorted.slice(0, ACHIEVEMENTS_PER_PAGE);

    container.innerHTML = "";

    achievements.forEach(achievement => {
        const unlocked =
            isAchievementUnlocked(achievement.id, player);

        let icon;
        let title;
        let description;

        if (unlocked) {
            icon = achievement.icon;
            title = t(achievement.title);
            description = t(achievement.description);
        } else {
            title = "???"

            if (achievement.hint) {
                icon = "❓";
                description = t(achievement.hint);
            } else {
                icon = "🔒";
                description = t(achievement.description);
            }
        }

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

    button.textContent =
        showingAllAchievements
            ? t("progress.showLess")
            : t("progress.showMore");

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