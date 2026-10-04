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
        prompt: tf("generators.numberReading.prompt", {
            number
        }),
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
            ? tf("generators.predecessorSuccessor.predecessor", {
                number
            })
            : tf("generators.predecessorSuccessor.successor", {
                number
            }),

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
            ? t("generators.evenOdd.even")
            : t("generators.evenOdd.odd");

    return {
        prompt: tf("generators.evenOdd.prompt", {
            number
        }),

        answer,

        choices: [
            t("generators.evenOdd.even"),
            t("generators.evenOdd.odd")
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
            prompt: `${left} + ${right}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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

        const canDecompose =
            left % 10 !== 0 &&
            Math.floor(left / 10) !== Math.floor((left - right) / 10);

        const explanation =
            canDecompose
                ? {
                    type: "subtraction-decomposition",
                    start: left,
                    amount: right
                }
                : {
                    type: "counting-back",
                    start: left,
                    amount: right
                };

        return {
            left,
            right,
            operator: "−",
            prompt: `${left} − ${right}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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
        prompt: `${table} × ${multiplier}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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
        prompt: `${dividend} ÷ ${divisor}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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
        prompt: tf("generators.romanSymbol.prompt", {
            symbol: selected.symbol
        }),

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
        prompt: `${roman}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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
        prompt: `${roman}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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
        prompt: tf("generators.arabicToRoman.prompt", {
            number
        }),
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
        prompt: tf("generators.placeValue.prompt", {
            number: highlightedNumber
        }),
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
        prompt: `${parts
            .map(part => part.toLocaleString())
            .join(" + ")}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,

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
            tf("generators.numberGroups.smallest", {
                group: getGroupName(groupNumber, groupSize)
            });

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
            tf("generators.numberGroups.largest", {
                group: getGroupName(groupNumber, groupSize)
            });

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
            tf("generators.numberGroups.whichGroup", {
                number: number.toLocaleString()
            });

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
            prompt: `${top.toLocaleString()} + ${bottom.toLocaleString()}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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
            prompt: `${top.toLocaleString()} − ${bottom.toLocaleString()}&nbsp;<span>=</span>
                <span class="question-mark">?</span>`,
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


function generateEquationEqualityProblem(settings) {
    const equationChoiceProbability =
        settings.equationChoiceProbability !== undefined
            ? settings.equationChoiceProbability
            : 0.5;

    const isWhichIsTrue = Math.random() < equationChoiceProbability;

    return isWhichIsTrue
        ? generateWhichIsTrueProblem(settings)
        : generateIsTrueProblem(settings);
}

function generateEquationEqualityProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateEquationEqualityProblem(settings)
        );
    }

    return problems;
}
function generateVariableSubstitutionProblem(settings) {
    const operations = (settings.operations && settings.operations.length)
        ? settings.operations
        : ["addition"];

    const operation = operations[Math.floor(Math.random() * operations.length)];
    const variableFirst = Math.random() < 0.5;
    const variableName = pickVariableName();
    const symbol = getOperationSymbol(operation);

    const { value, other, result } = buildCase(operation, variableFirst);

    const expression = variableFirst
        ? `${variableName} ${symbol} ${other}`
        : `${other} ${symbol} ${variableName}`;

    return {
        prompt: tf("generators.variableSubstitution.evaluate", {
            variable: variableName,
            value,
            expression
        }),

        answer: result,

        explanation: {
            type: "variable-substitution",
            variable: variableName,
            value,
            operation,
            expression,
            answer: result
        }
    };
}

function generateVariableSubstitutionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateVariableSubstitutionProblem(settings)
        );
    }

    return problems;
}
function generateEquationProblem(settings) {

    const variable =
        generateVariable(settings);

    const solution =
        generateSolution(settings);

    const transformations =
        generateTransformations(
            solution,
            settings
        );

    // const steps =
    //     buildSteps(
    //         variable,
    //         solution,
    //         transformations
    //     );
    const steps = buildSteps(transformations);
    // const explanation =
    //     buildExplanation(
    //         variable,
    //         solution,
    //         transformations
    //     );
    const explanation = {};

    return {
        prompt: steps[0].equation,
        steps,
        answer: solution,
        explanation
    };
}
function generateEquationProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateEquationProblem(settings)
        );
    }

    return problems;
}
function generateGeometryBasicsProblem(settings) {
    const types = [
        "point",
        "segment",
        "line",
        "ray"
    ];

    const type =
        types[
            Math.floor(
                Math.random() * types.length
            )
        ];

    switch (type) {
        case "point":
            return generatePointProblem();

        case "segment":
            return generateSegmentProblem();

        case "line":
            return generateLineProblem();

        case "ray":
            return generateRayProblem();
    }
}
function generateGeometryBasicsProblems(
    settings,
    count
) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateGeometryBasicsProblem(
                settings
            )
        );
    }

    return problems;
}

function generateShapePartsProblem(settings) {

    const types = [
        "countSides",
        "countVertices",
        "countAngles",
        "identifyMarkedPart",
        "nameMarkedAngle"
    ];

    const type =
        types[
            Math.floor(
                Math.random() * types.length
            )
        ];

    const shape = generateShape();

    switch (type) {

        case "countSides":
            return generateSideCountProblem(shape);

        case "countVertices":
            return generateVertexCountProblem(shape);

        case "countAngles":
            return generateAngleCountProblem(shape);

        case "identifyMarkedPart":
            return generateMarkedPartProblem(shape);

        case "nameMarkedAngle":
            return generateMarkedAngleNameProblem(shape);
    }
}
function generateShapePartsProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateShapePartsProblem(settings)
        );
    }

    return problems;
}
function generateAngleProblem(settings) {

    const types = [
        "acute",
        "right",
        "obtuse",
        "straight"
    ];

    const type =
        types[
            Math.floor(
                Math.random() * types.length
            )
        ];


    let degrees;

    switch (type) {

        case "acute":
            degrees =
                20 +
                Math.random() * (89 - 20);
            break;

        case "right":
            degrees = 90;
            break;

        case "obtuse":
            degrees =
                91 +
                Math.random() * (179 - 91);
            break;

        case "straight":
            degrees = 180;
            break;
    }


    /*
     * Show the measurement only when the angle
     * is close to 90° or 180°.
     */
    const showMeasurement =
        (degrees >= 80 && degrees <= 100) ||
        (degrees >= 170 && degrees <= 180);


    /*
     * Pick a random orientation.
     *
     * SVG uses radians for trigonometric functions,
     * so convert the angle to radians here.
     */
    const rotation =
        Math.random() * Math.PI * 2;


    const radians =
        degrees * Math.PI / 180;


    const length = 2;


    const vertex = {
        id: "B",
        x: 4,
        y: 3
    };


    /*
     * The first ray points in the random direction.
     */
    const pointA = {
        id: "A",
        x:
            vertex.x +
            Math.cos(rotation) * length,
        y:
            vertex.y +
            Math.sin(rotation) * length
    };


    /*
     * The second ray is rotated by the
     * generated angle.
     */
    const pointC = {
        id: "C",
        x:
            vertex.x +
            Math.cos(rotation + radians) * length,
        y:
            vertex.y +
            Math.sin(rotation + radians) * length
    };


    const expression =
        createGeometrySvg({

            width: 360,
            height: 280,
            scale: 45,

            points: [
                {
                    ...pointA,
                    visible: false
                },
                {
                    ...vertex,
                    visible: false
                },
                {
                    ...pointC,
                    visible: false
                }
            ],

            rays: [
                {
                    from: "B",
                    through: "A"
                },
                {
                    from: "B",
                    through: "C"
                }
            ],

            angles: [
                {
                    vertex: "B",
                    from: "A",
                    to: "C",
                    label:
                        showMeasurement
                            ? `${Math.round(degrees)}°`
                            : null
                }
            ]
        });


    const names = {
        acute: "Acute",
        right: "Right",
        obtuse: "Obtuse",
        straight: "Straight"
    };


    return {
        prompt: `
            <p>
                What kind of angle is shown?
            </p>
            <br>
            ${expression}

        `,

        answer:
            names[type],

        choices: [
            "Acute",
            "Right",
            "Obtuse",
            "Straight"
        ],

        explanation: {}
    };
}
function generateAngleProblems(settings, count) {

    const problems = [];

    for (let i = 0; i < count; i++) {

        problems.push(
            generateAngleProblem(settings)
        );
    }

    return problems;
}
function generateAdjacentOppositeSidesProblem(settings) {
    const type = pick([
        "adjacentSide",
        "oppositeSide",
        "adjacentVertex",
        "oppositeVertex"
    ]);

    const letters = randomLetterRun(4);
    const n = letters.length;

    // Shape: orient it so labels go outside, then start at a random corner
    let shape = randomConvexQuadrilateral();
    if (signedArea(shape) * OUTSIDE_LABEL_WINDING < 0) shape.reverse();

    const shift = Math.floor(Math.random() * n);
    shape = [...shape.slice(shift), ...shape.slice(0, shift)];

    const points = shape.map((p, i) => ({
        id: letters[i],
        x: p.x,
        y: p.y,
        label: letters[i]
    }));

    // Side i joins vertex i and vertex i + 1
    const sides = letters.map((letter, i) => letter + letters[(i + 1) % n]);

    const segments = letters.map((letter, i) => ({
        from: letter,
        to: letters[(i + 1) % n],
        label: sides[i]
    }));

    const svg = createGeometrySvg({
        width: 360,
        height: 260,
        scale: 45,
        points,
        segments
    });

    const i = Math.floor(Math.random() * n);
    let question;
    let result;

    switch (type) {
        case "adjacentSide":
            question = `Which pair of sides is adjacent to side ${sides[i]}?`;
            result = adjacentPairChoices(sides, i);
            break;

        case "oppositeSide":
            question = `Which side is opposite to side ${sides[i]}?`;
            result = oppositeChoices(sides, i);
            break;

        case "adjacentVertex":
            question = `Which pair of vertices is adjacent to vertex ${letters[i]}?`;
            result = adjacentPairChoices(letters, i);
            break;

        case "oppositeVertex":
            question = `Which vertex is opposite to vertex ${letters[i]}?`;
            result = oppositeChoices(letters, i);
            break;
    }

    return {
        prompt: `
            <p>
                ${question}
            </p>
            <br>
            ${svg}

        `,
        answer: result.answer,
        choices: result.choices,
        explanation: {}
    };
}
function generateAdjacentOppositeSidesProblems(
    settings,
    count
) {
    const problems = [];

    for (let i = 0; i < count; i++) {

        problems.push(
            generateAdjacentOppositeSidesProblem(
                settings
            )
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
    },
    "equationEquality":{
        generate(settings, count) {
            return generateEquationEqualityProblems(
                settings,
                count
            );
        }
    },
    "variableSubstitution":{
        generate(settings, count) {
            return generateVariableSubstitutionProblems(
                settings,
                count
            );
        }
    },
    "linearEquation":{
        generate(settings, count) {
            return generateEquationProblems(
                settings,
                count
            );
        }
    },
    "geometryBasics":{
        generate(settings, count) {
            return generateGeometryBasicsProblems(
                settings,
                count
            );
        }
    },
    "shapeParts":{
        generate(settings, count) {
            return generateShapePartsProblems(
                settings,
                count
            );
        }
    },
    "angles":{
        generate(settings, count) {
            return generateAngleProblems(
                settings,
                count
            );
        }
    },
    "adjacentOppositeSides":{
        generate(settings, count) {
            return generateAdjacentOppositeSidesProblems(
                settings,
                count
            );
        }
    }
};