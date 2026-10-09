function isAchievementUnlocked(id, player) {
    return player.achievements.includes(id);
}


function unlockAchievement(id, player) {
    if (isAchievementUnlocked(id, player)) {
        return false;
    }

    player.achievements.push(id);

    const achievement = ACHIEVEMENTS.find(
        achievement => achievement.id === id
    );

    if (achievement) {
        console.log(`Achievement unlocked: ${achievement.title}`);
    }

    return true;
}
function getAchievementById(id) {
    return ACHIEVEMENTS.find(achievement => achievement.id === id);
}

// For achievements that unlock outside the end-of-lesson check
// (answer inputs, settings, mid-lesson events). Shows the pop-up right away.
function unlockAndNotify(...ids) {
    const player = getPlayer();

    const unlocked = ids.filter(id => unlockAchievement(id, player));

    if (unlocked.length === 0) {
        return;
    }

    savePlayer(player);

    showAchievementNotifications(
        unlocked.map(getAchievementById).filter(Boolean)
    );
}
function checkProgressionAchievements(player) {
    const unlocked = [];

    const track = (id) => {
        if (unlockAchievement(id, player)) {
            unlocked.push(id);
        }
    };

    if (player.xp >= 100) track("xp-100");
    if (player.xp >= 500) track("xp-500");
    if (player.xp >= 1000) track("xp-1000");
    if (player.xp >= 5000) track("xp-5000");

    if (player.problems >= 50) track("problems-50");
    if (player.problems >= 200) track("problems-200");
    if (player.problems >= 1000) track("problems-1000");

    if (player.streak >= 2) track("streak-2");
    if (player.streak >= 7) track("streak-7");
    if (player.streak >= 14) track("streak-14");
    if (player.streak >= 30) track("streak-30");

    if (player.completedLessons.length >= 1) track("lessons-1");
    if (player.completedLessons.length >= 10) track("lessons-10");

    return unlocked;
}

function checkCourseAchievements(player) {
    const unlocked = [];

    const track = (id) => {
        if (unlockAchievement(id, player)) {
            unlocked.push(id);
        }
    };

    const courses = Object.values(COURSES);

    if (isCourseCompleted(COURSES.numbers)) track("course-numbers");
    if (isCourseCompleted(COURSES.addition)) track("course-addition");
    if (isCourseCompleted(COURSES.subtraction)) track("course-subtraction");
    if (isCourseCompleted(COURSES.multiplication)) track("course-multiplication");
    if (isCourseCompleted(COURSES.division)) track("course-division");
    if (isCourseCompleted(COURSES["roman-numerals"])) track("course-roman-numerals");
    if (isCourseCompleted(COURSES.geometry)) track("course-geometry");
    if (isCourseCompleted(COURSES["advanced-numbers"])) track("course-advanced-numbers")
    if (isCourseCompleted(COURSES["advanced-addition"])) track("course-advanced-addition")
    if (isCourseCompleted(COURSES["advanced-subtraction"])) track("course-advanced-subtraction")
    if (isCourseCompleted(COURSES["equations"])) track("course-equations")
    if (isCourseCompleted(COURSES["negative-numbers"])) track("course-negative-numbers")
    const completedCourses = courses.filter(
        course => isCourseCompleted(course)
    ).length;

    if (completedCourses >= 1) track("course-first");
    if (completedCourses === courses.length) track("courses-all");

    const basicArithmeticCourses = [
        "addition",
        "subtraction",
        "multiplication",
        "division"
    ];

    const completedBasicArithmetic =
        basicArithmeticCourses.every(courseId =>
            isCourseCompleted(COURSES[courseId])
        );

    if (completedBasicArithmetic) track("courses-basic-arithmetic");

    return unlocked;
}

function checkSpecialAchievements(player, courseId, lessonId, hadMistake, lessonResult = {}) {
    const unlocked = [];

    const track = (id) => {
        if (unlockAchievement(id, player)) {
            unlocked.push(id);
        }
    };

    const today = getTodayDate();
    const now = new Date();

    // 10 LESSONS IN ONE DAY
    if (!player.achievementData.dailyLessons[today]) {
        player.achievementData.dailyLessons[today] = 0;
    }
    player.achievementData.dailyLessons[today]++;
    if (player.achievementData.dailyLessons[today] >= 10) {
        track("lessons-10-one-day");
    }

    // PERFECT LESSON / COMEBACK
    if (!hadMistake) {
        track("perfect-lesson");
    } else {
        track("comeback");
    }

    // 5 PERFECT LESSONS IN A ROW
    if (!hadMistake) {
        player.achievementData.consecutivePerfectLessons++;
        if (player.achievementData.consecutivePerfectLessons >= 5) {
            track("perfect-5-in-row");
        }
    } else {
        player.achievementData.consecutivePerfectLessons = 0;
    }

    // PI DAY
    if (now.getMonth() === 2 && now.getDate() === 14) {
        track("pi-day");
    }

    // 3 DIFFERENT COURSES IN ONE DAY
    if (!player.achievementData.dailyCourses[today]) {
        player.achievementData.dailyCourses[today] = [];
    }
    const dailyCourses = player.achievementData.dailyCourses[today];
    if (!dailyCourses.includes(courseId)) {
        dailyCourses.push(courseId);
    }
    if (dailyCourses.length >= 3) {
        track("three-courses-one-day");
    }

    // SAME LESSON 5 TIMES IN A ROW
    const recentLessons = player.achievementData.recentLessons;
    recentLessons.push({ courseId, lessonId });
    if (recentLessons.length > 5) {
        recentLessons.shift();
    }
    if (recentLessons.length === 5) {
        const first = recentLessons[0];
        const sameLesson = recentLessons.every(
            lesson =>
                lesson.courseId === first.courseId &&
                lesson.lessonId === first.lessonId
        );
        if (sameLesson) {
            track("same-lesson-5-times");
        }
    }

    // NIGHT LESSON / EARLY LESSON
    const minutes = now.getHours() * 60 + now.getMinutes();
    if (minutes >= 21 * 60 || minutes < 4 * 60) {
        track("night-lesson");
    }
    if (minutes >= 4 * 60 && minutes < 7 * 60 + 30) {
        track("early-lesson");
    }
    // PLOT TWIST
    if (lessonResult.plotTwist) {
        track("plot-twist");
    }

    // TASTING MENU (a lesson completed in every course)
    if (!player.achievementData.startedCourses) {
        player.achievementData.startedCourses = [];
    }
    const startedCourses = player.achievementData.startedCourses;
    if (!startedCourses.includes(courseId)) {
        startedCourses.push(courseId);
    }
    const allCourseIds = Object.values(COURSES).map(course => course.id);
    if (allCourseIds.every(id => startedCourses.includes(id))) {
        track("tasting-menu");
    }

    return unlocked;
}

function checkAllAchievements(courseId, lessonId, hadMistake, lessonResult = {}) {
    const player = getPlayer();

    const unlockedIds = [
        ...checkProgressionAchievements(player),
        ...checkCourseAchievements(player),
        ...checkSpecialAchievements(player, courseId, lessonId, hadMistake, lessonResult)
    ];

    savePlayer(player);

    return unlockedIds.map(id =>
        ACHIEVEMENTS.find(achievement => achievement.id === id)
    );
}

function checkAnswerAchievement(rawAnswer) {
    const text = String(rawAnswer).trim();

    if (text === "") {
        return;
    }

    const numeric = Number(text);
    const ids = [];

    if (numeric === 42) {
        ids.push("answer-42");
    }

    // Roman year takes priority, so MMXXVI doesn't also count as "not a number".
    if (text.toUpperCase() === arabicToRoman(new Date().getFullYear())) {
        ids.push("roman-year");
    } else if (!Number.isFinite(numeric)) {
        ids.push("does-not-compute");
    }

    unlockAndNotify(...ids);
}
// Call from handleCorrect.
function checkDejaVu(lessonState, problem) {
    const answer = problem.answer;
    const previous = lessonState.previousAnswer;
    lessonState.previousAnswer = answer;

    if (typeof answer === "number" && answer === previous) {
        unlockAndNotify("deja-vu");
    }
}

// True if every problem but the last was solved on the first try
// and the last one took more than one.
function isPlotTwist(lessonState) {
    const attempts = lessonState.attempts;

    if (attempts.length < 5) {
        return false;
    }

    const last = attempts[attempts.length - 1];
    const earlier = attempts.slice(0, -1);

    return last > 1 && earlier.every(count => count === 1);
}
let notificationQueue = Promise.resolve();

function showAchievementNotifications(achievements) {
    if (!achievements || achievements.length === 0) {
        return notificationQueue;
    }

    notificationQueue = notificationQueue
        .then(() => playAchievementNotifications(achievements))
        .catch(console.error);

    return notificationQueue;
}

async function playAchievementNotifications(achievements) {
    const notification =
        document.getElementById("achievement-notification");

    if (!notification) {
        return;
    }

    const icon =
        notification.querySelector(".achievement-notification-icon");

    const title =
        notification.querySelector(".achievement-notification-title");

    for (const achievement of achievements) {
        icon.textContent = achievement.icon;
        title.textContent = t(achievement.title);

        notification.classList.add("show");

        await new Promise(resolve => setTimeout(resolve, 3000));

        notification.classList.remove("show");

        await new Promise(resolve => setTimeout(resolve, 300));
    }
}

const ACHIEVEMENTS = [

    // =========================
    // PROGRESSION
    // =========================

    {
        id: "xp-100",
        title: "achievements.xp100.title",
        description: "achievements.xp100.description",
        icon: "⭐",
        category: "progression",

    },

    {
        id: "xp-500",
        title: "achievements.xp500.title",
        description: "achievements.xp500.description",
        icon: "⭐",
        category: "progression",

    },

    {
        id: "xp-1000",
        title: "achievements.xp1000.title",
        description: "achievements.xp1000.description",
        icon: "🌟",
        category: "progression",

    },

    {
        id: "xp-5000",
        title: "achievements.xp5000.title",
        description: "achievements.xp5000.description",
        icon: "🏆",
        category: "progression",

    },


    // =========================
    // TOTAL PROBLEMS
    // =========================

    {
        id: "problems-50",
        title: "achievements.problems50.title",
        description: "achievements.problems50.description",
        icon: "🧩",
        category: "progression",

    },

    {
        id: "problems-200",
        title: "achievements.problems200.title",
        description: "achievements.problems200.description",
        icon: "🧩",
        category: "progression",

    },

    {
        id: "problems-1000",
        title: "achievements.problems1000.title",
        description: "achievements.problems1000.description",
        icon: "🧩",
        category: "progression",

    },


    // =========================
    // STREAK
    // =========================

    {
        id: "streak-2",
        title: "achievements.streak2.title",
        description: "achievements.streak2.description",
        icon: "🔥",
        category: "progression",

    },

    {
        id: "streak-7",
        title: "achievements.streak7.title",
        description: "achievements.streak7.description",
        icon: "🔥",
        category: "progression",

    },

    {
        id: "streak-14",
        title: "achievements.streak14.title",
        description: "achievements.streak14.description",
        icon: "🔥",
        category: "progression",

    },

    {
        id: "streak-30",
        title: "achievements.streak30.title",
        description: "achievements.streak30.description",
        icon: "🔥",
        category: "progression",

    },


    // =========================
    // LESSONS
    // =========================

    {
        id: "lessons-1",
        title: "achievements.lessons1.title",
        description: "achievements.lessons1.description",
        icon: "📖",
        category: "progression",

    },

    {
        id: "lessons-10",
        title: "achievements.lessons10.title",
        description: "achievements.lessons10.description",
        icon: "📚",
        category: "progression",

    },


    // =========================
    // COURSES
    // =========================

    {
        id: "course-numbers",
        title: "achievements.courseNumbers.title",
        description: "achievements.courseNumbers.description",
        icon: "🔢",
        category: "progression",

    },

    {
        id: "course-addition",
        title: "achievements.courseAddition.title",
        description: "achievements.courseAddition.description",
        icon: "+",
        category: "progression",

    },

    {
        id: "course-subtraction",
        title: "achievements.courseSubtraction.title",
        description: "achievements.courseSubtraction.description",
        icon: "−",
        category: "progression",

    },

    {
        id: "course-multiplication",
        title: "achievements.courseMultiplication.title",
        description: "achievements.courseMultiplication.description",
        icon: "×",
        category: "progression",

    },

    {
        id: "course-division",
        title: "achievements.courseDivision.title",
        description: "achievements.courseDivision.description",
        icon: "÷",
        category: "progression",

    },

    {
        id: "course-roman-numerals",
        title: "achievements.courseRomanNumerals.title",
        description: "achievements.courseRomanNumerals.description",
        icon: "🏛️",
        category: "progression",

    },

    {
        id: "course-geometry",
        title: "achievements.courseGeometry.title",
        description: "achievements.courseGeometry.description",
        icon: "📐",
        category: "progression",

    },

    {
        id: "course-first",
        title: "achievements.courseFirst.title",
        description: "achievements.courseFirst.description",
        icon: "🎓",
        category: "progression",

    },

    {
        id: "courses-all",
        title: "achievements.coursesAll.title",
        description: "achievements.coursesAll.description",
        icon: "👑",
        category: "progression",

    },

    {
        id: "courses-basic-arithmetic",
        title: "achievements.coursesBasicArithmetic.title",
        description: "achievements.coursesBasicArithmetic.description",
        icon: "🧮",
        category: "progression",

    },

    {
        id: "course-advanced-numbers",
        title: "achievements.courseAdvancedNumbers.title",
        description: "achievements.courseAdvancedNumbers.description",
        icon: "🔢",
        category: "progression",

    },

    {
        id: "course-advanced-addition",
        title: "achievements.courseAdvancedAddition.title",
        description: "achievements.courseAdvancedAddition.description",
        icon: "+",
        category: "progression",

    },

    {
        id: "course-advanced-subtraction",
        title: "achievements.courseAdvancedSubtraction.title",
        description: "achievements.courseAdvancedSubtraction.description",
        icon: "−",
        category: "progression",

    },

    {
        id: "course-equations",
        title: "achievements.courseEquations.title",
        description: "achievements.courseEquations.description",
        icon: "=",
        category: "progression",

    },
    {
        id: "course-negative-numbers",
        title: "achievements.courseNegativeNumbers.title",
        description: "achievements.courseNegativeNumbers.description",
        icon: "-1",
        category: "progression",

    },


    // =========================
    // ONE-TIME / NON-ACCUMULATIVE
    // =========================

    {
        id: "lessons-10-one-day",
        title: "achievements.lessons10OneDay.title",
        description: "achievements.lessons10OneDay.description",
        icon: "⚡",
        category: "one-time",

    },

    {
        id: "perfect-lesson",
        title: "achievements.perfectLesson.title",
        description: "achievements.perfectLesson.description",
        icon: "💯",
        category: "one-time",

    },

    {
        id: "comeback",
        title: "achievements.comeback.title",
        description: "achievements.comeback.description",
        icon: "💪",
        category: "one-time",

    },

    {
        id: "perfect-5-in-row",
        title: "achievements.perfect5InRow.title",
        description: "achievements.perfect5InRow.description",
        icon: "🏅",
        category: "one-time",

    },


    // =========================
    // QUIRKY
    // =========================

    {
        id: "pi-day",
        title: "achievements.piDay.title",
        description: "achievements.piDay.description",
        icon: "🥧",
        category: "quirky",

    },

    {
        id: "three-courses-one-day",
        title: "achievements.threeCoursesOneDay.title",
        description: "achievements.threeCoursesOneDay.description",
        icon: "🌈",
        category: "quirky",

    },

    {
        id: "same-lesson-5-times",
        title: "achievements.sameLesson5Times.title",
        description: "achievements.sameLesson5Times.description",
        icon: "🔄",
        category: "quirky",

    },

    {
        id: "night-lesson",
        title: "achievements.nightLesson.title",
        description: "achievements.nightLesson.description",
        icon: "🌙",
        category: "quirky",

    },

    {
        id: "early-lesson",
        title: "achievements.earlyLesson.title",
        description: "achievements.earlyLesson.description",
        icon: "🌅",
        category: "quirky",

    },

    {
        id: "answer-42",
        title: "achievements.answer42.title",
        description: "achievements.answer42.description",
        icon: "🥚",
        category: "quirky",
        hint: "achievements.answer42.hint",

    },

    {
        id: "tasting-menu",
        title: "achievements.tastingMenu.title",
        description: "achievements.tastingMenu.description",
        icon: "🍽️",
        category: "progression",

    },

    {
        id: "plot-twist",
        title: "achievements.plotTwist.title",
        description: "achievements.plotTwist.description",
        icon: "🎬",
        category: "one-time",

    },

    {
        id: "deja-vu",
        title: "achievements.dejaVu.title",
        description: "achievements.dejaVu.description",
        icon: "🌀",
        category: "quirky",

    },

    {
        id: "does-not-compute",
        title: "achievements.doesNotCompute.title",
        description: "achievements.doesNotCompute.description",
        icon: "🤖",
        category: "quirky",
        hint: "achievements.doesNotCompute.hint",

    },

    {
        id: "roman-year",
        title: "achievements.romanYear.title",
        description: "achievements.romanYear.description",
        icon: "📜",
        category: "quirky",
        hint: "achievements.romanYear.hint",

    }

];