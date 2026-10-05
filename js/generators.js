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
function generateLengthUnitsProblem(settings) {

    /* ---------- settings ---------- */

    const MAX_NUMBER = 5000;      // largest number shown anywhere (question or choices)
    const MAX_EXPONENT_GAP = 3;   // units may be at most 10^3 apart (no km <-> mm)

    // exp = power of ten of the unit, measured in mm
    const UNITS = [
        { name: "mm", exp: 0 },
        { name: "cm", exp: 1 },
        { name: "dm", exp: 2 },
        { name: "m",  exp: 3 },
        { name: "km", exp: 6 }
    ];

    /* ---------- number helpers ---------- */

    function cleanNumber(x) {
        return Number(x.toPrecision(12));    // removes float noise like 0.07000000000000001
    }

    // x * 10^power, with no floating-point noise
    function shiftPower(x, power) {
        return cleanNumber(power >= 0 ? x * 10 ** power : x / 10 ** -power);
    }

    // Positive, not above MAX_NUMBER, and at most `maxDecimals` decimal places
    function isNiceNumber(x, maxDecimals) {
        const scaled = cleanNumber(x * 10 ** maxDecimals);
        return x > 0 && x <= MAX_NUMBER && scaled >= 1 && Number.isInteger(scaled);
    }

    // One place to change if you want decimal commas for Serbian
    function formatNumber(x) {
        return String(cleanNumber(x));
    }

    function lengthInMm(number, unit) {
        return shiftPower(number, unit.exp);
    }

    function isAllowedPair(a, b) {
        return a !== b && Math.abs(a.exp - b.exp) <= MAX_EXPONENT_GAP;
    }

    /* ---------- problem setup ---------- */

    function randomConversion() {
        // Pick uniformly from all allowed (source, target) pairs, so rare
        // units like km don't show up more often than they should.
        const pairs = [];
        for (const from of UNITS) {
            for (const to of UNITS) {
                if (isAllowedPair(from, to)) pairs.push([from, to]);
            }
        }

        const [source, target] = pick(pairs);

        // 1 source unit = 10^gap target units
        const gap = source.exp - target.exp;

        // The value is chosen directly so the answer always has at most one
        // decimal place (no rejection loop, no float checks).
        // Converting to a smaller unit: keep the answer under MAX_NUMBER.
        // Converting to a larger unit: use multiples that give clean decimals,
        // e.g. 10, 20, 30 cm -> 0.1, 0.2, 0.3 m.
        const step = gap < 0 ? 10 ** (-gap - 1) : 1;
        const maxValue = gap > 0
            ? Math.min(100, Math.floor(MAX_NUMBER / 10 ** gap))
            : Math.min(MAX_NUMBER, Math.max(100, step * 20));

        const value = step * (1 + Math.floor(Math.random() * Math.floor(maxValue / step)));
        const answer = shiftPower(value, gap);

        return {
            source,
            target,
            gap,
            value,
            answer,
            plausibleUnits: UNITS.filter(unit => isAllowedPair(source, unit))
        };
    }

    /* ---------- decoys ---------- */

    // Each decoy is a typical mistake:
    //   - multiplied instead of divided (or the other way round)
    //   - forgot to convert (same number, new unit)
    //   - decimal point in the wrong place (one or two places off)
    //   - wrong direction AND a slipped decimal point
    // A decoy is rejected if it is too big or too small, has too many
    // decimals, or has the same length as the correct answer or another
    // decoy (50 cm and 500 mm are the same length).
    function makeDecoys(problem, mode) {
        const { target, gap, value, answer, plausibleUnits } = problem;

        const seen = new Set([lengthInMm(answer, target)]);

        const inverted = shiftPower(value, -gap);

        const common = [
            value,
            shiftPower(answer, 1),
            shiftPower(answer, -1)
        ];

        const rarer = [
            shiftPower(answer, 2),
            shiftPower(answer, -2),
            shiftPower(inverted, 1),
            shiftPower(inverted, -1),
            shiftPower(answer, 3),
            shiftPower(answer, -3)
        ];

        shuffle(common);
        shuffle(rarer);

        const decoys = [];

        // The inverted-direction mistake always goes first when it is usable.
        for (const number of [inverted, ...common, ...rarer]) {
            if (decoys.length === 3) break;
            if (!isNiceNumber(number, 2)) continue;

            const length = lengthInMm(number, target);
            if (seen.has(length)) continue;
            seen.add(length);

            if (mode === "conversion") {
                decoys.push(`${formatNumber(number)} ${target.name}`);
                continue;
            }

            // Equivalent-measurement mode: show the wrong length in a random
            // plausible unit, so the student has to convert each choice.
            const units = [...plausibleUnits];
            shuffle(units);

            const unit = units.find(
                u => isNiceNumber(shiftPower(length, -u.exp), 2)
            ) ?? target;

            decoys.push(`${formatNumber(shiftPower(length, -unit.exp))} ${unit.name}`);
        }

        return decoys;
    }

    /* ---------- generator ---------- */

    const mode = Math.random() < 0.7
        ? "conversion"
        : "equivalentMeasurement";

    const problem = randomConversion();
    const { source, target, value, answer } = problem;

    const correctChoice = `${formatNumber(answer)} ${target.name}`;

    const choices = [correctChoice, ...makeDecoys(problem, mode)];
    shuffle(choices);

    const prompt = mode === "conversion"
        ? `
            <p>
                How much is
                <strong>${formatNumber(value)} ${source.name}</strong>
                in ${target.name}?
            </p>
        `
        : `
            <p>
                Which measurement is equal to
                <strong>${formatNumber(value)} ${source.name}</strong>?
            </p>
        `;

    return {
        prompt,
        answer: correctChoice,
        choices,
        explanation: {}
    };
}
function generateLengthUnitsProblems(
    settings,
    count
) {
    const problems = [];

    for (let i = 0; i < count; i++) {

        problems.push(
            generateLengthUnitsProblem(
                settings
            )
        );
    }

    return problems;
}
function generateParallelPerpendicularLinesProblem(settings) {

    const types = [
        "parallel",
        "perpendicular",
        "neither"
    ];


    const type =
        types[
            Math.floor(
                Math.random() * types.length
            )
        ];


    const width = 360;
    const height = 280;
    const scale = 45;


    const center = {
        x: 4,
        y: 3
    };


    /*
     * Keep the points used to define the lines
     * safely inside the SVG.
     *
     * The lines themselves are infinite, so these
     * points only need to define their direction.
     */
    const halfLength = 2;


    /*
     * Direction of the first line.
     */
    const angle1 =
        Math.random() * Math.PI;


    let angle2;


    switch (type) {

        case "parallel":

            angle2 = angle1;

            break;


        case "perpendicular":

            angle2 =
                angle1 +
                Math.PI / 2;

            break;


        case "neither": {

            /*
             * The smaller angle must be greater
             * than 20° and less than 90°.
             */
            const difference =
                20 +
                Math.random() * 70;

            angle2 =
                angle1 +
                difference *
                    Math.PI / 180;

            break;
        }
    }


    /*
     * Direction vectors.
     */
    const direction1 = {
        x: Math.cos(angle1),
        y: Math.sin(angle1)
    };


    const direction2 = {
        x: Math.cos(angle2),
        y: Math.sin(angle2)
    };


    let points;
    let lines;
    let angles = [];


    if (type === "parallel") {

        /*
         * Move the second line sideways by using
         * a vector perpendicular to the first line.
         */
        const offset = 1.2;


        const normal = {
            x: -Math.sin(angle1),
            y: Math.cos(angle1)
        };


        const secondCenter = {
            x:
                center.x +
                normal.x * offset,

            y:
                center.y +
                normal.y * offset
        };


        points = [
            {
                id: "A",
                x:
                    center.x -
                    direction1.x * halfLength,

                y:
                    center.y -
                    direction1.y * halfLength,

                visible: false
            },

            {
                id: "B",
                x:
                    center.x +
                    direction1.x * halfLength,

                y:
                    center.y +
                    direction1.y * halfLength,

                visible: false
            },

            {
                id: "C",
                x:
                    secondCenter.x -
                    direction2.x * halfLength,

                y:
                    secondCenter.y -
                    direction2.y * halfLength,

                visible: false
            },

            {
                id: "D",
                x:
                    secondCenter.x +
                    direction2.x * halfLength,

                y:
                    secondCenter.y +
                    direction2.y * halfLength,

                visible: false
            }
        ];


        lines = [
            {
                through: ["A", "B"]
            },

            {
                through: ["C", "D"]
            }
        ];

    } else {

        /*
         * Both lines pass through the center,
         * guaranteeing that they intersect inside
         * the image.
         */
        points = [
            {
                id: "A",
                x:
                    center.x -
                    direction1.x * halfLength,

                y:
                    center.y -
                    direction1.y * halfLength,

                visible: false
            },

            {
                id: "B",
                x:
                    center.x +
                    direction1.x * halfLength,

                y:
                    center.y +
                    direction1.y * halfLength,

                visible: false
            },

            {
                id: "C",
                x:
                    center.x -
                    direction2.x * halfLength,

                y:
                    center.y -
                    direction2.y * halfLength,

                visible: false
            },

            {
                id: "D",
                x:
                    center.x +
                    direction2.x * halfLength,

                y:
                    center.y +
                    direction2.y * halfLength,

                visible: false
            },

            {
                id: "O",
                x: center.x,
                y: center.y,
                visible: false
            }
        ];


        lines = [
            {
                through: ["A", "B"]
            },

            {
                through: ["C", "D"]
            }
        ];


        /*
         * Calculate the smaller angle between
         * the two lines.
         */
        let difference =
            Math.abs(angle2 - angle1) %
            Math.PI;


        if (difference > Math.PI / 2) {
            difference =
                Math.PI - difference;
        }


        const degrees =
            difference *
            180 /
            Math.PI;


        /*
         * Show the measurement when the smaller
         * angle is close to 90°.
         */
        if (
            degrees >= 75 &&
            degrees <= 90
        ) {

            angles = [
                {
                    vertex: "O",
                    from: "A",
                    to: "C",
                    label:
                        `${Math.round(degrees)}°`
                }
            ];
        }
    }


    const expression =
        createGeometrySvg({
            width,
            height,
            scale,
            points,
            lines,
            angles
        });


    const names = {
        parallel: "Parallel",
        perpendicular: "Perpendicular",
        neither: "Neither"
    };


    return {

        prompt: `
            <p>
                What is the relationship between
                these two lines?
            </p>
            <br>
            ${expression}

        `,

        answer:
            names[type],

        choices: [
            "Parallel",
            "Perpendicular",
            "Neither"
        ],

        explanation: {}
    };
}
function generateParallelPerpendicularLinesProblems(
    settings,
    count
) {
    const problems = [];

    for (let i = 0; i < count; i++) {

        problems.push(
            generateParallelPerpendicularLinesProblem(
                settings
            )
        );
    }

    return problems;
}
function generateTriangleProblem(settings) {

    const types = [
        "equilateral",
        "isosceles",
        "scalene"
    ];


    const type =
        types[
            Math.floor(
                Math.random() * types.length
            )
        ];


    const letterPool = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h"
    ];


    /*
     * Shuffle the letter pool and take letters
     * from the beginning as needed.
     */
    for (
        let i = letterPool.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            letterPool[i],
            letterPool[j]
        ] = [
            letterPool[j],
            letterPool[i]
        ];
    }


    let sideLabels;
    let points;


    switch (type) {

        case "equilateral": {

            /*
            * Equilateral triangle.
            *
            * All three sides have the same
            * length.
            */
            const side = 4;

            const height =
                side * Math.sqrt(3) / 2;

            const baseY = 4;


            points = [
                {
                    id: "A",
                    x: 1,
                    y: baseY
                },
                {
                    id: "B",
                    x: 5,
                    y: baseY
                },
                {
                    id: "C",
                    x: 3,
                    y: baseY - height
                }
            ];


            const letter =
                letterPool[0];


            sideLabels = [
                letter,
                letter,
                letter
            ];

            break;
        }


        case "isosceles": {

            /*
             * Two equal sides.
             *
             * The two sides from C to A/B
             * are equal.
             */
            const halfBase = 2;

            const height =
                2.5 +
                Math.random() * 1;


            points = [
                {
                    id: "A",
                    x: 1,
                    y: 4
                },
                {
                    id: "B",
                    x: 5,
                    y: 4
                },
                {
                    id: "C",
                    x: 3,
                    y:
                        4 - height
                }
            ];


            const equalLetter =
                letterPool[0];

            const differentLetter =
                letterPool[1];


            sideLabels = [
                differentLetter,
                equalLetter,
                equalLetter
            ];

            break;
        }


        case "scalene": {

            /*
             * Three different side lengths.
             *
             * These coordinates give three
             * different side lengths while
             * keeping the triangle visually
             * reasonable.
             */
            points = [
                {
                    id: "A",
                    x: 1,
                    y: 4
                },
                {
                    id: "B",
                    x: 5,
                    y: 4
                },
                {
                    id: "C",
                    x:
                        3.8 +
                        Math.random() * 0.5,
                    y:
                        1 +
                        Math.random() * 0.7
                }
            ];


            sideLabels = [
                letterPool[0],
                letterPool[1],
                letterPool[2]
            ];

            break;
        }
    }


    /*
     * The vertices are deliberately not
     * displayed or labelled.
     */
    const expression =
        createGeometrySvg({

            width: 300,
            height: 260,
            scale: 50,

            points: points.map(point => ({
                ...point,
                visible: false
            })),

            segments: [
                {
                    from: "A",
                    to: "B",
                    label: sideLabels[0]
                },
                {
                    from: "B",
                    to: "C",
                    label: sideLabels[1]
                },
                {
                    from: "C",
                    to: "A",
                    label: sideLabels[2]
                }
            ]
        });


    const names = {
        equilateral: "Equilateral",
        isosceles: "Isosceles",
        scalene: "Scalene"
    };


    return {
        prompt: `
            ${expression}

            <p>
                What type of triangle is shown?
            </p>
        `,

        answer:
            names[type],

        choices: [
            "Equilateral",
            "Isosceles",
            "Scalene"
        ],

        explanation: {}
    };
}
function generateTriangleProblems(settings, count) {

    const problems = [];

    for (let i = 0; i < count; i++) {

        problems.push(
            generateTriangleProblem(settings)
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
    },
    "lengthUnits":{
        generate(settings, count) {
            return generateLengthUnitsProblems(
                settings,
                count
            );
        }
    },
    "parallelPerpendicularLines":{
        generate(settings, count) {
            return generateParallelPerpendicularLinesProblems(
                settings,
                count
            );
        }
    },
    "triangles":{
        generate(settings, count) {
            return generateTriangleProblems(
                settings,
                count
            );
        }
    }
};