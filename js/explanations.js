const EXPLANATIONS = {
    counting: {
        render(container, explanation, problem) {
            renderCountingExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    "counting-back": {
        render(container, explanation, problem) {
            renderCountingBackExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    "repeated-addition": {
        render(container, explanation, problem) {
            renderRepeatedAdditionExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    division: {
        render(container, explanation, problem) {
            renderDivisionExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    "roman-symbol": {
        render(container, explanation, problem) {
            renderRomanSymbolExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    "roman-addition": {
        render(container, explanation, problem) {
            renderRomanAdditionExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    "roman-to-arabic": {
        render(container, explanation, problem) {
            renderRomanToArabicExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    "arabic-to-roman": {
        render(container, explanation, problem) {
            renderArabicToRomanExplanation(
                container,
                explanation,
                problem
            );
        }
    }
};
function renderCountingExplanation(
    container,
    explanation,
    problem
) {
    const start = explanation.start;
    const amount = explanation.amount;

    const numbers = [];

    for (let i = 0; i <= amount; i++) {
        numbers.push(start + i);
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                Start at ${start} and count
                ${amount} more:
            </p>

            <p class="counting-example">
                ${numbers.join(" → ")}
            </p>

            <p>
                So
                <strong>${problem.prompt}</strong>
                equals
                <strong>${problem.answer}</strong>.
            </p>
        </div>
    `;
}
function renderCountingBackExplanation(
    container,
    explanation,
    problem
) {
    const start = explanation.start;
    const amount = explanation.amount;

    const numbers = [];

    for (let i = 0; i <= amount; i++) {
        numbers.push(start - i);
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                Start at ${start} and count
                ${amount} backwards:
            </p>

            <p class="counting-example">
                ${numbers.join(" → ")}
            </p>

            <p>
                So
                <strong>${problem.prompt}</strong>
                equals
                <strong>${problem.answer}</strong>.
            </p>
        </div>
    `;
}
function renderRepeatedAdditionExplanation(
    container,
    explanation,
    problem
) {
    const number = explanation.number;
    const amount = explanation.amount;

    const terms = [];

    for (let i = 0; i < amount; i++) {
        terms.push(number);
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                ${problem.prompt} means adding
                ${number} ${amount} times:
            </p>

            <p class="counting-example">
                ${terms.join(" + ")}
                = ${problem.answer}
            </p>

            <p>
                So
                <strong>${problem.prompt}</strong>
                equals
                <strong>${problem.answer}</strong>.
            </p>
        </div>
    `;
}

function renderDivisionExplanation(
    container,
    explanation,
    problem
) {
    const {
        dividend,
        divisor,
        quotient
    } = explanation;

    const subtractionNumbers = [];

    for (let i = 0; i <= quotient; i++) {
        subtractionNumbers.push(
            dividend - divisor * i
        );
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                You can solve
                <strong>${problem.prompt}</strong>
                by repeatedly taking away ${divisor}:
            </p>

            <p class="counting-example">
                ${subtractionNumbers.join(" → ")}
            </p>

            <p>
                We took away ${divisor}
                <strong>${quotient} times</strong>
                before reaching 0.
            </p>

            <hr>

            <p>
                You can also use the
                <strong>${divisor} times table</strong>:
            </p>

            <p class="counting-example">
                ${divisor} × ${quotient} = ${dividend}
            </p>

            <p>
                Therefore,
                <strong>${problem.prompt}</strong>
                =
                <strong>${problem.answer}</strong>.
            </p>
        </div>
    `;
}
function renderRomanSymbolExplanation(
    container,
    explanation,
    problem
) {
    const {
        symbol,
        value
    } = explanation;

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's learn! 💡</h3>

            <p>
                The Roman numeral
                <strong>${symbol}</strong>
                represents the number
                <strong>${value}</strong>.
            </p>

            <p class="counting-example">
                ${symbol} = ${value}
            </p>

            <p>
                Remember: Roman numerals use special
                symbols to represent numbers.
            </p>
        </div>
    `;
}

function renderRomanAdditionExplanation(
    container,
    explanation,
    problem
) {
    const {
        roman,
        number
    } = explanation;

    const symbols = [...roman];

    const values = symbols.map(
        symbol => ROMAN_VALUES[symbol]
    );

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                The symbols in
                <strong>${roman}</strong>
                are all added together:
            </p>

            <p class="counting-example">
                ${symbols.join(" + ")}
            </p>

            <p class="counting-example">
                ${values.join(" + ")}
                = ${number}
            </p>

            <p>
                So
                <strong>${roman}</strong>
                equals
                <strong>${number}</strong>.
            </p>
        </div>
    `;
}
function renderRomanToArabicExplanation(
    container,
    explanation,
    problem
) {
    const {
        roman,
        number
    } = explanation;

    const symbols = [...roman];

    const values = symbols.map(
        symbol => ROMAN_VALUES[symbol]
    );

    const terms = symbols.map(
        (symbol, index) => {
            const value = ROMAN_VALUES[symbol];
            const nextValue =
                index + 1 < values.length
                    ? values[index + 1]
                    : null;

            if (nextValue !== null && value < nextValue) {
                return `− ${value}`;
            }

            return `+ ${value}`;
        }
    );

    const calculation =
        terms
            .join(" ")
            .replace("+ ", "");

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                To convert
                <strong>${roman}</strong>
                into a number, look at each symbol.
            </p>

            <p class="counting-example">
                ${symbols.join(" ")}
            </p>

            <p>
                If a smaller symbol comes before a larger
                symbol, subtract it. Otherwise, add it.
            </p>

            <p class="counting-example">
                ${calculation}
            </p>

            <p>
                So
                <strong>${roman}</strong>
                equals
                <strong>${number}</strong>.
            </p>
        </div>
    `;
}
function renderArabicToRomanExplanation(
    container,
    explanation,
    problem
) {
    const {
        number,
        roman
    } = explanation;

    const symbols = [...roman];

    const values = symbols.map(
        symbol => ROMAN_VALUES[symbol]
    );

    const terms = [];

    for (let i = 0; i < symbols.length; i++) {
        const current = values[i];
        const next = values[i + 1];

        if (next !== undefined && current < next) {
            terms.push({
                text: `${symbols[i]}${symbols[i + 1]}`,
                value: next - current
            });

            i++;
        } else {
            terms.push({
                text: symbols[i],
                value: current
            });
        }
    }

    const decomposition = terms
        .map(term => `${term.text} = ${term.value}`)
        .join(" + ");

    const numeral = terms
        .map(term => term.text)
        .join("");

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                We can build the Roman numeral by
                breaking
                <strong>${number}</strong>
                into Roman numeral values.
            </p>

            <p class="counting-example">
                ${decomposition}
            </p>

            <p>
                Put those Roman numeral parts together:
            </p>

            <p class="counting-example">
                ${numeral}
            </p>

            <p>
                So
                <strong>${number}</strong>
                in Roman numerals is
                <strong>${roman}</strong>.
            </p>
        </div>
    `;
}