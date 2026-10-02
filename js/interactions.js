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
    },

    "equation-step":{
        render(container, problem, callbacks) {
            renderEquationSolving(
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
                ${t("lesson.whatIsTheAnswer")}
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
                    aria-label="${t("lesson.yourAnswer")}"
                >

                <button
                    class="check-button"
                    type="button"
                >
                    ${t("lesson.checkAnswer")}
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
                t("lesson.enterAnswer");

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
                t("lesson.correct");

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
                t("lesson.tryAgain");

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


    input.addEventListener(
        "focus",
        () => {

            setTimeout(() => {

                input.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 300);

        }
    );


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
                ${t("lesson.whatIsTheAnswer")}
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

        button.className =
            "choice-button";

        button.textContent =
            choice;

        button.addEventListener(
            "click",
            () => checkAnswer(choice)
        );

        choicesContainer.appendChild(button);
    });


    function checkAnswer(answer) {

        if (answer === problem.answer) {

            feedback.textContent =
                t("lesson.correct");

            feedback.className =
                "answer-feedback correct";

            choicesContainer
                .querySelectorAll(
                    ".choice-button"
                )
                .forEach(button => {

                    button.disabled = true;

                });

            callbacks.onCorrect(
                problem,
                answer
            );

        } else {

            feedback.textContent =
                t("lesson.tryAgain");

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

// function renderEquationSolving(
//     container,
//     problem,
//     callbacks
// ) {
//     let currentStep = 0;

//     container.innerHTML = `
//         <section class="problem-card">

//             <p class="problem-instruction">
//                 ${t("lesson.whatIsTheAnswer")}
//             </p>

//             <div class="equation-history"></div>

//             <div class="equation-current">
//             </div>

//             <div class="choices"></div>

//             <p class="answer-feedback"></p>

//             <div class="answer-explanation"></div>

//         </section>
//     `;

//     const historyContainer =
//         container.querySelector(
//             ".equation-history"
//         );

//     const currentEquation =
//         container.querySelector(
//             ".equation-current"
//         );

//     const choicesContainer =
//         container.querySelector(".choices");

//     const feedback =
//         container.querySelector(
//             ".answer-feedback"
//         );

//     const explanation =
//         container.querySelector(
//             ".answer-explanation"
//         );


//     renderStep();


//     function renderStep() {

//         const step =
//             problem.steps[currentStep];

//         currentEquation.innerHTML = `
//             <div class="problem">
//                 <span>${step.equation}</span>
//             </div>
//         `;

//         choicesContainer.innerHTML = "";

//         step.choices.forEach(choice => {

//             const button =
//                 document.createElement("button");

//             button.type = "button";

//             button.className =
//                 "choice-button";

//             button.textContent =
//                 choice;

//             button.addEventListener(
//                 "click",
//                 () => checkAnswer(choice)
//             );

//             choicesContainer.appendChild(button);
//         });

//         feedback.textContent = "";
//         feedback.className =
//             "answer-feedback";

//         explanation.innerHTML = "";
//     }


//     function checkAnswer(answer) {

//         const step =
//             problem.steps[currentStep];


//         if (answer === step.answer) {

//             feedback.textContent =
//                 t("lesson.correct");

//             feedback.className =
//                 "answer-feedback correct";


//             historyContainer.innerHTML += `
//                 <div class="equation-step">
//                     <div class="equation">
//                         ${step.equation}
//                     </div>

//                     <div class="equation-operation">
//                         ${answer}
//                     </div>

//                     <div class="equation">
//                         ${step.nextEquation}
//                     </div>
//                 </div>
//             `;


//             currentStep++;


//             if (
//                 currentStep >=
//                 problem.steps.length
//             ) {

//                 choicesContainer
//                     .querySelectorAll(
//                         ".choice-button"
//                     )
//                     .forEach(button => {
//                         button.disabled = true;
//                     });

//                 callbacks.onCorrect(
//                     problem,
//                     problem.answer
//                 );

//                 return;
//             }


//             renderStep();

//         } else {

//             feedback.textContent =
//                 t("lesson.tryAgain");

//             feedback.className =
//                 "answer-feedback incorrect";

//             callbacks.onIncorrect(
//                 problem,
//                 answer,
//                 explanation
//             );
//         }
//     }
// }
function renderEquationSolving(container, problem, callbacks) {
    let currentStep = 0;

    container.innerHTML = `
        <section class="problem-card">

            <p class="problem-instruction">
                ${t("lesson.whatIsTheNextStep")}
            </p>

            <div class="equation-work">
                <div class="equation-history"></div>
                <div class="equation-current"></div>
            </div>

            <div class="choices"></div>

            <p class="answer-feedback"></p>

            <div class="answer-explanation"></div>

        </section>
    `;

    const historyContainer = container.querySelector(".equation-history");
    const currentEquation = container.querySelector(".equation-current");
    const choicesContainer = container.querySelector(".choices");
    const feedback = container.querySelector(".answer-feedback");
    const explanation = container.querySelector(".answer-explanation");

    renderStep();


    function createSpan(className, text) {
        const span = document.createElement("span");
        span.className = className;
        span.textContent = text;
        return span;
    }

    // "12 = 3 × x" -> row with the "=" sign in a fixed middle column,
    // so every equation and every operation lines up around it.
    function createEquationRow(equation, extraClass = "") {
        const [left, right] = equation.split(" = ");

        const row = document.createElement("div");
        row.className = `equation-row ${extraClass}`.trim();
        row.append(
            createSpan("equation-left", left),
            createSpan("equation-sign", "="),
            createSpan("equation-right", right)
        );

        return row;
    }

    // The operation is shown under BOTH sides: "×x   ×x"
    function createOperationRow(operation) {
        const row = document.createElement("div");
        row.className = "equation-row operation-row";
        row.append(
            createSpan("equation-left", operation),
            createSpan("equation-sign", "▾"),
            createSpan("equation-right", operation)
        );

        return row;
    }


    function renderStep() {
        const step = problem.steps[currentStep];

        currentEquation.replaceChildren(
            createEquationRow(step.equation)
        );

        choicesContainer.innerHTML = "";

        step.choices.forEach(choice => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "choice-button";
            button.textContent = choice;

            button.addEventListener(
                "click",
                () => checkAnswer(choice)
            );

            choicesContainer.appendChild(button);
        });

        feedback.textContent = "";
        feedback.className = "answer-feedback";

        explanation.innerHTML = "";
    }


    function checkAnswer(answer) {
        const step = problem.steps[currentStep];

        if (answer === step.answer) {
            feedback.textContent = t("lesson.correct");
            feedback.className = "answer-feedback correct";

            // The solved equation moves into the history, followed by the
            // operation the student chose. The next equation (which is this
            // step's resultingEquation) then becomes the current one.
            historyContainer.append(
                createEquationRow(step.equation, "is-past"),
                createOperationRow(answer)
            );

            currentStep++;

            if (currentStep >= problem.steps.length) {
                currentEquation.replaceChildren(
                    createEquationRow(step.resultingEquation, "is-solved")
                );

                choicesContainer
                    .querySelectorAll(".choice-button")
                    .forEach(button => {
                        button.disabled = true;
                    });

                callbacks.onCorrect(problem, problem.answer);

                return;
            }

            renderStep();

        } else {
            feedback.textContent = t("lesson.tryAgain");
            feedback.className = "answer-feedback incorrect";

            callbacks.onIncorrect(problem, answer, explanation);
        }
    }
}