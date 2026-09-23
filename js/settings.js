const player = getPlayer();


/* -------------------------
   NAME
------------------------- */

const nameInput =
    document.querySelector(
        '[data-player="name-input"]'
    );


if (nameInput) {

    nameInput.value =
        player.name;

    nameInput.addEventListener(
        "change",
        () => {

            const name =
                nameInput.value.trim();

            if (!name) {
                nameInput.value =
                    player.name;

                return;
            }

            player.name =
                name;

            savePlayer(player);

            document
                .querySelector(
                    '[data-player="name"]'
                )
                ?.replaceChildren(
                    document.createTextNode(name)
                );
        }
    );
}


/* -------------------------
   LANGUAGE
------------------------- */

function updateLanguageSelection() {

    const language =
        getLanguage();

    document
        .querySelectorAll(
            ".language-option"
        )
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.language === language
            );

        });
}


document
    .querySelectorAll(
        ".language-option"
    )
    .forEach(option => {

        option.addEventListener(
            "click",
            () => {

                const language =
                    option.dataset.language;

                setLanguage(language);

            }
        );

    });


updateLanguageSelection();


/* -------------------------
   RESET PROGRESS
------------------------- */

const resetButton =
    document.querySelector(
        ".setting-danger"
    );


if (resetButton) {

    resetButton.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    t("settings.resetConfirm")
                );

            if (!confirmed) {
                return;
            }

            localStorage.removeItem(
                PLAYER_STORAGE_KEY
            );

            location.href =
                "index.html";
        }
    );
}