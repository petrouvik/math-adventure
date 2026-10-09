/* =========================
   PROGRESS BACKUP (import / export)
========================= */

const BACKUP_APP_ID = "mathAdventure";
const BACKUP_VERSION = 1;
const MAX_PLAYER_NAME_LENGTH = 20;


function isPlainObject(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
    );
}


/* ---------- encoding ---------- */

function encodeBackup(player) {

    const payload = {
        app: BACKUP_APP_ID,
        version: BACKUP_VERSION,
        exportedAt: new Date().toISOString(),
        player
    };

    // btoa() only handles Latin-1, so go through UTF-8 bytes.
    // Otherwise a name like "Đorđe" or one with an emoji would throw.
    const bytes =
        new TextEncoder().encode(JSON.stringify(payload));

    let binary = "";

    bytes.forEach(byte => {
        binary += String.fromCharCode(byte);
    });

    return btoa(binary);
}


function decodeBackup(code) {

    // Pasted text often picks up spaces or line breaks.
    const binary = atob(code.replace(/\s/g, ""));   // throws if not base64

    const bytes =
        Uint8Array.from(binary, character => character.charCodeAt(0));

    const json =
        new TextDecoder("utf-8", { fatal: true }).decode(bytes);

    const payload = JSON.parse(json);

    if (
        !isPlainObject(payload) ||
        payload.app !== BACKUP_APP_ID ||
        typeof payload.version !== "number" ||
        payload.version > BACKUP_VERSION ||
        !isPlainObject(payload.player)
    ) {
        throw new Error("Not a valid backup");
    }

    return payload;
}


/* ---------- validation ---------- */

// Only keys that exist in DEFAULT_PLAYER are accepted, each with the
// same type as its default. Anything else is dropped, and anything
// missing (e.g. from an older backup) falls back to the default.
function sanitizePlayer(imported) {

    const player = structuredClone(DEFAULT_PLAYER);

    for (const key of Object.keys(DEFAULT_PLAYER)) {

        if (!(key in imported)) {
            continue;
        }

        const value = imported[key];
        const fallback = DEFAULT_PLAYER[key];

        if (typeof fallback === "number") {

            if (Number.isFinite(value) && value >= 0) {
                player[key] = value;
            }

        } else if (typeof fallback === "string") {

            if (typeof value === "string") {
                player[key] = value;
            }

        } else if (fallback === null) {

            // lastActivityDate: a date string or null
            if (value === null || typeof value === "string") {
                player[key] = value;
            }

        } else if (Array.isArray(fallback)) {

            if (Array.isArray(value)) {
                player[key] = value;
            }

        } else if (isPlainObject(fallback)) {

            if (isPlainObject(value)) {
                player[key] = value;
            }
        }
    }

    // Fill in any achievementData fields an older backup doesn't have.
    player.achievementData = {
        ...structuredClone(DEFAULT_PLAYER.achievementData),
        ...player.achievementData
    };

    player.name =
        player.name.trim().slice(0, MAX_PLAYER_NAME_LENGTH) ||
        DEFAULT_PLAYER.name;

    player.achievements =
        player.achievements.filter(id => typeof id === "string");

    player.unlockedThemes =
        player.unlockedThemes.filter(id => typeof id === "string");

    if (!player.unlockedThemes.includes("default")) {
        player.unlockedThemes.push("default");
    }

    if (!player.unlockedThemes.includes(player.theme)) {
        player.theme = "default";
    }

    return player;
}


/* ---------- page ---------- */

(function setupBackup() {

    const exportButton = document.getElementById("export-button");
    const importButton = document.getElementById("import-button");

    const exportPanel = document.getElementById("export-panel");
    const exportOutput = document.getElementById("export-output");
    const exportStatus = document.getElementById("export-status");
    const copyButton = document.getElementById("copy-export-button");

    const importPanel = document.getElementById("import-panel");
    const importInput = document.getElementById("import-input");
    const importStatus = document.getElementById("import-status");
    const confirmButton = document.getElementById("confirm-import-button");

    if (!exportButton || !importButton) {
        return;
    }

    importInput.placeholder = t("settings.importPlaceholder");


    function setStatus(element, message, type = "") {
        element.textContent = message;
        element.className = type ? `backup-status ${type}` : "backup-status";
    }


    // Opens one panel and closes the other. Returns true if now open.
    function togglePanel(panelToToggle, otherPanel) {
        otherPanel.hidden = true;
        panelToToggle.hidden = !panelToToggle.hidden;
        return !panelToToggle.hidden;
    }


    async function copyExport() {

        let copied = false;

        try {
            await navigator.clipboard.writeText(exportOutput.value);
            copied = true;
        } catch {
            // Clipboard API unavailable: select the text so the user can copy it.
            exportOutput.focus();
            exportOutput.select();

            try {
                copied = document.execCommand("copy");
            } catch {
                copied = false;
            }
        }

        setStatus(
            exportStatus,
            copied ? t("settings.copied") : t("settings.copyFailed"),
            copied ? "success" : "error"
        );
    }


    exportButton.addEventListener("click", () => {

        if (!togglePanel(exportPanel, importPanel)) {
            return;
        }

        exportOutput.value = encodeBackup(getPlayer());

        setStatus(exportStatus, "");

        copyExport();
    });


    copyButton.addEventListener("click", copyExport);


    importButton.addEventListener("click", () => {

        if (togglePanel(importPanel, exportPanel)) {
            setStatus(importStatus, "");
        }
    });


    confirmButton.addEventListener("click", () => {

        const code = importInput.value.trim();

        if (code === "") {
            setStatus(importStatus, t("settings.importEmpty"), "error");
            return;
        }

        let player;

        try {
            player = sanitizePlayer(decodeBackup(code).player);
        } catch {
            setStatus(importStatus, t("settings.importInvalid"), "error");
            return;
        }

        if (!confirm(t("settings.importConfirm"))) {
            return;
        }

        savePlayer(player);

        importInput.value = "";
        confirmButton.disabled = true;

        setStatus(importStatus, t("settings.importSuccess"), "success");

        // Reload so the header, theme and everything else re-read the new player.
        setTimeout(() => location.reload(), 800);
    });

})();