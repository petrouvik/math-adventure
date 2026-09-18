const PLAYER_STORAGE_KEY = "mathAdventurePlayer";

const DEFAULT_PLAYER = {
    name: "Player",
    
    xp: 0,
    coins: 0,
    problems: 0,
    
    streak: 0,
    lastActivityDate: null,
    
    completedLessons: [],
    
    dailyProgress: {},
    completedLessons: [],

    achievements: [],
    achievementData:{
        dailyLessons: {},
        dailyCourses: {},
        consecutivePerfectLessons: 0,
        recentLessons: []
    },

    theme: "default",
    unlockedThemes: ["default"]

};


function getPlayer() {
    const stored = localStorage.getItem(PLAYER_STORAGE_KEY);

    if (!stored) {
        const player = { ...DEFAULT_PLAYER };
        savePlayer(player);
        return player;
    }

    return JSON.parse(stored);
}


function savePlayer(player) {
    localStorage.setItem(
        PLAYER_STORAGE_KEY,
        JSON.stringify(player)
    );
}


function getLevel(xp) {
    return Math.floor(xp / 100) + 1;
}

function getNextLevelXP(xp){
    return getLevel(xp) * 100;
}

function getLevelPercentage(xp) {
    const level = getLevel(xp);

    const currentLevelXP = (level - 1) * 100;
    const nextLevelXP = level * 100;

    return Math.floor(
        ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100
    );
}

function updatePlayerDisplay() {
    const player = getPlayer();
    const todayProgress = getTodayProgress();

    const values = {
        level: getLevel(player.xp),
        coins: player.coins,
        xp: player.xp,
        name: player.name,
        nextLevelXP: getNextLevelXP(player.xp),
        levelPercentage: getLevelPercentage(player.xp),
        streak: player.streak,
        problems: player.problems,
        nextLevel: getLevel(player.xp) + 1,
        xpUntilNext: getNextLevelXP(player.xp) - player.xp,
        todayXP: todayProgress.xp,
        todayProblems: todayProgress.problems,
    };

    for (const [key, value] of Object.entries(values)) {
        document.querySelectorAll(`[data-player="${key}"]`)
            .forEach(element => {
                element.textContent = value;
            });
    }

    document.querySelectorAll('[data-player="xp-progress"]')
        .forEach(element => {
            element.style.width = `${getLevelPercentage(player.xp)}%`;
        });
}

function rewardLessonCompletion(problemCount) {
    const player = getPlayer();
    const today = getTodayDate();

    if (!player.dailyProgress[today]) {
        player.dailyProgress[today] = {
            xp: 0,
            problems: 0
        };
    }

    player.xp += 50;
    player.coins += 10;
    player.problems += problemCount;

    player.dailyProgress[today].xp += 50;
    player.dailyProgress[today].problems += problemCount;

    savePlayer(player);

    return player;
}

function getLessonKey(courseId, lessonId) {
    return `${courseId}:${lessonId}`;
}

function isLessonCompleted(courseId, lessonId) {
    const player = getPlayer();

    return player.completedLessons.includes(
        getLessonKey(courseId, lessonId)
    );
}
function completeLesson(courseId, lessonId) {
    const player = getPlayer();

    const key =
        getLessonKey(courseId, lessonId);

    if (player.completedLessons.includes(key)) {
        return false;
    }

    player.completedLessons.push(key);

    savePlayer(player);

    return true;
}
function isLessonUnlocked(courseId, lessonId) {
    const course = COURSES[courseId];

    if (!course) {
        return false;
    }

    const lessonIndex =
        course.lessons.findIndex(
            lesson => lesson.id === lessonId
        );

    if (lessonIndex === -1) {
        return false;
    }

    if (lessonIndex === 0) {
        return true;
    }

    const previousLesson =
        course.lessons[lessonIndex - 1];

    return isLessonCompleted(
        courseId,
        previousLesson.id
    );
}
function isCourseCompleted(course) {
    return course.lessons.every(lesson =>
        isLessonCompleted(course.id, lesson.id)
    );
    
}
function getCourseProgress(course) {
    if (!course || course.lessons.length === 0) {
        return 0;
    }

    const completedLessons =
        course.lessons.filter(lesson =>
            isLessonCompleted(course.id, lesson.id)
        ).length;

    return Math.floor(
        (completedLessons / course.lessons.length) * 100
    );
}

function isCourseCompleted(course) {
    if (!course || course.lessons.length === 0) {
        return false;
    }

    return course.lessons.every(lesson =>
        isLessonCompleted(course.id, lesson.id)
    );
}
function getTodayDate() {
    const date = new Date();

    return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0")
    ].join("-");
}
function getDaysBetween(date1, date2) {
    const first = new Date(`${date1}T00:00:00`);
    const second = new Date(`${date2}T00:00:00`);

    const difference =
        Math.abs(second - first);

    return Math.round(
        difference / (1000 * 60 * 60 * 24)
    );
}
function updateStreak() {
    const player = getPlayer();

    const today = getTodayDate();

    if (!player.lastActivityDate) {
        player.streak = 1;
        player.lastActivityDate = today;

        savePlayer(player);

        return player.streak;
    }

    if (player.lastActivityDate === today) {
        return player.streak;
    }

    const daysSinceActivity =
        getDaysBetween(
            player.lastActivityDate,
            today
        );

    if (daysSinceActivity === 1) {
        player.streak++;
    } else {
        player.streak = 1;
    }

    player.lastActivityDate = today;

    savePlayer(player);

    return player.streak;
}

function getTodayProgress() {
    const player = getPlayer();
    const today = getTodayDate();

    return player.dailyProgress[today] || {
        xp: 0,
        problems: 0
    };
}