const THEMES = [

    // --------------------------------------------------
    // DEFAULT
    // --------------------------------------------------

    {
        id: "default",

        name: "Classic",
        description: "The original Math Adventure theme.",
        icon: "🧮",

        colors: {
            background: "#f8f9ff",
            surface: "#ffffff",

            text: "#222222",
            mutedText: "#777777",

            primary: "#6c63ff",
            primaryText: "#ffffff",

            secondary: "#eeeeee",
            secondaryText: "#444444",

            border: "#dddddd",

            success: "#4caf50",
            danger: "#e74c3c",

            progressBackground: "#eeeeee",

            navBackground: "#ffffff",
            navText: "#777777",
            navActive: "#6c63ff",

            highlight: "#f6c445",
            highlightBackground: "#fff9e6",

            infoBackground: "#eff6ff",
            infoBorder: "#e0e7ff",

            inputBorder: "#dfe3eb"
        },

        shadow: "0 4px 15px rgba(0, 0, 0, 0.10)",

        unlock: {
            type: "default"
        }
    },


    // --------------------------------------------------
    // PURCHASE
    // --------------------------------------------------

    {
        id: "ocean",

        name: "Ocean",
        description: "A calm theme inspired by the sea.",
        icon: "🌊",

        colors: {
            background: "#eaf7fb",
            surface: "#ffffff",

            text: "#16323f",
            mutedText: "#64808c",

            primary: "#168aad",
            primaryText: "#ffffff",

            secondary: "#d9eef4",
            secondaryText: "#285563",

            border: "#b9dce5",

            success: "#38a169",
            danger: "#e05252",

            progressBackground: "#d5eaf0",

            navBackground: "#ffffff",
            navText: "#64808c",
            navActive: "#168aad",

            highlight: "#f4c95d",
            highlightBackground: "#fff8df",

            infoBackground: "#e3f5fa",
            infoBorder: "#b9e0ea",

            inputBorder: "#b9dce5"
        },

        shadow: "0 4px 15px rgba(22, 138, 173, 0.12)",

        unlock: {
            type: "purchase",
            price: 250
        }
    },


    {
        id: "candy",

        name: "Candy",
        description: "A sweet and colorful theme.",
        icon: "🍬",

        colors: {
            background: "#fff0f7",
            surface: "#ffffff",

            text: "#45263a",
            mutedText: "#9a7087",

            primary: "#e85d9e",
            primaryText: "#ffffff",

            secondary: "#f8dce9",
            secondaryText: "#70435b",

            border: "#edbfd5",

            success: "#63b77b",
            danger: "#e85d68",

            progressBackground: "#f5dce8",

            navBackground: "#ffffff",
            navText: "#9a7087",
            navActive: "#e85d9e",

            highlight: "#f5c95b",
            highlightBackground: "#fff6d9",

            infoBackground: "#f5e6f4",
            infoBorder: "#e4c7e0",

            inputBorder: "#edbfd5"
        },

        shadow: "0 4px 15px rgba(232, 93, 158, 0.14)",

        unlock: {
            type: "purchase",
            price: 500
        }
    },


    {
        id: "matrix",

        name: "Matrix",
        description: "Enter the mathematical machine.",
        icon: "💻",

        colors: {
            background: "#050805",
            surface: "#0b120b",

            text: "#b8ffb8",
            mutedText: "#5fa85f",

            primary: "#00d639",
            primaryText: "#001a05",

            secondary: "#102010",
            secondaryText: "#75c975",

            border: "#1d5c28",

            success: "#00e63d",
            danger: "#ff4d4d",

            progressBackground: "#122512",

            navBackground: "#080d08",
            navText: "#5fa85f",
            navActive: "#00d639",

            highlight: "#a8ff00",
            highlightBackground: "#152400",

            infoBackground: "#0d200f",
            infoBorder: "#1d5c28",

            inputBorder: "#267334"
        },

        shadow: "0 4px 15px rgba(0, 214, 57, 0.20)",

        unlock: {
            type: "purchase",
            price: 500
        }
    },


    {
    id: "earth",
    name: "Earth",
    description: "A colorful adventure across oceans, continents, and skies.",
    icon: "🌍",
    colors: {
        background: "#0877a8",
        surface: "#0f5f82",
        text: "#fff1b8",
        mutedText: "#b9e6f2",

        primary: "#39c95a",
        primaryText: "#082f18",

        secondary: "#176f91",
        secondaryText: "#ffe27a",

        border: "#36a9cf",

        success: "#65d84f",
        danger: "#ff5b45",

        progressBackground: "#064f73",

        navBackground: "#075b7f",
        navText: "#a9dce9",
        navActive: "#54d4ff",

        highlight: "#ffd83d",
        highlightBackground: "#6d5700",

        infoBackground: "#0a668c",
        infoBorder: "#3db9dd",

        inputBorder: "#4bb1cf"
    },

    shadow: "0 4px 18px rgba(0, 35, 55, 0.35)",

    unlock: {
        type: "purchase",
        price: 500
    }
},


    {
        id: "winter",

        name: "Winter",
        description: "A crisp and bright winter wonderland.",
        icon: "❄️",

        colors: {
            background: "#eef8ff",
            surface: "#ffffff",

            text: "#18344d",
            mutedText: "#6d879b",

            primary: "#2696d6",
            primaryText: "#ffffff",

            secondary: "#dceefa",
            secondaryText: "#315c79",

            border: "#bdd9ea",

            success: "#45a878",
            danger: "#d95b5b",

            progressBackground: "#dceef8",

            navBackground: "#ffffff",
            navText: "#6d879b",
            navActive: "#2696d6",

            highlight: "#f2c957",
            highlightBackground: "#fff8dd",

            infoBackground: "#e2f2fb",
            infoBorder: "#c0deef",

            inputBorder: "#bdd9ea"
        },

        shadow: "0 4px 15px rgba(38, 150, 214, 0.14)",

        unlock: {
            type: "purchase",
            price: 750
        }
    },


    // --------------------------------------------------
    // LEVEL UNLOCKS
    // --------------------------------------------------

    {
        id: "forest",

        name: "Forest",
        description: "A fresh green theme for exploring the world of numbers.",
        icon: "🌲",

        colors: {
            background: "#f1f8f2",
            surface: "#ffffff",

            text: "#243b2a",
            mutedText: "#718274",

            primary: "#3a8f5b",
            primaryText: "#ffffff",

            secondary: "#e0eee3",
            secondaryText: "#3f6048",

            border: "#c7ddcc",

            success: "#3a9d5d",
            danger: "#d9534f",

            progressBackground: "#dce9df",

            navBackground: "#ffffff",
            navText: "#718274",
            navActive: "#3a8f5b",

            highlight: "#e7b84b",
            highlightBackground: "#fff8df",

            infoBackground: "#e7f3e9",
            infoBorder: "#c5dfca",

            inputBorder: "#c7ddcc"
        },

        shadow: "0 4px 15px rgba(58, 143, 91, 0.12)",

        unlock: {
            type: "level",
            value: 5
        }
    },


    {
        id: "monochrome",

        name: "Monochrome",
        description: "Simple, clean, and completely colorless.",
        icon: "⚫",

        colors: {
            background: "#f2f2f2",
            surface: "#ffffff",

            text: "#202020",
            mutedText: "#707070",

            primary: "#404040",
            primaryText: "#ffffff",

            secondary: "#e2e2e2",
            secondaryText: "#303030",

            border: "#c8c8c8",

            success: "#505050",
            danger: "#707070",

            progressBackground: "#d8d8d8",

            navBackground: "#ffffff",
            navText: "#707070",
            navActive: "#202020",

            highlight: "#bdbdbd",
            highlightBackground: "#ededed",

            infoBackground: "#e8e8e8",
            infoBorder: "#cccccc",

            inputBorder: "#c8c8c8"
        },

        shadow: "0 4px 15px rgba(0, 0, 0, 0.14)",

        unlock: {
            type: "level",
            value: 10
        }
    },


    {
        id: "rainbow",
        name: "Rainbow",
        description: "A bright, colorful theme with every color in the spectrum.",
        icon: "🌈",
        colors: {
            background: "linear-gradient(135deg, #fff0f6 0%, #fff7df 25%, #efffea 50%, #e8f7ff 75%, #f1ebff 100%)",
            surface: "#ffffff",
            text: "#29233a",
            mutedText: "#746d80",
            primary: "linear-gradient(90deg, #ff4d6d, #ff9f1c, #ffd60a, #2ecf6b, #2196f3, #8e5de7)",
            primaryText: "#ffffff",
            secondary: "#f1eafa",
            secondaryText: "#51465f",
            border: "#ddd4e8",
            success: "#2ecf6b",
            danger: "#ff4d6d",
            progressBackground: "#eee8f4",
            navBackground: "#ffffff",
            navText: "#777080",
            navActive: "#8e5de7",
            highlight: "#ffd60a",
            highlightBackground: "#fff8d6",
            infoBackground: "#eaf7ff",
            infoBorder: "#c5e5f7",
            inputBorder: "#ddd5e7"
        },
        shadow: "0 4px 18px rgba(142, 93, 231, 0.16)",
        unlock: {
            type: "level",
            value: 20
        }
    },


    // --------------------------------------------------
    // ACHIEVEMENT UNLOCKS
    // --------------------------------------------------

    {
        id: "fire",
        name: "Fire",
        description: "A blazing theme for mastering lesson after lesson.",
        icon: "🔥",
        colors: {
            background: "#1a0804",
            surface: "#2b0f08",
            text: "#fff4e6",
            mutedText: "#d9a48c",
            primary: "#ff3d00",
            primaryText: "#ffffff",
            secondary: "#4a1710",
            secondaryText: "#ffe0cc",
            border: "#6e1f12",
            success: "#ffb300",
            danger: "#ff1744",
            progressBackground: "#4a1710",
            navBackground: "#210a06",
            navText: "#c98d78",
            navActive: "#ff3d00",
            highlight: "#ffb300",
            highlightBackground: "#3d1d05",
            infoBackground: "#32100a",
            infoBorder: "#762014",
            inputBorder: "#702316"
        },
        shadow: "0 4px 15px rgba(255, 61, 0, 0.25)",
        unlock: {
            type: "achievement",
            achievementId: "streak-30"
        }
    },


    {
        id: "night",

        name: "Night",
        description: "For those who keep learning after dark.",
        icon: "🌙",

        colors: {
            background: "#101321",
            surface: "#181c2d",

            text: "#e8ecff",
            mutedText: "#8d96b5",

            primary: "#7c8cff",
            primaryText: "#ffffff",

            secondary: "#242a40",
            secondaryText: "#b2b9d4",

            border: "#343b58",

            success: "#55c98a",
            danger: "#f06b6b",

            progressBackground: "#292f47",

            navBackground: "#151928",
            navText: "#8d96b5",
            navActive: "#9aa6ff",

            highlight: "#f0c75e",
            highlightBackground: "#302c1c",

            infoBackground: "#202942",
            infoBorder: "#394565",

            inputBorder: "#343b58"
        },

        shadow: "0 4px 15px rgba(0, 0, 0, 0.35)",

        unlock: {
            type: "achievement",
            achievementId: "night-lesson"
        }
    },


    // --------------------------------------------------
    // BASIC COLOR THEMES
    // --------------------------------------------------

    {
        id: "red",

        name: "Red",
        description: "Bold, energetic, and impossible to miss.",
        icon: "🔴",

        colors: {
            background: "#fff3f3",
            surface: "#ffffff",
            text: "#421f1f",
            mutedText: "#906b6b",
            primary: "#d93636",
            primaryText: "#ffffff",
            secondary: "#f5dddd",
            secondaryText: "#673333",
            border: "#e5bcbc",
            success: "#55a85c",
            danger: "#c92d2d",
            progressBackground: "#f1dddd",
            navBackground: "#ffffff",
            navText: "#906b6b",
            navActive: "#d93636",
            highlight: "#e8b83f",
            highlightBackground: "#fff6d8",
            infoBackground: "#f2e5e5",
            infoBorder: "#dfc3c3",
            inputBorder: "#e5bcbc"
        },

        shadow: "0 4px 15px rgba(217, 54, 54, 0.13)",

        unlock: {
            type: "purchase",
            price: 200
        }
    },


    {
        id: "orange",

        name: "Orange",
        description: "Warm, bright, and full of energy.",
        icon: "🟠",

        colors: {
            background: "#fff6ed",
            surface: "#ffffff",
            text: "#422d1d",
            mutedText: "#92775f",
            primary: "#ed7d22",
            primaryText: "#ffffff",
            secondary: "#f8e5d2",
            secondaryText: "#704a2e",
            border: "#e9c8a8",
            success: "#5aa85c",
            danger: "#d65042",
            progressBackground: "#f3e3d3",
            navBackground: "#ffffff",
            navText: "#92775f",
            navActive: "#ed7d22",
            highlight: "#e9bb42",
            highlightBackground: "#fff5d8",
            infoBackground: "#f3eadf",
            infoBorder: "#dfcdb8",
            inputBorder: "#e9c8a8"
        },

        shadow: "0 4px 15px rgba(237, 125, 34, 0.14)",

        unlock: {
            type: "purchase",
            price: 200
        }
    },


    {
        id: "yellow",

        name: "Yellow",
        description: "Brighten up your math adventure.",
        icon: "🟡",

        colors: {
            background: "#fffdf0",
            surface: "#ffffff",
            text: "#403b1e",
            mutedText: "#8c855f",
            primary: "#d8a914",
            primaryText: "#ffffff",
            secondary: "#f3edcf",
            secondaryText: "#665f32",
            border: "#ded5a7",
            success: "#63a84f",
            danger: "#d65b4e",
            progressBackground: "#eee8cf",
            navBackground: "#ffffff",
            navText: "#8c855f",
            navActive: "#d8a914",
            highlight: "#e8bb36",
            highlightBackground: "#fff6c9",
            infoBackground: "#f6f0d8",
            infoBorder: "#e4dbb3",
            inputBorder: "#ded5a7"
        },

        shadow: "0 4px 15px rgba(216, 169, 20, 0.13)",

        unlock: {
            type: "purchase",
            price: 200
        }
    },


    {
        id: "green",

        name: "Green",
        description: "A simple and refreshing green theme.",
        icon: "🟢",

        colors: {
            background: "#f1f9f2",
            surface: "#ffffff",
            text: "#243b28",
            mutedText: "#718271",
            primary: "#419447",
            primaryText: "#ffffff",
            secondary: "#dfefdf",
            secondaryText: "#3e6042",
            border: "#c4dcc5",
            success: "#419447",
            danger: "#d65252",
            progressBackground: "#dcebdc",
            navBackground: "#ffffff",
            navText: "#718271",
            navActive: "#419447",
            highlight: "#e4b943",
            highlightBackground: "#fff7d9",
            infoBackground: "#e5f1e6",
            infoBorder: "#c9ddca",
            inputBorder: "#c4dcc5"
        },

        shadow: "0 4px 15px rgba(65, 148, 71, 0.13)",

        unlock: {
            type: "purchase",
            price: 200
        }
    },


    {
        id: "blue",

        name: "Blue",
        description: "Cool, calm, and focused.",
        icon: "🔵",

        colors: {
            background: "#f0f7ff",
            surface: "#ffffff",
            text: "#20344d",
            mutedText: "#6e8298",
            primary: "#3478c9",
            primaryText: "#ffffff",
            secondary: "#dce9f7",
            secondaryText: "#3c5c7c",
            border: "#bfd3e8",
            success: "#4eaa72",
            danger: "#d95656",
            progressBackground: "#dce9f6",
            navBackground: "#ffffff",
            navText: "#6e8298",
            navActive: "#3478c9",
            highlight: "#e5b945",
            highlightBackground: "#fff7d8",
            infoBackground: "#e3effb",
            infoBorder: "#c5dbee",
            inputBorder: "#bfd3e8"
        },

        shadow: "0 4px 15px rgba(52, 120, 201, 0.13)",

        unlock: {
            type: "purchase",
            price: 200
        }
    },


    {
        id: "purple",

        name: "Purple",
        description: "A rich and playful purple theme.",
        icon: "🟣",

        colors: {
            background: "#f8f3ff",
            surface: "#ffffff",
            text: "#352547",
            mutedText: "#7e6c91",
            primary: "#8955c7",
            primaryText: "#ffffff",
            secondary: "#eae0f5",
            secondaryText: "#59406f",
            border: "#d3c1e5",
            success: "#5ba56d",
            danger: "#d85563",
            progressBackground: "#e9def2",
            navBackground: "#ffffff",
            navText: "#7e6c91",
            navActive: "#8955c7",
            highlight: "#e7b942",
            highlightBackground: "#fff6d7",
            infoBackground: "#ebe6f8",
            infoBorder: "#d3c9eb",
            inputBorder: "#d3c1e5"
        },

        shadow: "0 4px 15px rgba(137, 85, 199, 0.14)",

        unlock: {
            type: "purchase",
            price: 200
        }
    }
];
function getTheme(themeId) {
    return THEMES.find(theme => theme.id === themeId);
}


function isThemeUnlocked(themeId) {
    const player = getPlayer();

    return player.unlockedThemes.includes(themeId);
}


function unlockTheme(themeId) {
    const player = getPlayer();

    if (isThemeUnlocked(themeId)) {
        return false;
    }

    player.unlockedThemes.push(themeId);

    savePlayer(player);

    return true;
}


function setTheme(themeId) {
    const player = getPlayer();
    const theme = getTheme(themeId);

    if (!theme) {
        return false;
    }

    if (!player.unlockedThemes.includes(themeId)) {
        return false;
    }

    player.theme = themeId;

    savePlayer(player);

    applyTheme(theme);

    return true;
}


function unlockLevelThemes() {
    const player = getPlayer();
    const level = getLevel(player.xp);

    let unlocked = [];

    THEMES.forEach(theme => {

        if (theme.unlock.type !== "level") {
            return;
        }

        if (level < theme.unlock.value) {
            return;
        }

        if (unlockTheme(theme.id)) {
            unlocked.push(theme.id);
        }
    });

    return unlocked;
}


function unlockAchievementThemes() {
    const player = getPlayer();

    let unlocked = [];

    THEMES.forEach(theme => {

        if (theme.unlock.type !== "achievement") {
            return;
        }

        if (!isAchievementUnlocked(
            theme.unlock.achievementId,
            player
        )) {
            return;
        }

        if (unlockTheme(theme.id)) {
            unlocked.push(theme.id);
        }
    });

    return unlocked;
}

function unlockAvailableThemes() {
    return [
        ...unlockLevelThemes(),
        ...unlockAchievementThemes()
    ];
}


function purchaseTheme(themeId) {
    const player = getPlayer();
    const theme = getTheme(themeId);

    if (!theme) {
        return false;
    }

    if (theme.unlock.type !== "purchase") {
        return false;
    }

    if (isThemeUnlocked(themeId)) {
        return false;
    }

    if (player.coins < theme.unlock.price) {
        return false;
    }

    player.coins -= theme.unlock.price;
    player.unlockedThemes.push(themeId);

    savePlayer(player);

    return true;
}


function applyTheme(theme) {
    const root = document.documentElement;

    root.style.setProperty(
        "--color-background",
        theme.colors.background
    );

    root.style.setProperty(
        "--color-surface",
        theme.colors.surface
    );

    root.style.setProperty(
        "--color-text",
        theme.colors.text
    );

    root.style.setProperty(
        "--color-muted-text",
        theme.colors.mutedText
    );

    root.style.setProperty(
        "--color-primary",
        theme.colors.primary
    );

    root.style.setProperty(
        "--color-primary-text",
        theme.colors.primaryText
    );

    root.style.setProperty(
        "--color-secondary",
        theme.colors.secondary
    );

    root.style.setProperty(
        "--color-secondary-text",
        theme.colors.secondaryText
    );

    root.style.setProperty(
        "--color-border",
        theme.colors.border
    );

    root.style.setProperty(
        "--color-success",
        theme.colors.success
    );

    root.style.setProperty(
        "--color-danger",
        theme.colors.danger
    );

    root.style.setProperty(
        "--color-progress-background",
        theme.colors.progressBackground
    );

    root.style.setProperty(
        "--color-nav-background",
        theme.colors.navBackground
    );

    root.style.setProperty(
        "--color-nav-text",
        theme.colors.navText
    );

    root.style.setProperty(
        "--color-nav-active",
        theme.colors.navActive
    );

    root.style.setProperty(
        "--color-highlight",
        theme.colors.highlight
    );

    root.style.setProperty(
        "--color-highlight-background",
        theme.colors.highlightBackground
    );

    root.style.setProperty(
        "--color-info-background",
        theme.colors.infoBackground
    );

    root.style.setProperty(
        "--color-info-border",
        theme.colors.infoBorder
    );

    root.style.setProperty(
        "--color-input-border",
        theme.colors.inputBorder
    );

    root.style.setProperty(
        "--shadow",
        theme.shadow
    );
}


function initializeTheme() {
    const player = getPlayer();
    const theme = getTheme(player.theme);

    if (!theme) {
        return;
    }

    if (!isThemeUnlocked(theme.id)) {
        return;
    }

    applyTheme(theme);
}

initializeTheme();
