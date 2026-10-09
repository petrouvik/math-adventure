const LANGUAGE_STORAGE_KEY =
    "mathAdventureLanguage";


const TRANSLATIONS = {
    en: TRANSLATIONS_EN,
    sr: TRANSLATIONS_SR
};


function getLanguage() {
    return (
        localStorage.getItem(
            LANGUAGE_STORAGE_KEY
        ) || "en"
    );
}


function setLanguage(language) {

    if (!TRANSLATIONS[language]) {
        return;
    }

    localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        language
    );

    location.reload();
}

function t(key) {

    const parts = key.split(".");

    let value =
        TRANSLATIONS[getLanguage()];

    for (const part of parts) {
        value = value?.[part];
    }

    return value ?? key;
}

function tf(key, values) {

    let text = t(key);

    for (const [name, value] of Object.entries(values)) {

        text = text.replaceAll(
            `{${name}}`,
            value
        );

    }

    return text;
}

function applyTranslations() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            element.textContent =
                t(element.dataset.i18n);

        });
}

const OPERATOR_SYMBOLS = {
    en: { multiply: "×", divide: "÷" },
    sr: { multiply: "·", divide: ":" }
};

function op(name) {
    return OPERATOR_SYMBOLS[getLanguage()][name];
}
const LOCALES = { en: "en-US", sr: "sr-Latn-RS" };

function formatNumber(value, options = {}) {
    return new Intl.NumberFormat(LOCALES[getLanguage()], {
        maximumFractionDigits: 10,
        ...options
    }).format(value);
}
function getSeparators() {
    const parts = new Intl.NumberFormat(LOCALES[getLanguage()]).formatToParts(11111.1);
    return {
        group: parts.find(p => p.type === "group").value,
        decimal: parts.find(p => p.type === "decimal").value
    };
}
function parseLocalizedNumber(text) {
    const { group, decimal } = getSeparators();
    let s = text.trim().replace(/[\s\u00A0\u202F]/g, "");

    // If the student typed the "other" separator and it can't be a valid
    // grouping (e.g. "0.5" in Serbian), treat it as the decimal mark.
    const other = decimal === "," ? "." : ",";
    const groupingPattern =
        new RegExp(`^\\d{1,3}(\\${group}\\d{3})+(\\${decimal}\\d+)?$`);

    if (!groupingPattern.test(s) && s.includes(other) && !s.includes(decimal)) {
        s = s.replace(other, decimal);
    }

    s = s.split(group).join("").replace(decimal, ".");

    return /^-?\d+(\.\d+)?$/.test(s) ? Number(s) : NaN;
}