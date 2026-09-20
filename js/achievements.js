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
        title.textContent = achievement.title;

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
        title: "XP, here I come",
        description: "Earn 100 total XP.",
        icon: "⭐",
        category: "progression",
        hidden: false
    },

    {
        id: "xp-500",
        title: "XP stands for eXperience Points...",
        description: "Earn 500 total XP.",
        icon: "⭐",
        category: "progression",
        hidden: false
    },

    {
        id: "xp-1000",
        title: "..or maybe just eXtra Practice",
        description: "Earn 1,000 total XP.",
        icon: "🌟",
        category: "progression",
        hidden: false
    },

    {
        id: "xp-5000",
        title: "Holy moly that's a lot of XP",
        description: "Earn 5,000 total XP.",
        icon: "🏆",
        category: "progression",
        hidden: false
    },


    // =========================
    // TOTAL PROBLEMS
    // =========================

    {
        id: "problems-50",
        title: "No problemo",
        description: "Solve 50 problems.",
        icon: "🧩",
        category: "progression",
        hidden: false
    },

    {
        id: "problems-200",
        title: "There's always a problem",
        description: "Solve 200 problems.",
        icon: "🧩",
        category: "progression",
        hidden: false
    },

    {
        id: "problems-1000",
        title: "Problem-solving machine",
        description: "Solve 1,000 problems.",
        icon: "🧩",
        category: "progression",
        hidden: false
    },


    // =========================
    // STREAK
    // =========================

    {
        id: "streak-2",
        title: "Back for more",
        description: "Learn on 2 consecutive days.",
        icon: "🔥",
        category: "progression",
        hidden: false
    },

    {
        id: "streak-7",
        title: "Ooh, hot, hot",
        description: "Maintain a 7-day learning streak.",
        icon: "🔥",
        category: "progression",
        hidden: false
    },

    {
        id: "streak-14",
        title: "Flaming",
        description: "Maintain a 14-day learning streak.",
        icon: "🔥",
        category: "progression",
        hidden: false
    },

    {
        id: "streak-30",
        title: "Phoenix",
        description: "Maintain a 30-day learning streak.",
        icon: "🔥",
        category: "progression",
        hidden: false
    },


    // =========================
    // LESSONS
    // =========================

    {
        id: "lessons-1",
        title: "First steps",
        description: "Finish your first lesson.",
        icon: "📖",
        category: "progression",
        hidden: false
    },

    {
        id: "lessons-10",
        title: "I. Need. Lessons.",
        description: "Finish 10 lessons.",
        icon: "📚",
        category: "progression",
        hidden: false
    },


    // =========================
    // COURSES
    // =========================

    {
        id: "course-numbers",
        title: "Numbertastic",
        description: "Finish the Numbers course.",
        icon: "🔢",
        category: "progression",
        hidden: false
    },

    {
        id: "course-addition",
        title: "Summator",
        description: "Finish the Addition course.",
        icon: "+",
        category: "progression",
        hidden: false
    },

    {
        id: "course-subtraction",
        title: "Deductor",
        description: "Finish the Subtraction course.",
        icon: "−",
        category: "progression",
        hidden: false
    },

    {
        id: "course-multiplication",
        title: "Times tables are easy",
        description: "Finish the Multiplication course.",
        icon: "×",
        category: "progression",
        hidden: false
    },
    
    {
        id: "course-division",
        title: "Divide and conquer",
        description: "Finish the Division course.",
        icon: "÷",
        category: "progression",
        hidden: false
    },

    {
        id: "course-roman-numerals",
        title: "Veni, vidi, vici",
        description: "Finish the Roman Numerals course.",
        icon: "🏛️",
        category: "progression",
        hidden: false
    },

    {
        id: "course-geometry",
        title: "Geometry smash",
        description: "Finish the Geometry course.",
        icon: "📐",
        category: "progression",
        hidden: false
    },

    {
        id: "course-first",
        title: "On course for knowledge",
        description: "Finish your first course.",
        icon: "🎓",
        category: "progression",
        hidden: false
    },

    {
        id: "courses-all",
        title: "Of course you're the best",
        description: "Finish all available courses.",
        icon: "👑",
        category: "progression",
        hidden: false
    },

    {
        id: "courses-basic-arithmetic",
        title: "Add, subtract, multiply, divide, repeat",
        description: "Finish all basic arithmetic courses.",
        icon: "🧮",
        category: "progression",
        hidden: false
    },
    
    {
        id: "course-advanced-numbers",
        title: "IT'S OVER ONE THOUSAAAND!",
        description: "Finish the Advanced Numbers course.",
        icon: "🔢",
        category: "progression",
        hidden: false
    },


    // =========================
    // ONE-TIME / NON-ACCUMULATIVE
    // =========================

    {
        id: "lessons-10-one-day",
        title: "Not now, mom. I'm doing math!",
        description: "Complete 10 lessons on the same day.",
        icon: "⚡",
        category: "one-time",
        hidden: false
    },

    {
        id: "perfect-lesson",
        title: "Perfection.",
        description: "Complete a lesson without making a mistake.",
        icon: "💯",
        category: "one-time",
        hidden: false
    },

    {
        id: "comeback",
        title: "When we fall, we get up.",
        description: "Complete a lesson after making a mistake.",
        icon: "💪",
        category: "one-time",
        hidden: false
    },

    {
        id: "perfect-5-in-row",
        title: "Mistakes? I don't know what mistakes are.",
        description: "Complete 5 lessons in a row without making a mistake.",
        icon: "🏅",
        category: "one-time",
        hidden: false
    },


    // =========================
    // QUIRKY
    // =========================

    {
        id: "pi-day",
        title: "i 8 π",
        description: "Complete a lesson on Pi Day.",
        icon: "🥧",
        category: "quirky",
        hidden: false
    },

    {
        id: "three-courses-one-day",
        title: "Jack of all trades",
        description: "Complete lessons from 3 different courses on the same day.",
        icon: "🌈",
        category: "quirky",
        hidden: false
    },

    {
        id: "same-lesson-5-times",
        title: "Muscle memory",
        description: "Complete the same lesson 5 times in a row.",
        icon: "🔄",
        category: "quirky",
        hidden: false
    },

    {
        id: "night-lesson",
        title: "Nightly maths",
        description: "Complete a lesson between 21:00 and 04:00.",
        icon: "🌙",
        category: "quirky",
        hidden: true
    },

    {
        id: "early-lesson",
        title: "Early bird catches the lesson",
        description: "Complete a lesson between 04:00 and 07:30.",
        icon: "🌅",
        category: "quirky",
        hidden: true
    },

    {
        id: "answer-42",
        title: "The answer to everything (not really)",
        description: "Enter 42 into an answer input.",
        icon: "🥚",
        category: "quirky",
        hidden: true
    }

];