const PLAYER_STORAGE_KEY = "mathAdventurePlayer";

const DEFAULT_PLAYER = {
    name: "Player",
    xp: 950,
    coins: 444,
    problems: 777,
    streak: 333
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
        xpUntilNext: getNextLevelXP(player.xp) - player.xp

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

    player.xp += 50;
    player.coins += 10;
    player.problems += problemCount;

    savePlayer(player);

    return player;
}