const ROMAN_SYMBOLS = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];
ROMAN_NUMERAL_SYMBOLS = [
    { value: 1000, symbol: "M" },
    { value: 500, symbol: "D" },
    { value: 100, symbol: "C" },
    { value: 50, symbol: "L" },
    { value: 10, symbol: "X" },
    { value: 5, symbol: "V" },
    { value: 1, symbol: "I" } 
]
const ROMAN_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


function arabicToRoman(number) {
    let result = "";

    for (const { value, symbol } of ROMAN_SYMBOLS) {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    }

    return result;
}


function romanToArabic(roman) {
    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = ROMAN_VALUES[roman[i]];
        const next = ROMAN_VALUES[roman[i + 1]];

        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}

function hasRomanSubtraction(number) {
    const roman = arabicToRoman(number);

    return (
        roman.includes("IV") ||
        roman.includes("IX") ||
        roman.includes("XL") ||
        roman.includes("XC") ||
        roman.includes("CD") ||
        roman.includes("CM")
    );
}
function arabicToRomanAdditive(number) {
    let result = "";

    const symbols = [
        { value: 1000, symbol: "M" },
        { value: 500, symbol: "D" },
        { value: 100, symbol: "C" },
        { value: 50, symbol: "L" },
        { value: 10, symbol: "X" },
        { value: 5, symbol: "V" },
        { value: 1, symbol: "I" }
    ];

    for (const { value, symbol } of symbols) {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    }

    return result;
}

const ROMAN_SUBTRACTION_PAIRS = [
    { subtractive: "IV", additive: "IIII" },
    { subtractive: "IX", additive: "VIIII" },
    { subtractive: "XL", additive: "XXXX" },
    { subtractive: "XC", additive: "LXXXX" },
    { subtractive: "CD", additive: "CCCC" },
    { subtractive: "CM", additive: "DCCCC" }
];

function generatePartialSubtractionDecoy(roman) {
    const applicablePairs =
        ROMAN_SUBTRACTION_PAIRS.filter(
            pair => roman.includes(pair.subtractive)
        );

    if (applicablePairs.length === 0) {
        return null;
    }

    const pair =
        applicablePairs[
            Math.floor(
                Math.random() * applicablePairs.length
            )
        ];

    return roman.replace(
        pair.subtractive,
        pair.additive
    );
}
function generateOverSubtractionDecoy(number) {
    const roman = arabicToRoman(number);

    const lastSymbol = roman[roman.length - 1];

    if (!lastSymbol) {
        return null;
    }

    const value = ROMAN_VALUES[lastSymbol];

    // Find a larger symbol already present.
    const largerIndex = [...roman].findIndex(
        symbol => ROMAN_VALUES[symbol] > value
    );

    if (largerIndex === -1) {
        return null;
    }

    return (
        roman.slice(0, largerIndex) +
        roman.slice(largerIndex + 1, -1) +
        lastSymbol +
        roman[largerIndex]
    );
}

function generateAdditionProblem(settings) {
    const max = settings.max;

    const left = Math.floor(
        Math.random() * (max - 1)
    ) + 1;

    const right = Math.floor(
        Math.random() * (max - left)
    ) + 1;

    return {
        left,
        right,
        operator: "+",
        prompt: `${left} + ${right}`,
        answer: left + right,

        explanation: {
            type: "counting",
            start: left,
            amount: right
        }
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

    return {
        left,
        right,
        operator: "−",
        prompt: `${left} − ${right}`,
        answer: left - right,

        explanation: {
            type: "counting-back",
            start: left,
            amount: right
        }
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