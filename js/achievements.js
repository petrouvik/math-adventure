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

function checkSpecialAchievements(player, courseId, lessonId, hadMistake) {
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

    return unlocked;
}

function checkAllAchievements(courseId, lessonId, hadMistake) {
    const player = getPlayer();

    const unlockedIds = [
        ...checkProgressionAchievements(player),
        ...checkCourseAchievements(player),
        ...checkSpecialAchievements(player, courseId, lessonId, hadMistake)
    ];

    savePlayer(player);

    return unlockedIds.map(id =>
        ACHIEVEMENTS.find(achievement => achievement.id === id)
    );
}

function checkAnswerAchievement(answer) {
    if (String(answer).trim() !== "42") {
        return null;
    }

    const player = getPlayer();

    if (!unlockAchievement("answer-42", player)) {
        return null;
    }

    savePlayer(player);

    return ACHIEVEMENTS.find(
        achievement => achievement.id === "answer-42"
    );
}

async function showAchievementNotifications(achievements) {
    const notification =
        document.getElementById("achievement-notification");

    if (!notification || achievements.length === 0) {
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

        await new Promise(resolve => {
            setTimeout(resolve, 3000);
        });

        notification.classList.remove("show");

        await new Promise(resolve => {
            setTimeout(resolve, 300);
        });
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
        hidden: false
    },

    {
        id: "xp-500",
        title: "achievements.xp500.title",
        description: "achievements.xp500.description",
        icon: "⭐",
        category: "progression",
        hidden: false
    },

    {
        id: "xp-1000",
        title: "achievements.xp1000.title",
        description: "achievements.xp1000.description",
        icon: "🌟",
        category: "progression",
        hidden: false
    },

    {
        id: "xp-5000",
        title: "achievements.xp5000.title",
        description: "achievements.xp5000.description",
        icon: "🏆",
        category: "progression",
        hidden: false
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
        hidden: false
    },

    {
        id: "problems-200",
        title: "achievements.problems200.title",
        description: "achievements.problems200.description",
        icon: "🧩",
        category: "progression",
        hidden: false
    },

    {
        id: "problems-1000",
        title: "achievements.problems1000.title",
        description: "achievements.problems1000.description",
        icon: "🧩",
        category: "progression",
        hidden: false
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
        hidden: false
    },

    {
        id: "streak-7",
        title: "achievements.streak7.title",
        description: "achievements.streak7.description",
        icon: "🔥",
        category: "progression",
        hidden: false
    },

    {
        id: "streak-14",
        title: "achievements.streak14.title",
        description: "achievements.streak14.description",
        icon: "🔥",
        category: "progression",
        hidden: false
    },

    {
        id: "streak-30",
        title: "achievements.streak30.title",
        description: "achievements.streak30.description",
        icon: "🔥",
        category: "progression",
        hidden: false
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
        hidden: false
    },

    {
        id: "lessons-10",
        title: "achievements.lessons10.title",
        description: "achievements.lessons10.description",
        icon: "📚",
        category: "progression",
        hidden: false
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
        hidden: false
    },

    {
        id: "course-addition",
        title: "achievements.courseAddition.title",
        description: "achievements.courseAddition.description",
        icon: "+",
        category: "progression",
        hidden: false
    },

    {
        id: "course-subtraction",
        title: "achievements.courseSubtraction.title",
        description: "achievements.courseSubtraction.description",
        icon: "−",
        category: "progression",
        hidden: false
    },

    {
        id: "course-multiplication",
        title: "achievements.courseMultiplication.title",
        description: "achievements.courseMultiplication.description",
        icon: "×",
        category: "progression",
        hidden: false
    },

    {
        id: "course-division",
        title: "achievements.courseDivision.title",
        description: "achievements.courseDivision.description",
        icon: "÷",
        category: "progression",
        hidden: false
    },

    {
        id: "course-roman-numerals",
        title: "achievements.courseRomanNumerals.title",
        description: "achievements.courseRomanNumerals.description",
        icon: "🏛️",
        category: "progression",
        hidden: false
    },

    {
        id: "course-geometry",
        title: "achievements.courseGeometry.title",
        description: "achievements.courseGeometry.description",
        icon: "📐",
        category: "progression",
        hidden: false
    },

    {
        id: "course-first",
        title: "achievements.courseFirst.title",
        description: "achievements.courseFirst.description",
        icon: "🎓",
        category: "progression",
        hidden: false
    },

    {
        id: "courses-all",
        title: "achievements.coursesAll.title",
        description: "achievements.coursesAll.description",
        icon: "👑",
        category: "progression",
        hidden: false
    },

    {
        id: "courses-basic-arithmetic",
        title: "achievements.coursesBasicArithmetic.title",
        description: "achievements.coursesBasicArithmetic.description",
        icon: "🧮",
        category: "progression",
        hidden: false
    },

    {
        id: "course-advanced-numbers",
        title: "achievements.courseAdvancedNumbers.title",
        description: "achievements.courseAdvancedNumbers.description",
        icon: "🔢",
        category: "progression",
        hidden: false
    },

    {
        id: "course-advanced-addition",
        title: "achievements.courseAdvancedAddition.title",
        description: "achievements.courseAdvancedAddition.description",
        icon: "+",
        category: "progression",
        hidden: false
    },

    {
        id: "course-advanced-subtraction",
        title: "achievements.courseAdvancedSubtraction.title",
        description: "achievements.courseAdvancedSubtraction.description",
        icon: "−",
        category: "progression",
        hidden: false
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
        hidden: false
    },

    {
        id: "perfect-lesson",
        title: "achievements.perfectLesson.title",
        description: "achievements.perfectLesson.description",
        icon: "💯",
        category: "one-time",
        hidden: false
    },

    {
        id: "comeback",
        title: "achievements.comeback.title",
        description: "achievements.comeback.description",
        icon: "💪",
        category: "one-time",
        hidden: false
    },

    {
        id: "perfect-5-in-row",
        title: "achievements.perfect5InRow.title",
        description: "achievements.perfect5InRow.description",
        icon: "🏅",
        category: "one-time",
        hidden: false
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
        hidden: false
    },

    {
        id: "three-courses-one-day",
        title: "achievements.threeCoursesOneDay.title",
        description: "achievements.threeCoursesOneDay.description",
        icon: "🌈",
        category: "quirky",
        hidden: false
    },

    {
        id: "same-lesson-5-times",
        title: "achievements.sameLesson5Times.title",
        description: "achievements.sameLesson5Times.description",
        icon: "🔄",
        category: "quirky",
        hidden: false
    },

    {
        id: "night-lesson",
        title: "achievements.nightLesson.title",
        description: "achievements.nightLesson.description",
        icon: "🌙",
        category: "quirky",
        hidden: true
    },

    {
        id: "early-lesson",
        title: "achievements.earlyLesson.title",
        description: "achievements.earlyLesson.description",
        icon: "🌅",
        category: "quirky",
        hidden: true
    },

    {
        id: "answer-42",
        title: "achievements.answer42.title",
        description: "achievements.answer42.description",
        icon: "🥚",
        category: "quirky",
        hidden: true
    }

];