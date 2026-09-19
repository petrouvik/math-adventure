function generateNumberReadingProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const answer = numberToWords(number);

    const decoys = [];

    let offset = 1;

    while (decoys.length < 3) {
        const candidates = [
            number - offset,
            number + offset
        ];

        for (const candidate of candidates) {
            if (
                candidate < settings.min ||
                candidate > settings.max
            ) {
                continue;
            }

            const word = numberToWords(candidate);

            if (
                word !== answer &&
                !decoys.includes(word)
            ) {
                decoys.push(word);
            }

            if (decoys.length === 3) {
                break;
            }
        }

        offset++;
    }

    const choices = [
        answer,
        ...decoys
    ];

    shuffle(choices);

    return {
        prompt: `What number is ${number}?`,
        answer,
        choices,

        explanation: {
            type: "number-reading",
            number,
            words: answer
        }
    };
}

function generateNumberReadingProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateNumberReadingProblem(settings)
        );
    }

    return problems;
}

function generatePredecessorSuccessorProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const predecessor =
        Math.random() < 0.5;

    const answer = predecessor
        ? number - 1
        : number + 1;

    return {
        prompt: predecessor
            ? `predecessor of ${number}`
            : `successor of ${number}`,

        answer,

        explanation: {
            type: "predecessor-successor",
            number,
            answer,
            predecessor
        }
    };
}

function generatePredecessorSuccessorProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generatePredecessorSuccessorProblem(settings)
        );
    }

    return problems;
}

function generateEvenOddProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const answer =
        number % 2 === 0
            ? "Even"
            : "Odd";

    return {
        prompt: `Is ${number} even or odd?`,
        answer,

        choices: [
            "Even",
            "Odd"
        ],

        explanation: {
            type: "even-odd",
            number,
            answer
        }
    };
}

function generateEvenOddProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateEvenOddProblem(settings)
        );
    }

    return problems;
}

function generateAdditionProblem(settings) {
    const max = settings.max;

    const left = Math.floor(
        Math.random() * (max - 1)
    ) + 1;

    const right = Math.floor(
        Math.random() * (max - left)
    ) + 1;

    const smaller = Math.min(left, right);
    const larger = Math.max(left, right);

    let explanation;

    if (smaller <= 3) {
        explanation = {
            type: "counting",
            start: larger,
            amount: smaller
        };
    } else {
        explanation = {
            type: "decomposition",
            larger,
            smaller
        };
    }

    return {
        left,
        right,
        operator: "+",
        prompt: `${left} + ${right}`,
        answer: left + right,
        explanation
    };
}

function generateAdditionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateAdditionProblem(settings)
        );
    }

    return problems;
}

function generateSubtractionProblem(settings) {
    const max = settings.max;

    const left =
        Math.floor(Math.random() * (max - 1)) + 1;

    const right =
        Math.floor(Math.random() * left) + 1;

    const explanation =
        right <= 3
            ? {
                type: "counting-back",
                start: left,
                amount: right
            }
            : {
                type: "subtraction-decomposition",
                start: left,
                amount: right
            };

    return {
        left,
        right,
        operator: "−",
        prompt: `${left} − ${right}`,
        answer: left - right,
        explanation
    };
}

function generateSubtractionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateSubtractionProblem(settings)
        );
    }

    return problems;
}

function generateMultiplicationTableProblem(settings) {
    const tables = settings.tables;
    const maxMultiplier = settings.maxMultiplier;

    const table =
        tables[Math.floor(Math.random() * tables.length)];

    const multiplier =
        Math.floor(Math.random() * maxMultiplier) + 1;

    return {
        left: table,
        right: multiplier,
        operator: "×",
        prompt: `${table} × ${multiplier}`,
        answer: table * multiplier,

        explanation: {
            type: "repeated-addition",
            number: table,
            amount: multiplier
        }
    };
}

function generateMultiplicationTableProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateMultiplicationTableProblem(settings)
        );
    }

    return problems;
}

function generateDivisionProblem(settings) {
    const divisors = settings.divisors;
    const maxQuotient = settings.maxQuotient;

    const divisor =
        divisors[
            Math.floor(Math.random() * divisors.length)
        ];

    const quotient =
        Math.floor(Math.random() * maxQuotient) + 1;

    const dividend = divisor * quotient;

    return {
        left: dividend,
        right: divisor,
        operator: "÷",
        prompt: `${dividend} ÷ ${divisor}`,
        answer: quotient,

        explanation: {
            type: "division",
            dividend,
            divisor,
            quotient
        }
    };
}

function generateDivisionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateDivisionProblem(settings)
        );
    }

    return problems;
}

function generateRomanSymbolProblem() {
    const selected =
        ROMAN_NUMERAL_SYMBOLS[
            Math.floor(
                Math.random() *
                ROMAN_NUMERAL_SYMBOLS.length
            )
        ];

    const distractors =
        ROMAN_NUMERAL_SYMBOLS
            .filter(item => item !== selected)
            .map(item => item.value);

    shuffle(distractors);

    const choices = [
        selected.value,
        ...distractors.slice(0, 3)
    ];

    shuffle(choices);

    return {
        prompt: `What number does ${selected.symbol} represent?`,

        answer: selected.value,

        choices,

        explanation: {
            type: "roman-symbol",
            symbol: selected.symbol,
            value: selected.value
        }
    };
}

function generateRomanSymbolProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateRomanSymbolProblem()
        );
    }

    return problems;
}

function generateRomanAdditionProblem(settings) {
    let number;

    do {
        number =
            Math.floor(
                Math.random() * (settings.max - settings.min + 1)
            ) + settings.min;

    } while (
        settings.subtraction === false &&
        hasRomanSubtraction(number)
    );

    const roman = arabicToRoman(number);

    return {
        prompt: roman,
        answer: number,

        explanation: {
            type: "roman-addition",
            roman,
            number
        }
    };
}

function generateRomanAdditionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateRomanAdditionProblem(settings)
        );
    }

    return problems;
}

function generateRomanToArabicProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const roman = arabicToRoman(number);

    return {
        prompt: roman,
        answer: number,

        explanation: {
            type: "roman-to-arabic",
            roman,
            number
        }
    };
}

function generateRomanToArabicProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateRomanToArabicProblem(settings)
        );
    }

    return problems;
}

function generateArabicToRomanProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const answer = arabicToRoman(number);

    const decoys = [];

    // No subtraction when subtraction is needed.
    if (hasRomanSubtraction(number)) {
        decoys.push(
            arabicToRomanAdditive(number)
        );
    }

    // Apply subtraction to only one part of the number.
    const partialSubtraction =
        generatePartialSubtractionDecoy(answer);

    if (
        partialSubtraction !== null &&
        partialSubtraction !== answer
    ) {
        decoys.push(partialSubtraction);
    }

    // Subtract when we should add.
    const overSubtraction =
        generateOverSubtractionDecoy(number);

    if (
        overSubtraction !== null &&
        overSubtraction !== answer
    ) {
        decoys.push(overSubtraction);
    }

    // Remove duplicate decoys.
    const uniqueDecoys = [...new Set(decoys)];

    // If we don't have enough meaningful decoys,
    // generate nearby numbers as a fallback.
    let offset = 2;

    while (uniqueDecoys.length < 3) {
        const candidates = [
            number - offset,
            number + offset
        ];

        for (const candidate of candidates) {
            if (
                candidate < settings.min ||
                candidate > settings.max
            ) {
                continue;
            }

            const roman = arabicToRoman(candidate);

            if (
                roman !== answer &&
                !uniqueDecoys.includes(roman)
            ) {
                uniqueDecoys.push(roman);
            }

            if (uniqueDecoys.length === 3) {
                break;
            }
        }

        offset++;
    }

    const choices = [
        answer,
        ...uniqueDecoys
    ];

    shuffle(choices);

    return {
        prompt: `${number} in Roman numerals is...`,
        answer,
        choices,

        explanation: {
            type: "arabic-to-roman",
            number,
            roman: answer
        }
    };
}

function generateArabicToRomanProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateArabicToRomanProblem(settings)
        );
    }

    return problems;
}


const GENERATORS = {
    "number-reading": {
        generate(settings, count) {
            return generateNumberReadingProblems(
                settings,
                count
            );
        }
    },
    "predecessor-successor": {
        generate(settings, count) {
            return generatePredecessorSuccessorProblems(
                settings,
                count
            );
        }
    },
    "even-odd": {
        generate(settings, count) {
            return generateEvenOddProblems(
                settings,
                count
            );
        }
    },
    addition: {
        generate(settings, count) {
            return generateAdditionProblems(
                settings,
                count
            );
        }
    },
    subtraction: {
        generate(settings, count) {
            return generateSubtractionProblems(
                settings,
                count
            );
        }
    },
    "multiplication-table": {
        generate(settings, count) {
            return generateMultiplicationTableProblems(
                settings,
                count
            );
        }
    },
    division: {
        generate(settings, count) {
            return generateDivisionProblems(
                settings,
                count
            );
        }
    },
    "roman-symbols": {
        generate(settings, count) {
            return generateRomanSymbolProblems(
                settings,
                count
            );
        }
    },
    "roman-addition": {
        generate(settings, count) {
            return generateRomanAdditionProblems(
                settings,
                count
            );
        }
    },
    "roman-to-arabic": {
        generate(settings, count) {
            return generateRomanToArabicProblems(
                settings,
                count
            );
        }
    },
    "arabic-to-roman": {
        generate(settings, count) {
            return generateArabicToRomanProblems(
                settings,
                count
            );
        }
    }
};