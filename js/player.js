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
        return { ...DEFAULT_PLAYER };
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
// function updatePlayerDisplay() {
//     const player = getPlayer();

//     const levelElement = document.getElementById("player-level");
//     const coinsElement = document.getElementById("player-coins");
//     const xpElement = document.getElementById("player-xp");
//     const nameElement = document.getElementById("player-name");
//     const nextLevelElement = document.getElementById("player-next-level");
//     const levelPercentageElement = document.getElementById("player-level-percentage");
//     const streakElement = document.getElementById("player-streak");
//     const problemsElement = document.getElementById("player-problems");
//     const xpProgressElement = document.querySelector(".xp-progress");

//     if (levelElement) {
//         levelElement.textContent = getLevel(player.xp);
//     }

//     if (coinsElement) {
//         coinsElement.textContent = player.coins;
//     }

//     if (xpElement) {
//         xpElement.textContent = player.xp;
//     }

//     if(nameElement){
//         nameElement.textContent = player.name;
//     }

//     if(nextLevelElement){
//         nextLevelElement.textContent = getNextLevelXP(player.xp);
//     }

//     if(levelPercentageElement){
//         levelPercentageElement.textContent = getLevelPercentage(player.xp);
//     }

//     if(streakElement){
//         streakElement.textContent = player.streak;
//     }

//     if (problemsElement) {
//         problemsElement.textContent = player.problems;
//     }

//     if (xpProgressElement) {
//         xpProgressElement.style.width = `${getLevelPercentage(player.xp)}%`;
//     }
// }
