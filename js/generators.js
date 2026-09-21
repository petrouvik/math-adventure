function generateNumberReadingProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const answer = numberToWords(number);

    const decoys = [];
    const usedNumbers = new Set([number]);

    function addDecoy(candidate) {
        if (
            candidate < settings.min ||
            candidate > settings.max ||
            usedNumbers.has(candidate)
        ) {
            return;
        }

        usedNumbers.add(candidate);
        decoys.push(numberToWords(candidate));
    }

    /*
     * Change individual digits.
     *
     * Example:
     * 42305
     *
     * Changing one digit can produce:
     * 52305
     * 43305
     * 42405
     * 42315
     * 42306
     */
    const digits = String(number).split("");

    for (let i = 0; i < digits.length; i++) {
        const digit = Number(digits[i]);

        for (const change of [-1, 1]) {
            const newDigit = digit + change;

            if (newDigit < 0 || newDigit > 9) {
                continue;
            }

            const newDigits = [...digits];
            newDigits[i] = newDigit;

            const candidate = Number(newDigits.join(""));

            addDecoy(candidate);

            if (decoys.length === 3) {
                break;
            }
        }

        if (decoys.length === 3) {
            break;
        }
    }

    /*
     * If changing adjacent digits wasn't enough,
     * try changing digits by larger amounts.
     */
    if (decoys.length < 3) {
        for (let i = 0; i < digits.length; i++) {
            const digit = Number(digits[i]);

            for (let newDigit = 0; newDigit <= 9; newDigit++) {
                if (newDigit === digit) {
                    continue;
                }

                const newDigits = [...digits];
                newDigits[i] = newDigit;

                const candidate = Number(newDigits.join(""));

                addDecoy(candidate);

                if (decoys.length === 3) {
                    break;
                }
            }

            if (decoys.length === 3) {
                break;
            }
        }
    }

    /*
     * Final fallback:
     * numbers near the correct answer.
     *
     * This mainly matters for very small ranges.
     */
    let offset = 1;

    while (decoys.length < 3) {
        addDecoy(number - offset);
        addDecoy(number + offset);

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

function generateNumberWritingProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const words = numberToWords(number);

    return {
        prompt: words,
        answer: number,

        explanation: {
            type: "number-writing",
            number,
            words
        }
    };
}

function generateNumberWritingProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateNumberWritingProblem(settings)
        );
    }

    return problems;
}

function generateAdditionProblem(settings) {
    const {
        min = 1,
        max,
        carryProbability = 0
    } = settings;

    for (let attempt = 0; attempt < 1000; attempt++) {
        const wantsCarry =
            Math.random() < carryProbability;

        let left;
        let right;

        if (wantsCarry) {
            /*
             * Choose the ones digits so that
             * their sum is at least 10.
             */
            const leftMin =
                Math.max(min, 1);

            left =
                Math.floor(
                    Math.random() *
                    (max - leftMin + 1)
                ) + leftMin;

            /*
             * The right number must be large enough
             * to make the ones digits carry.
             */
            const leftOnes =
                left % 10;

            const minimumRight =
                10 - leftOnes;

            if (minimumRight > max) {
                continue;
            }

            right =
                Math.floor(
                    Math.random() *
                    (max - minimumRight + 1)
                ) + minimumRight;
        } else {
            left =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;

            right =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;
        }

        /*
         * Make sure the answer stays within max.
         */
        if (left + right > max) {
            continue;
        }

        const smaller =
            Math.min(left, right);

        const larger =
            Math.max(left, right);

        /*
         * Verify whether this problem actually
         * requires carrying in the ones column.
         */
        const hasCarry =
            (left % 10) + (right % 10) >= 10;

        if (wantsCarry !== hasCarry) {
            continue;
        }

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

    throw new Error(
        "Could not generate an addition problem with the requested settings."
    );
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
    const {
        min = 1,
        max,
        borrowProbability = 0
    } = settings;

    for (let attempt = 0; attempt < 1000; attempt++) {
        let left;
        let right;

        /*
         * Decide whether this problem should
         * require borrowing in the ones column.
         */
        const wantsBorrow =
            Math.random() < borrowProbability;

        if (wantsBorrow) {
            /*
             * Choose a left number whose ones digit
             * is smaller than the right number's ones digit.
             */
            left =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;

            const leftOnes =
                left % 10;

            /*
             * We need a right number whose ones
             * digit is larger than left's ones digit.
             */
            const minimumRight =
                leftOnes + 1;

            if (minimumRight > left) {
                continue;
            }

            right =
                Math.floor(
                    Math.random() *
                    (left - minimumRight + 1)
                ) + minimumRight;
        } else {
            /*
             * Generate an ordinary subtraction problem.
             */
            left =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;

            right =
                Math.floor(
                    Math.random() * left
                ) + 1;
        }

        /*
         * Make sure the result is still within
         * the requested range.
         */
        if (left - right < min) {
            continue;
        }

        /*
         * Check whether this problem actually
         * requires a borrow in the ones column.
         */
        const hasBorrow =
            (left % 10) < (right % 10);

        if (wantsBorrow !== hasBorrow) {
            continue;
        }

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

    throw new Error(
        "Could not generate a subtraction problem with the requested settings."
    );
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

function generateNumberComparisonProblem(settings) {
    const left =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    let right =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const relationRandom = Math.random();

    if (relationRandom < 0.2) {
        // Equal
        right = left;
    } else if (relationRandom < 0.6) {
        // Make left smaller
        right = Math.max(
            settings.min,
            left - Math.floor(Math.random() * 100 + 1)
        );
    } else {
        // Make left larger
        right = Math.min(
            settings.max,
            left + Math.floor(Math.random() * 100 + 1)
        );
    }

    let answer;

    if (left < right) {
        answer = "<";
    } else if (left > right) {
        answer = ">";
    } else {
        answer = "=";
    }

    return {
        prompt: `${left} <span class="question-mark">?</span> ${right}`,
        answer,

        choices: [
            "<",
            ">",
            "="
        ],

        explanation: {
            type: "number-comparison",
            left,
            right,
            answer
        }
    };
}

function generateNumberComparisonProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateNumberComparisonProblem(settings)
        );
    }

    return problems;
}
function generatePlaceValueProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const digits = String(number)
        .split("")
        .map(Number);

    const possibleIndices = digits
        .map((digit, index) => ({ digit, index }))
        .filter(item => item.digit !== 0);

    const selected =
        possibleIndices[
            Math.floor(
                Math.random() * possibleIndices.length
            )
        ];

    const digit = selected.digit;
    const digitIndex = selected.index;

    const power =
        digits.length - digitIndex - 1;

    const value =
        digit * Math.pow(10, power);

    const choices = [value];

    // Other possible values for this digit.
    const possibleValues = [];

    for (let i = 0; i < digits.length; i++) {
        const possibleValue =
            digit * Math.pow(
                10,
                digits.length - i - 1
            );

        if (
            possibleValue !== value &&
            !possibleValues.includes(possibleValue)
        ) {
            possibleValues.push(possibleValue);
        }
    }

    // Fill remaining choices if necessary.
    for (let i = 1; possibleValues.length < 3; i++) {
        const possibleValue = digit * i;

        if (
            possibleValue !== value &&
            !possibleValues.includes(possibleValue)
        ) {
            possibleValues.push(possibleValue);
        }
    }

    shuffle(possibleValues);

    choices.push(
        ...possibleValues.slice(0, 3)
    );

    shuffle(choices);

    const formattedNumber =
    number
        .toLocaleString()
        .split("")
        .map(character => character)
        .join("");

    let digitCounter = 0;

    const highlightedNumber =
        formattedNumber
            .split("")
            .map(character => {
                if (character === ",") {
                    return character;
                }

                const html =
                    digitCounter === digitIndex
                        ? `<strong class="place-value-digit">${character}</strong>`
                        : character;

                digitCounter++;

                return html;
            })
            .join("");
    return {
        prompt: `What is the value of the highlighted digit in ${highlightedNumber}?`,
        answer: value,
        choices,

        explanation: {
            type: "place-value",
            number,
            digit,
            digitIndex,
            value,
            position: power
        }
    };
}

function generatePlaceValueProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generatePlaceValueProblem(settings)
        );
    }

    return problems;
}

function generateExpandedFormProblem(settings) {
    const number =
        Math.floor(
            Math.random() *
            (settings.max - settings.min + 1)
        ) + settings.min;

    const digits = String(number).split("");

    const parts = [];

    digits.forEach((digit, index) => {
        const value =
            Number(digit) *
            Math.pow(10, digits.length - index - 1);

        if (value !== 0) {
            parts.push(value);
        }
    });

    return {
        prompt: parts
            .map(part => part.toLocaleString())
            .join(" + "),

        answer: number,

        explanation: {
            type: "expanded-form",
            number,
            parts
        }
    };
}

function generateExpandedFormProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateExpandedFormProblem(settings)
        );
    }

    return problems;
}

function generateNumberGroupsProblem(settings) {
    const groupSizes = [
        10,
        100,
        1000
    ];

    const groupSize =
        groupSizes[
            Math.floor(Math.random() * groupSizes.length)
        ];

    // Only use the first 20 groups.
    const maxGroup = Math.min(
        20,
        Math.floor(settings.max / groupSize)
    );

    const groupNumber =
        Math.floor(
            Math.random() * maxGroup
        ) + 1;

    const groupStart =
        (groupNumber - 1) * groupSize + 1;

    const groupEnd =
        groupNumber * groupSize;

    const number =
        Math.floor(
            Math.random() *
            (groupEnd - groupStart + 1)
        ) + groupStart;

    const questionType =
        Math.floor(Math.random() * 3);

    let prompt;
    let answer;
    let choices;

    // Which number is the smallest?
    if (questionType === 0) {
        prompt =
            `Which number is the smallest in the ${getGroupName(groupNumber, groupSize)}?`;

        answer = groupStart;

        choices = [
            groupStart,
            groupStart + 1,
            groupEnd - 1,
            groupEnd
        ];
    }

    // Which number is the largest?
    else if (questionType === 1) {
        prompt =
            `Which number is the largest in the ${getGroupName(groupNumber, groupSize)}?`;

        answer = groupEnd;

        choices = [
            groupStart,
            groupStart + 1,
            groupEnd - 1,
            groupEnd
        ];
    }

    // In which group does the number belong?
    else {
        answer =
            getGroupName(groupNumber, groupSize);

        prompt =
            `In which group does ${number.toLocaleString()} belong?`;

        choices = [
            answer
        ];

        const possibleGroups = [];

        // Use nearby groups as distractors.
        for (const offset of [-2, -1, 1, 2]) {
            const otherGroup =
                groupNumber + offset;

            if (
                otherGroup < 1 ||
                otherGroup > maxGroup
            ) {
                continue;
            }

            possibleGroups.push(
                getGroupName(otherGroup, groupSize)
            );
        }

        shuffle(possibleGroups);

        choices.push(
            ...possibleGroups.slice(0, 3)
        );
    }

    shuffle(choices);

    return {
        prompt,
        answer,
        choices,

        explanation: {
            type: "number-groups",
            number,
            groupNumber,
            groupSize,
            groupStart,
            groupEnd,
            questionType
        }
    };
}


function generateNumberGroupsProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateNumberGroupsProblem(settings)
        );
    }

    return problems;
}

function generateAdvancedAdditionProblem(settings) {
    const {
        min = 100,
        max = 10000,
        sameLength = true,
        carryCount = null,
        carryThroughZero = false
    } = settings;

    for (let attempt = 0; attempt < 10000; attempt++) {
        let top;
        let bottom;

        /*
         * Generate numbers with the requested number of digits.
         */
        if (sameLength) {
            const minDigits =
                String(min).length;

            const maxDigits =
                String(max).length;

            const digits =
                Math.floor(
                    Math.random() *
                    (maxDigits - minDigits + 1)
                ) + minDigits;

            const lower =
                Math.max(
                    min,
                    Math.pow(10, digits - 1)
                );

            const upper =
                Math.min(
                    max,
                    Math.pow(10, digits) - 1
                );

            top =
                Math.floor(
                    Math.random() *
                    (upper - lower + 1)
                ) + lower;

            bottom =
                Math.floor(
                    Math.random() *
                    (upper - lower + 1)
                ) + lower;
        } else {
            top =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;

            bottom =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;
        }

        /*
         * Make sure the result is also within the allowed range.
         */
        const result = top + bottom;

        if (result > max) {
            continue;
        }

        /*
         * Compute the carries.
         */
        const carries =
            computeCarries(top, bottom);

        const numberOfCarries =
            carries.filter(Boolean).length;

        /*
         * Check carry-count requirements.
         */
        if (carryCount !== null) {
            if (typeof carryCount === "number") {
                if (numberOfCarries !== carryCount) {
                    continue;
                }
            } else {
                if (
                    carryCount.min !== undefined &&
                    numberOfCarries < carryCount.min
                ) {
                    continue;
                }

                if (
                    carryCount.max !== undefined &&
                    numberOfCarries > carryCount.max
                ) {
                    continue;
                }
            }
        }

        /*
         * Check whether a carry passes through
         * a column containing a zero.
         *
         * A carry passes into a column if the previous
         * column generated a carry. We require one of
         * the digits in that column to be zero.
         */
        if (carryThroughZero) {
            const topStr =
                String(top);

            const bottomStr =
                String(bottom);

            const maxLength =
                Math.max(
                    topStr.length,
                    bottomStr.length
                );

            const topPadded =
                topStr.padStart(maxLength, "0");

            const bottomPadded =
                bottomStr.padStart(maxLength, "0");

            let found = false;

            for (let i = maxLength - 1; i > 0; i--) {
                const carryIntoColumn =
                    carries[maxLength - 1 - i];

                if (!carryIntoColumn) {
                    continue;
                }

                if (
                    topPadded[i] === "0" ||
                    bottomPadded[i] === "0"
                ) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                continue;
            }
        }

        return {
            prompt: `${top.toLocaleString()} + ${bottom.toLocaleString()}`,
            answer: result,

            explanation: {
                type: "advanced-addition",
                top,
                bottom,
                result,
                carries
            }
        };
    }

    /*
     * If we somehow cannot find a number satisfying
     * the requested constraints, fail explicitly.
     */
    throw new Error(
        "Could not generate an advanced addition problem with the requested settings."
    );
}


function generateAdvancedAdditionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateAdvancedAdditionProblem(settings)
        );
    }

    return problems;
}

function generateAdvancedSubtractionProblem(settings) {
    const {
        min = 100,
        max = 10000,
        sameLength = true,
        borrowCount = null,
        borrowThroughZero = false
    } = settings;

    for (let attempt = 0; attempt < 10000; attempt++) {
        let top;
        let bottom;

        /*
         * Generate numbers with the requested number of digits.
         */
        if (sameLength) {
            const minDigits =
                String(min).length;

            const maxDigits =
                String(max).length;

            const digits =
                Math.floor(
                    Math.random() *
                    (maxDigits - minDigits + 1)
                ) + minDigits;

            const lower =
                Math.max(
                    min,
                    Math.pow(10, digits - 1)
                );

            const upper =
                Math.min(
                    max,
                    Math.pow(10, digits) - 1
                );

            top =
                Math.floor(
                    Math.random() *
                    (upper - lower + 1)
                ) + lower;

            bottom =
                Math.floor(
                    Math.random() *
                    (upper - lower + 1)
                ) + lower;
        } else {
            top =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;

            bottom =
                Math.floor(
                    Math.random() *
                    (max - min + 1)
                ) + min;
        }

        /*
         * Subtraction requires the top number
         * to be at least as large as the bottom number.
         */
        if (top < bottom) {
            [top, bottom] = [bottom, top];
        }

        const result = top - bottom;

        /*
         * Compute the borrows.
         */
        const borrows =
            computeBorrows(top, bottom);

        const numberOfBorrows =
            borrows.filter(Boolean).length;

        /*
         * Check borrow-count requirements.
         */
        if (borrowCount !== null) {
            if (typeof borrowCount === "number") {
                if (numberOfBorrows !== borrowCount) {
                    continue;
                }
            } else {
                if (
                    borrowCount.min !== undefined &&
                    numberOfBorrows < borrowCount.min
                ) {
                    continue;
                }

                if (
                    borrowCount.max !== undefined &&
                    numberOfBorrows > borrowCount.max
                ) {
                    continue;
                }
            }
        }

        /*
         * Check whether borrowing passes through
         * a column containing zero.
         */
        if (borrowThroughZero) {
            const topStr =
                String(top);

            const bottomStr =
                String(bottom);

            const maxLength =
                Math.max(
                    topStr.length,
                    bottomStr.length
                );

            const topPadded =
                topStr.padStart(maxLength, "0");

            let found = false;

            /*
             * A borrow passes through a zero when
             * we need to borrow from a column whose
             * digit is zero.
             *
             * For example:
             *
             *     5 0 2
             *   - 1 7 8
             *
             * The ones need a borrow, but the tens
             * contains zero, so the borrow must pass
             * through that zero.
             */
            for (let i = maxLength - 2; i >= 0; i--) {
                const borrowIntoColumn =
                    borrows[maxLength - 1 - i];

                if (!borrowIntoColumn) {
                    continue;
                }

                if (topPadded[i] === "0") {
                    found = true;
                    break;
                }
            }

            if (!found) {
                continue;
            }
        }

        return {
            prompt: `${top.toLocaleString()} − ${bottom.toLocaleString()}`,
            answer: result,

            explanation: {
                type: "advanced-subtraction",
                top,
                bottom,
                result,
                borrows
            }
        };
    }

    /*
     * If we somehow cannot find a number satisfying
     * the requested constraints, fail explicitly.
     */
    throw new Error(
        "Could not generate an advanced subtraction problem with the requested settings."
    );
}


function generateAdvancedSubtractionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateAdvancedSubtractionProblem(settings)
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
    "number-writing": {
        generate(settings, count) {
            return generateNumberWritingProblems(
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
    },
    "number-comparison": {
        generate(settings, count) {
            return generateNumberComparisonProblems(
                settings,
                count
            );
        }
    },
    "place-value": {
        generate(settings, count) {
            return generatePlaceValueProblems(
                settings,
                count
            );
        }
    },
    "expanded-form": {
        generate(settings, count) {
            return generateExpandedFormProblems(
                settings,
                count
            );
        }
    },
    "number-groups": {
        generate(settings, count) {
            return generateNumberGroupsProblems(
                settings,
                count
            );
        }
    },
    "advanced-addition": {
        generate(settings, count) {
            return generateAdvancedAdditionProblems(
                settings,
                count
            );
        }
    },
    "advanced-subtraction": {
        generate(settings, count) {
            return generateAdvancedSubtractionProblems(
                settings,
                count
            );
        }
    }


};