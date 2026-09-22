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