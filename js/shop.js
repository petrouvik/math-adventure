function renderThemes() {
    const container =
        document.getElementById("theme-list");

    if (!container) {
        return;
    }

    const player = getPlayer();

    const themes = [...THEMES].sort((a, b) => {

        if (a.unlock.type === "default") {
            return -1;
        }

        if (b.unlock.type === "default") {
            return 1;
        }

        const order = {
            purchase: 0,
            level: 1,
            achievement: 2
        };

        return order[a.unlock.type] - order[b.unlock.type];
    });

    container.innerHTML = "";

    themes.forEach(theme => {

        const unlocked =
            player.unlockedThemes.includes(theme.id);

        const selected =
            player.theme === theme.id;

        const card = document.createElement("div");

        card.className = "theme-card";

        if (selected) {
            card.classList.add("selected");
        }

        if (!unlocked) {
            card.classList.add("locked");
        }

        card.innerHTML = `
            <div class="theme-preview">

                <span class="theme-preview-label">
                    PREVIEW
                </span>

                <div class="theme-preview-header">

                    <span class="theme-preview-icon">
                        ${theme.icon}
                    </span>

                    <strong>
                        ${theme.name}
                    </strong>

                </div>


                <div class="theme-preview-card">

                    <span>
                        Math Adventure
                    </span>

                    <div class="theme-preview-bar">
                        <div></div>
                    </div>

                    <div class="theme-preview-stat">
                        <span>Progress</span>
                        <strong>65%</strong>
                    </div>

                </div>

            </div>


            <div class="theme-info">

                <div>

                    <h3>
                        ${theme.name}
                    </h3>

                    <p>
                        ${theme.description}
                    </p>

                </div>

                <span class="theme-status"></span>

            </div>
        `;


        const preview =
            card.querySelector(".theme-preview");


        preview.style.setProperty(
            "--preview-background",
            theme.colors.background
        );

        preview.style.setProperty(
            "--preview-surface",
            theme.colors.surface
        );

        preview.style.setProperty(
            "--preview-text",
            theme.colors.text
        );

        preview.style.setProperty(
            "--preview-primary",
            theme.colors.primary
        );

        preview.style.setProperty(
            "--preview-primary-text",
            theme.colors.primaryText
        );

        preview.style.setProperty(
            "--preview-progress-background",
            theme.colors.progressBackground
        );


        const status =
            card.querySelector(".theme-status");


        if (selected) {

            status.textContent = "✓ Selected";

        } else if (unlocked) {

            status.textContent = "Use theme";

            card.addEventListener("click", () => {

                setTheme(theme.id);

                renderThemes();

            });

        } else {

            switch (theme.unlock.type) {

                case "purchase": {

                    const price = theme.unlock.price;
                    const canAfford = player.coins >= price;

                    status.textContent =
                        `🪙 ${price}`;

                    if (canAfford) {

                        card.classList.add("purchasable");

                        card.addEventListener("click", () => {

                            if (!purchaseTheme(theme.id)) {
                                return;
                            }

                            updatePlayerDisplay();
                            renderThemes();

                        });

                    } else {

                        card.classList.add("cannot-afford");

                    }

                    break;
                }


                case "level":

                    status.textContent =
                        `🔒 Level ${theme.unlock.value}`;

                    break;


                case "achievement":

                    status.textContent =
                        "🔒 Achievement";

                    break;


                default:

                    status.textContent =
                        "🔒 Locked";
            }
        }


        container.appendChild(card);
    });
}


function initializeShop() {
    updatePlayerDisplay();
    renderThemes();
}


initializeShop();