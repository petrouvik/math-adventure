const INTERACTIONS = {
    "number-input": {
        render(container, problem, callbacks) {
            renderNumberInput(
                container,
                problem,
                callbacks
            );
        }
    },
    "multiple-choice": {
        render(container, problem, callbacks) {
            renderMultipleChoice(
                container,
                problem,
                callbacks
            );
        }
    }
};


function renderNumberInput(
    container,
    problem,
    callbacks
) {
    container.innerHTML = `
        <section class="problem-card">
            <p class="problem-instruction">
                What is the answer?
            </p>

            <div class="problem">
                <span>${problem.prompt}</span>
                <span>=</span>
                <span class="question-mark">?</span>
            </div>

            <div class="answer-area">
                <input
                    type="text"
                    class="answer-input"
                    inputmode="numeric"
                    autocomplete="off"
                    placeholder="?"
                    aria-label="Your answer"
                >

                <button
                    class="check-button"
                    type="button"
                >
                    Check Answer
                </button>
            </div>

            <p class="answer-feedback"></p>

            <div class="answer-explanation"></div>
        </section>
    `;

    const input =
        container.querySelector(".answer-input");

    const button =
        container.querySelector(".check-button");

    const feedback =
        container.querySelector(".answer-feedback");

    const explanation =
        container.querySelector(".answer-explanation");


   function checkAnswer() {
        const value =
            input.value.trim();

        if (value === "") {
            feedback.textContent =
                "Please enter an answer!";

            feedback.className =
                "answer-feedback incorrect";

            return;
        }

        const normalizedValue =
            value.replace(/[,\s]/g, "");

        const answer =
            Number(normalizedValue);
        checkAnswerAchievement(answer);

        // Hide the mobile keyboard after submitting.
        input.blur();

        if (answer === problem.answer) {
            feedback.textContent =
                "Correct! 🎉";

            feedback.className =
                "answer-feedback correct";

            input.disabled = true;
            button.disabled = true;

            callbacks.onCorrect(
                problem,
                answer
            );

        } else {
            feedback.textContent =
                "Not quite. Try again!";

            feedback.className =
                "answer-feedback incorrect";

            callbacks.onIncorrect(
                problem,
                answer,
                explanation
            );

            requestAnimationFrame(() => {
                explanation.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            });
        }
    }


    button.addEventListener(
        "click",
        checkAnswer
    );


    input.addEventListener(
        "keydown",
        event => {
            if (event.key === "Enter") {
                event.preventDefault();
                checkAnswer();
            }
        }
    );
    input.addEventListener("focus", () => {
        setTimeout(() => {
            input.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 300);
    });


    input.focus();
}
function renderMultipleChoice(
    container,
    problem,
    callbacks
) {
    container.innerHTML = `
        <section class="problem-card">
            <p class="problem-instruction">
                What is the answer?
            </p>

            <div class="problem">
                <span>${problem.prompt}</span>
            </div>

            <div class="choices"></div>

            <p class="answer-feedback"></p>

            <div class="answer-explanation"></div>
        </section>
    `;

    const choicesContainer =
        container.querySelector(".choices");

    const feedback =
        container.querySelector(".answer-feedback");

    const explanation =
        container.querySelector(".answer-explanation");


    problem.choices.forEach(choice => {
        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "choice-button";
        button.textContent = choice;

        button.addEventListener(
            "click",
            () => checkAnswer(choice)
        );

        choicesContainer.appendChild(button);
    });


    function checkAnswer(answer) {
        if (answer === problem.answer) {
            feedback.textContent =
                "Correct! 🎉";

            feedback.className =
                "answer-feedback correct";

            choicesContainer
                .querySelectorAll(".choice-button")
                .forEach(button => {
                    button.disabled = true;
                });

            callbacks.onCorrect(
                problem,
                answer
            );

        } else {
            feedback.textContent =
                "Not quite. Try again!";

            feedback.className =
                "answer-feedback incorrect";

            callbacks.onIncorrect(
                problem,
                answer,
                explanation
            );
        }
    }
}
