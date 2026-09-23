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
    "advanced-subtraction":  {
        render(container, explanation, problem) {
            renderAdvancedSubtractionExplanation(
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
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.counting.start", {
                    start,
                    amount
                })}
            </p>

            <p class="counting-example">
                ${numbers.join(" → ")}
            </p>

            <p>
                ${t("explanations.result.so")}
                <strong>${problem.prompt}</strong>
                ${t("explanations.result.equals")}
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
                ${tf("explanations.decomposition.addRemaining", {
                    amount: secondPart
                })}
            </p>

            <p class="counting-example">
                ${larger + firstPart} + ${secondPart}
                = ${problem.answer}
            </p>
        `;
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>${t("explanations.seeHow")} 💡</h3>

            ${
                swapped
                    ? `
                        <p>
                            ${t("explanations.decomposition.swap")}
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
                            ${tf("explanations.decomposition.addDirectly", {
                                smaller,
                                larger
                            })}
                        </p>
                    `
                    : `
                        <p>
                            ${tf("explanations.decomposition.breakNumber", {
                                smaller,
                                firstPart,
                                secondPart
                            })}
                        </p>
                    `
            }

            ${steps}

            <p>
                ${t("explanations.result.so")}
                <strong>${problem.prompt}</strong>
                ${t("explanations.result.equals")}
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
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.countingBack.start", {
                    start,
                    amount
                })}
            </p>

            <p class="counting-example">
                ${numbers.join(" → ")}
            </p>

            <p>
                ${t("explanations.result.so")}
                <strong>${problem.prompt}</strong>
                ${t("explanations.result.equals")}
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
                ${tf("explanations.subtractionDecomposition.subtractRemaining", {
                    amount: secondPart
                })}
            </p>

            <p class="counting-example">
                ${firstResult} − ${secondPart}
                = ${problem.answer}
            </p>
        `;
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.subtractionDecomposition.breakNumber", {
                    amount
                })}
            </p>

            ${steps}

            <p>
                ${t("explanations.result.so")}
                <strong>${problem.prompt}</strong>
                ${t("explanations.result.equals")}
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
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.repeatedAddition.means", {
                    prompt: problem.prompt,
                    number,
                    amount
                })}
            </p>

            <p class="counting-example">
                ${terms.join(" + ")}
                = ${problem.answer}
            </p>

            <p>
                ${t("explanations.result.so")}
                <strong>${problem.prompt}</strong>
                ${t("explanations.result.equals")}
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
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.division.repeatedSubtraction", {
                    prompt: problem.prompt,
                    divisor
                })}
            </p>

            <p class="counting-example">
                ${subtractionNumbers.join(" → ")}
            </p>

            <p>
                ${tf("explanations.division.tookAway", {
                    divisor,
                    quotient
                })}
            </p>

            <hr>

            <p>
                ${tf("explanations.division.timesTable", {
                    divisor
                })}
            </p>

            <p class="counting-example">
                ${divisor} × ${quotient} = ${dividend}
            </p>

            <p>
                ${t("explanations.division.therefore")}
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
            <h3>${t("explanations.learn")} 💡</h3>

            <p>
                ${tf("explanations.romanSymbol.represents", {
                    symbol,
                    value
                })}
            </p>

            <p class="counting-example">
                ${symbol} = ${value}
            </p>

            <p>
                ${t("explanations.romanSymbol.remember")}
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
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.romanAddition.symbolsAdded", {
                    roman
                })}
            </p>

            <p class="counting-example">
                ${symbols.join(" + ")}
            </p>

            <p class="counting-example">
                ${values.join(" + ")}
                = ${number}
            </p>

            <p>
                ${tf("explanations.romanAddition.result", {
                    roman,
                    number
                })}
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
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.romanToArabic.convert", {
                    roman
                })}
            </p>

            <p class="counting-example">
                ${symbols.join(" ")}
            </p>

            <p>
                ${t("explanations.romanToArabic.rule")}
            </p>

            <p class="counting-example">
                ${calculation}
            </p>

            <p>
                ${tf("explanations.romanToArabic.result", {
                    roman,
                    number
                })}
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
        .map(term => `${term.text}(${term.value})`)
        .join(" + ");

    const numeral = terms
        .map(term => term.text)
        .join("");

    container.innerHTML = `
        <div class="explanation-card">
            <h3>${t("explanations.seeHow")} 💡</h3>

            <p>
                ${tf("explanations.arabicToRoman.build", {
                    number
                })}
            </p>

            <p class="counting-example">
                ${decomposition}
            </p>

            <p>
                ${t("explanations.arabicToRoman.combine")}
            </p>

            <p class="counting-example">
                ${numeral}
            </p>

            <p>
                ${tf("explanations.arabicToRoman.result", {
                    number,
                    roman
                })}
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
                ${tf("explanations.evenOdd.groupPairs", {
                    number
                })}
            </p>

            <p class="counting-example">
                ${"●● ".repeat(pairs)}
                ${hasRemainder ? "●" : ""}
            </p>

            <p>
                ${
                    hasRemainder
                        ? tf("explanations.evenOdd.oneLeft", {
                            number
                        })
                        : tf("explanations.evenOdd.noneLeft", {
                            number
                        })
                }
            </p>
        `;
    } else {
        const isEven =
            evenLastDigits.includes(lastDigit);

        content = `
            <p>
                ${t("explanations.evenOdd.largerNumbers")}
            </p>

            <p class="counting-example">
                ${number} → ${tf(
                    "explanations.evenOdd.lastDigit",
                    { lastDigit }
                )}
            </p>

            <p>
                ${t("explanations.evenOdd.evenNumbers")}
            </p>

            <p>
                ${t("explanations.evenOdd.oddNumbers")}
            </p>

            <p>
                ${tf("explanations.evenOdd.conclusion", {
                    number,
                    lastDigit,
                    answer: answer.toLowerCase()
                })}
            </p>
        `;
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>${t("explanations.seeHow")} 💡</h3>

            ${content}
        </div>
    `;
}


function renderAdvancedAdditionExplanation(
    container,
    top,
    bottom
) {
    if (typeof top === "object" && top !== null) {
        ({ top, bottom } = top);
    }

    const topStr = String(top);
    const bottomStr = String(bottom);

    const maxDigits =
        Math.max(
            topStr.length,
            bottomStr.length
        );

    const topPadded =
        topStr.padStart(maxDigits, "0");

    const bottomPadded =
        bottomStr.padStart(maxDigits, "0");

    const steps = [];

    steps.push({
        title: t("explanations.advancedAddition.setupTitle"),
        text: t("explanations.advancedAddition.setupText"),
        svg: createAdditionSvg(
            topStr,
            bottomStr,
            "",
            []
        )
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
            tf("explanations.advancedAddition.writeDigit", {
                resultDigit,
                place
            });

        if (newCarry > 0) {
            text += " " +
                tf("explanations.advancedAddition.carry", {
                    newCarry
                });
        }

        if (!isOverflowColumn && newCarry > 0) {
            revealedCarries[position] = newCarry;
        }

        steps.push({
            title: tf(
                "explanations.advancedAddition.columnTitle",
                { place }
            ),
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

        const finalCarries =
            revealedCarries.slice();

        finalCarries[maxDigits - 1] = carry;

        steps.push({
            title:
                t("explanations.advancedAddition.finishTitle"),

            text:
                tf("explanations.advancedAddition.finalCarry", {
                    answer: Number(finalResult).toLocaleString()
                }),

            svg: createAdditionSvg(
                topStr,
                bottomStr,
                finalResult,
                finalCarries
            )
        });
    } else {
        steps.push({
            title:
                t("explanations.advancedAddition.finishTitle"),

            text:
                tf("explanations.advancedAddition.answer", {
                    answer: Number(
                        partialResultString
                    ).toLocaleString()
                }),

            svg: createAdditionSvg(
                topStr,
                bottomStr,
                partialResultString,
                revealedCarries.slice()
            )
        });
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>${t("explanations.solveStepByStep")}</h3>

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


function renderAdvancedSubtractionExplanation(
    container,
    top,
    bottom
) {
    if (typeof top === "object" && top !== null) {
        ({ top, bottom } = top);
    }

    const topStr = String(top);
    const bottomStr = String(bottom);

    const maxDigits =
        Math.max(
            topStr.length,
            bottomStr.length
        );

    const topPadded =
        topStr.padStart(maxDigits, "0");

    const bottomPadded =
        bottomStr.padStart(maxDigits, "0");

    const steps = [];

    steps.push({
        title:
            t("explanations.advancedSubtraction.setupTitle"),

        text:
            t("explanations.advancedSubtraction.setupText"),

        svg: createSubtractionSvg(
            topStr,
            bottomStr,
            "",
            []
        )
    });

    const revealedBorrows = [];

    const partialResult =
        Array(maxDigits).fill("");

    let borrow = 0;

    for (
        let i = maxDigits - 1;
        i >= 0;
        i--
    ) {
        const position =
            maxDigits - 1 - i;

        const originalTopDigit =
            Number(topPadded[i]);

        const bottomDigit =
            Number(bottomPadded[i]);

        let topDigit =
            originalTopDigit - borrow;

        let newBorrow = 0;

        if (topDigit < bottomDigit) {
            newBorrow = 1;

            topDigit += 10;

            if (i > 0) {
                revealedBorrows[position] = 1;
            }
        }

        const resultDigit =
            topDigit - bottomDigit;

        partialResult[i] =
            String(resultDigit);

        const place =
            getSubtractionPlaceName(position);

        let text;

        if (newBorrow) {
            text =
                tf(
                    "explanations.advancedSubtraction.borrow",
                    {
                        originalTopDigit,
                        bottomDigit,
                        place,
                        borrowedPlace:
                            getSubtractionPlaceName(
                                position + 1
                            ),
                        topDigit,
                        resultDigit
                    }
                );
        } else if (borrow) {
            text =
                tf(
                    "explanations.advancedSubtraction.afterBorrow",
                    {
                        place,
                        topDigit,
                        bottomDigit,
                        resultDigit
                    }
                );
        } else {
            text =
                tf(
                    "explanations.advancedSubtraction.subtract",
                    {
                        topDigit,
                        bottomDigit,
                        resultDigit,
                        place
                    }
                );
        }

        steps.push({
            title: tf(
                "explanations.advancedSubtraction.columnTitle",
                { place }
            ),

            text,

            svg: createSubtractionSvg(
                topStr,
                bottomStr,
                partialResult.join(""),
                revealedBorrows.slice()
            )
        });

        borrow = newBorrow;
    }

    steps.push({
        title:
            t("explanations.advancedSubtraction.finishTitle"),

        text:
            tf(
                "explanations.advancedSubtraction.answer",
                {
                    answer: Number(
                        partialResult.join("")
                    ).toLocaleString()
                }
            ),

        svg: createSubtractionSvg(
            topStr,
            bottomStr,
            partialResult.join(""),
            revealedBorrows.slice()
        )
    });

    container.innerHTML = `
        <div class="explanation-card">
            <h3>${t("explanations.solveStepByStep")}</h3>

            <div class="subtraction-explanation-steps">
                ${steps.map(step => `
                    <div class="subtraction-explanation-step">
                        <h4>${step.title}</h4>

                        <div class="subtraction-explanation-svg">
                            ${step.svg}
                        </div>

                        <p>${step.text}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}