const EXPLANATIONS = {
    "even-odd": {
        render(container, explanation, problem) {
            renderEvenOddExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    counting: {
        render(container, explanation, problem) {
            renderCountingExplanation(
                container,
                explanation,
                problem
            );
        }
    },
    "decomposition":{
        render(container, explanation, problem) {
            renderDecompositionExplanation(
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
    "subtraction-decomposition": {
        render(container, explanation, problem) {
            renderSubtractionDecompositionExplanation(
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
    },
    "advanced-addition":  {
        render(container, explanation, problem) {
            renderAdvancedAdditionExplanation(
                container,
                explanation,
                problem
            );
        }
    },
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
function renderDecompositionExplanation(
    container,
    explanation,
    problem
) {
    const larger = explanation.larger;
    const smaller = explanation.smaller;

    const swapped =
        problem.left !== larger;

    // Break the smaller number so that the first
    // part brings the larger number to a multiple of 10.
    const toNextTen =
        10 - (larger % 10);

    const firstPart =
        toNextTen < smaller
            ? toNextTen
            : smaller;

    const secondPart =
        smaller - firstPart;

    let steps;

    if (secondPart === 0) {
        steps = `
            <p class="counting-example">
                ${larger} + ${firstPart} = ${larger + firstPart}
            </p>
        `;
    } else {
        steps = `
            <p class="counting-example">
                ${larger} + ${firstPart}
                = ${larger + firstPart}
            </p>
            <p>
                Then we add the remaining ${secondPart}:
            </p>

            <p class="counting-example">
                ${larger + firstPart} + ${secondPart}
                = ${problem.answer}
            </p>
        `;
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            ${
                swapped
                    ? `
                        <p>
                            We can swap the numbers because addition
                            gives the same result in either order:
                        </p>

                        <p class="counting-example">
                            ${problem.left} + ${problem.right}
                            =
                            ${larger} + ${smaller}
                        </p>
                    `
                    : ""
            }

            ${
                secondPart === 0
                    ? `
                        <p>
                            We can add ${smaller} directly to ${larger}:
                        </p>
                    `
                    : `
                        <p>
                            Let's break ${smaller} into
                            ${firstPart} and ${secondPart}
                            to make the addition easier:
                        </p>
                    `
            }

            ${steps}

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
function renderSubtractionDecompositionExplanation(
    container,
    explanation,
    problem
) {
    const start = explanation.start;
    const amount = explanation.amount;

    // How much we need to subtract to reach
    // the nearest lower multiple of 10.
    const toPreviousTen =
        start % 10;

    const firstPart =
        toPreviousTen > 0 && toPreviousTen < amount
            ? toPreviousTen
            : amount;

    const secondPart =
        amount - firstPart;

    const firstResult =
        start - firstPart;

    let steps;

    if (secondPart === 0) {
        steps = `
            <p class="counting-example">
                ${start} − ${firstPart}
                = ${firstResult}
            </p>
        `;
    } else {
        steps = `
            <p class="counting-example">
                ${start} − ${firstPart}
                = ${firstResult}
            </p>
            <p>
                Then we subtract the remaining ${secondPart}:
            </p>
            <p class="counting-example">
                ${firstResult} − ${secondPart}
                = ${problem.answer}
            </p>
        `;
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                Instead of counting backwards one number at a time,
                we can break ${amount} into smaller parts.
            </p>

            ${steps}

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

function renderEvenOddExplanation(
    container,
    explanation,
    problem
) {
    const number = explanation.number;
    const answer = explanation.answer;
    const lastDigit = number % 10;

    const evenLastDigits = [0, 2, 4, 6, 8];

    let content;

    if (number < 20) {
        const pairs = Math.floor(number / 2);
        const hasRemainder = number % 2 !== 0;

        content = `
            <p>
                We can group ${number} objects into pairs:
            </p>

            <p class="counting-example">
                ${"●● ".repeat(pairs)}
                ${hasRemainder ? "●" : ""}
            </p>

            <p>
                ${
                    hasRemainder
                        ? `There is one object left over, so <strong>${number}</strong> is odd.`
                        : `There are no objects left over, so <strong>${number}</strong> is even.`
                }
            </p>
        `;
    } else {
        const isEven = evenLastDigits.includes(lastDigit);

        content = `
            <p>
                For larger numbers, we don't need to count every object.
                We can simply look at the last digit.
            </p>

            <p class="counting-example">
                ${number} → last digit: ${lastDigit}
            </p>

            <p>
                Numbers ending in
                <strong>0, 2, 4, 6, or 8</strong>
                are even.
            </p>

            <p>
                Numbers ending in
                <strong>1, 3, 5, 7, or 9</strong>
                are odd.
            </p>

            <p>
                Since ${number} ends in <strong>${lastDigit}</strong>,
                <strong>${number}</strong> is
                <strong>${answer.toLowerCase()}</strong>.
            </p>
        `;
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            ${content}
        </div>
    `;
}

function renderAdvancedAdditionExplanation(container, top, bottom) {
    // Accept the old call shape too: renderAdvancedAdditionExplanation(container, explanation, problem)
    if (typeof top === "object" && top !== null) {
        ({ top, bottom } = top);
    }

    const topStr = String(top);
    const bottomStr = String(bottom);

    const maxDigits = Math.max(topStr.length, bottomStr.length);

    const topPadded = topStr.padStart(maxDigits, "0");
    const bottomPadded = bottomStr.padStart(maxDigits, "0");

    const steps = [];

    steps.push({
        title: "Set up the problem",
        text:
            "Line up the numbers by place value. " +
            "Ones go under ones, tens under tens, and so on.",
        svg: createAdditionSvg(topStr, bottomStr, "", [])
    });

    let partialResultString = "";
    let carry = 0;
    const revealedCarries = [];

    for (
        let i = maxDigits - 1;
        i >= 0;
        i--
    ) {
        const position =
            maxDigits - 1 - i;

        const topDigit =
            Number(topPadded[i]);

        const bottomDigit =
            Number(bottomPadded[i]);

        const sum =
            topDigit +
            bottomDigit +
            carry;

        const resultDigit =
            sum % 10;

        const newCarry =
            Math.floor(sum / 10);

        const place =
            getAdditionPlaceName(position);

        partialResultString =
            String(resultDigit) + partialResultString;

        const isOverflowColumn =
            position === maxDigits - 1;

        const calculation =
            carry > 0
                ? `${topDigit} + ${bottomDigit} + ${carry} = ${sum}`
                : `${topDigit} + ${bottomDigit} = ${sum}`;

        let text =
            `${calculation}. ` +
            `Write ${resultDigit} in the ${place} place.`;

        if (newCarry > 0) {
            text +=
                ` Carry ${newCarry} to the next column.`;
        }

        if (!isOverflowColumn && newCarry > 0) {
            revealedCarries[position] = newCarry;
        }

        steps.push({
            title:
                `Add the ${place} column`,
            text,
            svg: createAdditionSvg(
                topStr,
                bottomStr,
                partialResultString,
                revealedCarries.slice()
            )
        });

        carry = newCarry;
    }

    if (carry > 0) {
        const finalResult =
            String(carry) + partialResultString;

        const finalCarries = revealedCarries.slice();
        finalCarries[maxDigits - 1] = carry;

        steps.push({
            title: "Finish the addition",
            text:
                `The final carry becomes a new digit. ` +
                `The answer is ${Number(finalResult).toLocaleString()}.`,
            svg: createAdditionSvg(topStr, bottomStr, finalResult, finalCarries)
        });
    } else {
        steps.push({
            title: "Finish the addition",
            text:
                `The answer is ${Number(partialResultString).toLocaleString()}.`,
            svg: createAdditionSvg(topStr, bottomStr, partialResultString, revealedCarries.slice())
        });
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's solve it step by step</h3>
            <div class="addition-explanation-steps">
                ${steps.map(step => `
                    <div class="addition-explanation-step">
                        <h4>${step.title}</h4>
                        <div class="addition-explanation-svg">
                            ${step.svg}
                        </div>
                        <p>${step.text}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}