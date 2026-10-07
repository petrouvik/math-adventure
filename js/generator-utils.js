

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
const ROMAN_NUMERAL_SYMBOLS = [
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


function getGroupType(groupSize) {
    if (groupSize === 10) {
        return "ten";
    }

    if (groupSize === 100) {
        return "hundred";
    }

    return "thousand";
}


function getOrdinalSuffix(number) {
    if (
        number % 100 >= 11 &&
        number % 100 <= 13
    ) {
        return "th";
    }

    switch (number % 10) {
        case 1:
            return "st";

        case 2:
            return "nd";

        case 3:
            return "rd";

        default:
            return "th";
    }
}


function getPlaceName(position) {
    const places =
        getLanguage() === "sr"
            ? [
                "jedinice",
                "desetice",
                "stotine",
                "hiljade",
                "desetine hiljada",
                "stotine hiljada",
                "milioni"
            ]
            : [
                "ones",
                "tens",
                "hundreds",
                "thousands",
                "ten-thousands",
                "hundred-thousands",
                "millions"
            ];

    return places[position] ||
        (getLanguage() === "sr"
            ? "sledeće"
            : "next");
}


function getAdditionPlaceName(position) {
    return getPlaceName(position);
}


function getSubtractionPlaceName(position) {
    return getPlaceName(position);
}
function computeCarries(top, bottom) {
    const topStr = String(top);
    const bottomStr = String(bottom);
    const maxLen = Math.max(topStr.length, bottomStr.length);
    const topPadded = topStr.padStart(maxLen, "0");
    const bottomPadded = bottomStr.padStart(maxLen, "0");

    const carries = [];
    let carry = 0;

    // carries[0] = carry generated by the ones column (shown above tens),
    // carries[1] = carry generated by the tens column (shown above hundreds), etc.
    for (let i = maxLen - 1; i >= 0; i--) {
        const sum = Number(topPadded[i]) + Number(bottomPadded[i]) + carry;
        carry = sum >= 10 ? 1 : 0;
        carries.push(carry);
    }

    return carries;
}
function computeBorrows(top, bottom) {

    const topStr = String(top);

    const bottomStr = String(bottom);

    const maxLen =
        Math.max(
            topStr.length,
            bottomStr.length
        );

    const topPadded =
        topStr.padStart(maxLen, "0");

    const bottomPadded =
        bottomStr.padStart(maxLen, "0");

    const borrows = [];

    let borrow = 0;

    // borrows[0] = borrow generated by the ones column,
    // borrows[1] = borrow generated by the tens column,
    // borrows[2] = borrow generated by the hundreds column, etc.

    for (let i = maxLen - 1; i >= 0; i--) {

        const topDigit =
            Number(topPadded[i]);

        const bottomDigit =
            Number(bottomPadded[i]);

        const difference =
            topDigit - borrow - bottomDigit;

        borrow =
            difference < 0 ? 1 : 0;

        borrows.push(borrow);
    }

    return borrows;
}

function numberToWords(n) {
    if (getLanguage() === "sr") {
        return numberToWordsSr(n);
    }

    return numberToWordsEn(n);
}


function numberToWordsEn(n) {
    const ones = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen",
        "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty",
        "ninety"
    ];

    function chunk(n) {
        if (n < 20) {
            return ones[n];
        }

        if (n < 100) {
            return (
                tens[Math.floor(n / 10)] +
                (n % 10
                    ? "-" + ones[n % 10]
                    : "")
            );
        }

        return (
            ones[Math.floor(n / 100)] +
            " hundred" +
            (n % 100
                ? " " + chunk(n % 100)
                : "")
        );
    }

    if (n === 0) {
        return "zero";
    }

    const scales = [
        "",
        " thousand",
        " million",
        " billion"
    ];

    let words = "";
    let scaleIndex = 0;

    while (n > 0) {
        const part = n % 1000;

        if (part !== 0) {
            words =
                chunk(part) +
                scales[scaleIndex] +
                (words
                    ? " " + words
                    : "");
        }

        n = Math.floor(n / 1000);
        scaleIndex++;
    }

    return words;
}


/**
 * numberToWordsSr(n)
 * -------------------
 * Converts an integer into Serbian words, with correct grammatical
 * agreement for the "magnitude nouns" hiljada (thousand), milion
 * (million) and milijarda (billion).
 *
 * WHY THIS IS TRICKIER THAN A FLAT LOOKUP TABLE
 * ----------------------------------------------
 * 1. Gender agreement: "jedan" (1) and "dva" (2) are the only cardinal
 *    numbers that inflect for gender in modern standard Serbian.
 *      - milion is masculine  -> jedan, dva   (unchanged)
 *      - hiljada is feminine  -> jedna, dve
 *      - milijarda is feminine -> jedna, dve
 *    ("tri", "četiri", "pet"... do NOT change with gender.)
 *
 * 2. Noun-form agreement (the Slavic "paucal" pattern). The magnitude
 *    noun itself takes a different form depending on the count:
 *      - count ends in 1, but count % 100 != 11   -> singular form
 *      - count ends in 2-4, but count % 100 not in 12-14 -> paucal form
 *      - everything else (0, 5-9, and 11-19)      -> plural/genitive form
 *
 *    hiljada:   hiljada / hiljade / hiljada   (irregular: gen. pl. looks
 *               like nom. sg. - "pet hiljada", not "pet hiljadi")
 *    milion:    milion  / miliona / miliona
 *    milijarda: milijarda / milijarde / milijardi
 *
 * 3. Bare ("accusative-as-amount") form for an exact count of 1.
 *    hiljada, milion and milijarda are regular nouns, and Serbian uses
 *    the accusative singular adverbially to state "exactly one of
 *    this magnitude", the same way it does for "sto" (hundred):
 *      1 000           -> "hiljadu"   (not "jedna hiljada")
 *      1 000 000       -> "milion"    (not "jedan milion";
 *                          accusative sg. of a masc. inanimate noun
 *                          happens to look like the nominative)
 *      1 000 000 000   -> "milijardu" (not "jedna milijarda")
 *    This applies whenever that magnitude's *group* equals 1, regardless
 *    of the remaining digits (compare: the year 1984 is "hiljadu
 *    devetsto osamdeset četvrta", not "jedna hiljada...").
 *
 * Supported range: 0 to 999,999,999,999 (i.e. up to "999 milijardi
 * 999 miliona 999 hiljada 999").
 */
function numberToWordsSr(n) {
    if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n)) {
        throw new TypeError('numberToWordsSr expects an integer');
    }
    if (n < 0) {
        return 'minus ' + numberToWordsSr(-n);
    }
    const MAX = 999999999999;
    if (n > MAX) {
        throw new RangeError(`numberToWordsSr only supports values up to ${MAX}`);
    }
    if (n === 0) return 'nula';

    // --- word tables -----------------------------------------------------

    const ONES_M = [
        'nula', 'jedan', 'dva', 'tri', 'četiri', 'pet', 'šest', 'sedam', 'osam',
        'devet', 'deset', 'jedanaest', 'dvanaest', 'trinaest', 'četrnaest',
        'petnaest', 'šesnaest', 'sedamnaest', 'osamnaest', 'devetnaest'
    ];
    // Only "jedan" and "dva" have distinct feminine forms; everything
    // else (including the teens, which never inflect for gender) is shared.
    const ONES_F = ONES_M.slice();
    ONES_F[1] = 'jedna';
    ONES_F[2] = 'dve';

    const TENS = [
        '', '', 'dvadeset', 'trideset', 'četrdeset', 'pedeset', 'šezdeset',
        'sedamdeset', 'osamdeset', 'devedeset'
    ];

    // These are fixed compound words in Serbian (not "tri sto") and never
    // inflect, regardless of the gender of whatever they end up modifying.
    const HUNDREDS = [
        '', 'sto', 'dvesta', 'trista', 'četiristo', 'petsto', 'šeststo',
        'sedamsto', 'osamsto', 'devetsto'
    ];

    // gender: 'm' (masculine) or 'f' (feminine) - selects jedan/jedna, dva/dve
    function chunkWords(num, gender) {
        const ones = gender === 'f' ? ONES_F : ONES_M;
        const parts = [];
        let r = num;

        if (r >= 100) {
            parts.push(HUNDREDS[Math.floor(r / 100)]);
            r %= 100;
        }
        if (r >= 20) {
            parts.push(TENS[Math.floor(r / 10)]);
            r %= 10;
        }
        if (r > 0) {
            parts.push(ones[r]);
        }
        return parts.join(' ');
    }

    // Returns 0 (singular), 1 (paucal), or 2 (plural/genitive) per the
    // Slavic agreement pattern described above.
    function formIndex(count) {
        const lastTwo = count % 100;
        if (lastTwo >= 11 && lastTwo <= 19) return 2; // 11-19 always "plural"
        const last = count % 10;
        if (last === 1) return 0;
        if (last >= 2 && last <= 4) return 1;
        return 2;
    }

    // Each magnitude: its value, grammatical gender, the three noun forms
    // ([singular, paucal, plural]), and the special bare word used when
    // the count is exactly 1.
    const MAGNITUDES = [
        { value: 1000000000, gender: 'f', forms: ['milijarda', 'milijarde', 'milijardi'], bareOne: 'milijardu' },
        { value: 1000000, gender: 'm', forms: ['milion', 'miliona', 'miliona'], bareOne: 'milion' },
        { value: 1000, gender: 'f', forms: ['hiljada', 'hiljade', 'hiljada'], bareOne: 'hiljadu' }
    ];

    const parts = [];
    let remainder = n;

    for (const mag of MAGNITUDES) {
        const count = Math.floor(remainder / mag.value);
        remainder %= mag.value;
        if (count === 0) continue;

        if (count === 1) {
            parts.push(mag.bareOne);
            continue;
        }

        const fIdx = formIndex(count);
        const noun = mag.forms[fIdx];
        // Gender only ever matters when the chunk actually ends in "jedan"
        // or "dva" (fIdx 0 or 1); in the fIdx===2 band neither ever appears,
        // so the gender choice there is moot.
        const numeralWords = chunkWords(count, fIdx === 2 ? 'm' : mag.gender);
        parts.push(`${numeralWords} ${noun}`);
    }

    if (remainder > 0 || parts.length === 0) {
        parts.push(chunkWords(remainder, 'm'));
    }

    return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function getGroupName(groupNumber, groupSize) {
    if (getLanguage() === "sr") {
        return getGroupNameSr(
            groupNumber,
            groupSize
        );
    }

    return getGroupNameEn(
        groupNumber,
        groupSize
    );
}


function getGroupNameEn(groupNumber, groupSize) {
    const type = getGroupType(groupSize);

    return `${groupNumber}${getOrdinalSuffix(groupNumber)} ${type}`;
}


function getGroupNameSr(groupNumber, groupSize) {
    const ordinal =
        getSerbianOrdinal(groupNumber);

    const type =
        getGroupTypeSr(groupSize);

    return `${ordinal} ${type}`;
}


function getSerbianOrdinal(number) {
    const ordinals = [
        "",
        "prva",
        "druga",
        "treća",
        "četvrta",
        "peta",
        "šesta",
        "sedma",
        "osma",
        "deveta",
        "deseta",
        "jedanaesta",
        "dvanaesta",
        "trinaesta",
        "četrnaesta",
        "petnaesta",
        "šesnaesta",
        "sedamnaesta",
        "osamnaesta",
        "devetnaesta",
        "dvadeseta"
    ];

    return ordinals[number] || `${number}.`;
}


function getGroupTypeSr(groupSize) {
    if (groupSize === 10) {
        return "desetica";
    }

    if (groupSize === 100) {
        return "stotina";
    }

    return "hiljada";
}



// ---------------------------------------------------------------------------
// equationEquality generator
//
// Tests whether students understand that an equation means "both sides have
// the same value". Produces either:
//   - a single equation and asks "Is this equation true?" (true/false choice)
//   - four equations and asks "Which equation is true?" (pick the correct one)
// ---------------------------------------------------------------------------

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getOperationSymbol(op) {
    switch (op) {
        case "addition": return "+";
        case "subtraction": return "-";
        case "multiplication": return "×";
        case "division": return "÷";
        default: return "+";
    }
}

// Builds a valid "x op y" expression with a guaranteed-correct value.
// Always succeeds (no solving involved).
function generateExpressionForOperation(op, bounds) {
    const { min, max } = bounds;

    if (op === "subtraction") {
        // x >= y always, so the result never goes negative.
        const x = randInt(min, max);
        const y = randInt(min, x);
        return { x, y, value: x - y };
    }

    if (op === "multiplication") {
        const x = randInt(min, max);
        const y = randInt(min, max);
        return { x, y, value: x * y };
    }

    if (op === "division") {
        // Build from the answer outward so the result is always an integer.
        const divisorMin = Math.max(min, 1);
        const divisorMax = Math.max(divisorMin, max);
        const y = randInt(divisorMin, divisorMax);
        const quotient = randInt(min, max);
        const x = y * quotient;
        return { x, y, value: quotient };
    }

    // addition (default)
    const x = randInt(min, max);
    const y = randInt(min, max);
    return { x, y, value: x + y };
}

// Builds a valid "x op y" expression whose value equals a specific target.
// May fail (returns null) if no operand pair in range reaches that target.
function generateExpressionForTarget(op, target, bounds, attempts = 25) {
    const { min, max } = bounds;

    if (op === "addition") {
        for (let i = 0; i < attempts; i++) {
            const x = randInt(min, max);
            const y = target - x;
            if (y >= min && y <= max) {
                return { x, y, value: target };
            }
        }
        return null;
    }

    if (op === "subtraction") {
        if (target < 0) return null;

        for (let i = 0; i < attempts; i++) {
            const y = randInt(min, max);
            const x = target + y;
            if (x >= min && x <= max) {
                return { x, y, value: target };
            }
        }
        return null;
    }

    if (op === "multiplication") {
        if (target === 0) {
            if (min <= 0 && 0 <= max) {
                return Math.random() < 0.5
                    ? { x: 0, y: randInt(min, max), value: 0 }
                    : { x: randInt(min, max), y: 0, value: 0 };
            }
            return null;
        }

        const candidates = [];
        for (let x = min; x <= max; x++) {
            if (x === 0) continue;
            if (target % x === 0) {
                const y = target / x;
                if (y >= min && y <= max) {
                    candidates.push({ x, y, value: target });
                }
            }
        }
        if (candidates.length === 0) return null;
        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    if (op === "division") {
        const divisorMin = Math.max(min, 1);
        const divisorMax = Math.max(divisorMin, max);

        if (target === 0) {
            if (min <= 0 && 0 <= max) {
                return { x: 0, y: randInt(divisorMin, divisorMax), value: 0 };
            }
            return null;
        }

        const upperBound = Math.max(max * max, max);

        for (let i = 0; i < attempts; i++) {
            const y = randInt(divisorMin, divisorMax);
            const x = target * y;
            if (x >= min && x <= upperBound) {
                return { x, y, value: target };
            }
        }
        return null;
    }

    return null;
}

// Picks a value different from `value`, never negative, close enough to
// read as a plausible near-miss rather than an obviously wrong number.
function pickDifferentTarget(value, bounds) {
    const offsets = shuffle([-3, -2, -1, 1, 2, 3]);

    for (const offset of offsets) {
        const candidate = value + offset;
        if (candidate >= 0 && candidate !== value) {
            return candidate;
        }
    }

    return value + 1;
}

// Generates one equation (one of the three forms), true or false as
// requested. forceIsTrue can be true, false, or omitted for random.
function generateEquation(settings, forceIsTrue) {
    const operations = (settings.operations && settings.operations.length)
        ? settings.operations
        : ["addition"];

    const bounds = {
        min: settings.min !== undefined ? settings.min : 1,
        max: settings.max !== undefined ? settings.max : 10
    };

    const isTrue = forceIsTrue !== undefined
        ? forceIsTrue
        : Math.random() < 0.5;

    const form = 1 + Math.floor(Math.random() * 3);

    const op1 = operations[Math.floor(Math.random() * operations.length)];
    const leftExpr = generateExpressionForOperation(op1, bounds);
    const sym1 = getOperationSymbol(op1);

    const target = isTrue
        ? leftExpr.value
        : pickDifferentTarget(leftExpr.value, bounds);

    if (form === 3) {
        const op2 = operations[Math.floor(Math.random() * operations.length)];
        const rightExpr = generateExpressionForTarget(op2, target, bounds);

        if (rightExpr) {
            const sym2 = getOperationSymbol(op2);
            const equationString =
                `${leftExpr.x} ${sym1} ${leftExpr.y} = ${rightExpr.x} ${sym2} ${rightExpr.y}`;

            return { equationString, isTrue, form: 3 };
        }
        // Target wasn't reachable with op2 in range — fall back to form 1.
    }

    if (form === 2) {
        const equationString = `${target} = ${leftExpr.x} ${sym1} ${leftExpr.y}`;
        return { equationString, isTrue, form: 2 };
    }

    const equationString = `${leftExpr.x} ${sym1} ${leftExpr.y} = ${target}`;
    return { equationString, isTrue, form: 1 };
}

function generateIsTrueProblem(settings) {
    const equation = generateEquation(settings);

    const trueText =
        t("generators.equationEquality.true");

    const falseText =
        t("generators.equationEquality.false");

    return {
        prompt: tf("generators.equationEquality.isTrue", {
            equation: equation.equationString
        }),

        choices: [
            trueText,
            falseText
        ],

        answer: equation.isTrue
            ? trueText
            : falseText,

        explanation: {
            type: "equation-equality-is-true",
            equation: equation.equationString,
            isTrue: equation.isTrue,
            form: equation.form
        }
    };
}

function generateWhichIsTrueProblem(settings) {
    const trueEquation = generateEquation(settings, true);

    const equations = [trueEquation];
    const usedStrings = new Set([trueEquation.equationString]);

    let attempts = 0;
    while (equations.length < 4 && attempts < 50) {
        attempts++;
        const falseEquation = generateEquation(settings, false);

        if (!usedStrings.has(falseEquation.equationString)) {
            usedStrings.add(falseEquation.equationString);
            equations.push(falseEquation);
        }
    }

    // Extremely unlikely fallback so we never infinite-loop.
    while (equations.length < 4) {
        equations.push(generateEquation(settings, false));
    }

    shuffle(equations);

    return {
        prompt: t("generators.equationEquality.whichIsTrue"),

        choices: equations.map((equation) => equation.equationString),

        answer: trueEquation.equationString,

        explanation: {
            type: "equation-equality-which-is-true",
            equations: equations.map((equation) => ({
                equation: equation.equationString,
                isTrue: equation.isTrue
            })),
            answer: trueEquation.equationString
        }
    };
}

// ---------------------------------------------------------------------------
// variableSubstitution generator
//
// Practices substituting a known variable's value into a two-operand
// expression and evaluating the result, e.g. "a = 4, a + 2 = ?" -> 6.
// Uses the existing "number-input" interaction (prompt / answer / explanation).
// ---------------------------------------------------------------------------

const VARIABLE_NAMES = ["a", "b", "c", "d", "e", "k", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"];


function pickVariableName() {
    return VARIABLE_NAMES[Math.floor(Math.random() * VARIABLE_NAMES.length)];
}

// Each case builder returns { value, other, result } such that the
// expression is guaranteed valid (non-negative, integer division) for the
// requested variable position. Values are built from the answer outward
// rather than generated-then-checked, so there is no retry logic needed.

function buildAdditionCase() {
    const value = randInt(1, 10);
    const other = randInt(1, 10);
    return { value, other, result: value + other };
}

function buildSubtractionCase(variableFirst) {
    if (variableFirst) {
        // variable - other  =>  other must be <= value
        const value = randInt(2, 12);
        const other = randInt(1, value);
        return { value, other, result: value - other };
    }

    // other - variable  =>  other must be >= value
    const value = randInt(1, 10);
    const other = randInt(value, value + 9);
    return { value, other, result: other - value };
}

function buildMultiplicationCase() {
    const value = randInt(1, 9);
    const other = randInt(1, 9);
    return { value, other, result: value * other };
}

function buildDivisionCase(variableFirst) {
    if (variableFirst) {
        // variable ÷ other  =>  other must divide value evenly
        const other = randInt(2, 9);
        const quotient = randInt(1, 9);
        const value = other * quotient;
        return { value, other, result: quotient };
    }

    // other ÷ variable  =>  variable must divide other evenly
    const value = randInt(2, 9);
    const quotient = randInt(1, 9);
    const other = value * quotient;
    return { value, other, result: quotient };
}

function buildCase(operation, variableFirst) {
    if (operation === "subtraction") return buildSubtractionCase(variableFirst);
    if (operation === "multiplication") return buildMultiplicationCase();
    if (operation === "division") return buildDivisionCase(variableFirst);
    return buildAdditionCase();
}


//-------------------------------------
// EQUATION STEP
//-------------------------------------

function generateVariable(settings) {
    return "x";
}

function generateSolution(settings) {
    const min = settings.minSolution ?? 1;
    const max = settings.maxSolution ?? 10;

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}

function generateTransformations(solution, settings) {

    const transformations = [];
    let currentValue = solution;

    for (let i = 0; i < settings.operationCount; i++) {

        const transformation =
            generateTransformation(
                currentValue,
                settings
            );

        transformations.push(transformation);

        currentValue =
            transformation.result;
    }

    return transformations;
}
function generateTransformation(currentValue, settings) {
    const minOperand = settings.minOperand ?? 1;
    const maxOperand = settings.maxOperand ?? 10;

    for (let attempt = 0; attempt < 100; attempt++) {
        const t = tryGenerateTransformation(currentValue, settings);

        const isAdditive =
            t.operation === "addition" || t.operation === "subtraction";

        const isTrivial = t.operand === (isAdditive ? 0 : 1);

        const valid =
            Number.isInteger(t.operand) &&
            t.operand >= minOperand &&
            t.operand <= maxOperand &&
            Number.isInteger(t.result) &&
            t.result > 0 &&
            !isTrivial;

        if (valid) return t;
    }

    throw new Error(
        `No valid transformation for value ${currentValue} ` +
        `with operations ${settings.operations.join(", ")}`
    );
}
function tryGenerateTransformation(currentValue, settings) {

    const operation =
        settings.operations[
        Math.floor(
            Math.random() *
            settings.operations.length
        )
        ];

    const side =
        Math.random() < 0.5
            ? "left"
            : "right";

    const minOperand =
        settings.minOperand ?? 1;

    const maxOperand =
        settings.maxOperand ?? 10;

    let operand;
    let result;

    switch (operation) {

        case "addition":
            operand = randomInteger(
                minOperand,
                maxOperand
            );

            result =
                side === "left"
                    ? operand + currentValue
                    : currentValue + operand;

            break;


        case "subtraction":

            if (side === "left") {

                // operand − currentValue > 0

                operand = randomInteger(
                    Math.max(
                        minOperand,
                        currentValue + 1
                    ),
                    maxOperand
                );

                result =
                    operand - currentValue;

            } else {

                // currentValue − operand > 0

                operand = randomInteger(
                    minOperand,
                    Math.min(
                        maxOperand,
                        currentValue - 1
                    )
                );

                result =
                    currentValue - operand;
            }

            break;


        case "multiplication":
            operand = randomInteger(
                minOperand,
                maxOperand
            );

            result =
                currentValue * operand;

            break;


        case "division":

            if (side === "left") {

                // operand ÷ currentValue
                // must produce an integer.

                const multiples = [];

                for (
                    let i = minOperand;
                    i <= maxOperand;
                    i++
                ) {
                    if (i % currentValue === 0) {
                        multiples.push(i);
                    }
                }

                operand =
                    multiples[
                    Math.floor(
                        Math.random() *
                        multiples.length
                    )
                    ];

                result =
                    operand / currentValue;

            } else {

                // currentValue ÷ operand
                // must produce an integer.

                const divisors = [];

                for (
                    let i = minOperand;
                    i <= maxOperand;
                    i++
                ) {
                    if (currentValue % i === 0) {
                        divisors.push(i);
                    }
                }

                operand =
                    divisors[
                    Math.floor(
                        Math.random() *
                        divisors.length
                    )
                    ];

                result =
                    currentValue / operand;
            }

            break;


        default:
            throw new Error(
                `Unknown operation: ${operation}`
            );
    }

    return {
        operation,
        side,
        operand,
        result
    };
}

function randomInteger(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}
// buildSteps.js
//
// Turns a list of transformations (construction order) into student steps by
// undoing them in reverse order. Equations are plain strings; the only
// structured value is a tiny { text, precedence } pair used to place parentheses.

// Display symbols (note the real minus sign, not a hyphen).
const SYMBOL = { addition: "+", subtraction: "−", multiplication: "×", division: "÷" };
// The operation a student applies to both sides to undo each operation.
const INVERSE = { addition: "subtraction", subtraction: "addition", multiplication: "division", division: "multiplication" };
// How tightly an operation binds; ATOM (a number or x) binds tightest.
const PRECEDENCE = { addition: 1, subtraction: 1, multiplication: 2, division: 2 };
const ATOM = 3;

function calculate(operation, a, b) {
    switch (operation) {
        case "addition": return a + b;
        case "subtraction": return a - b;
        case "multiplication": return a * b;
        case "division": return a / b;
        default: throw new Error(`Unknown operation: ${operation}`);
    }
}

// Apply one operation to an expression, adding parentheses only where needed.
// "side" says where the operand goes: left => operand ∘ expression.
// Used both to build the equations and to build intermediate ones like "3 = 1 + x".
function combine(expression, operation, side, operand) {
    const outer = PRECEDENCE[operation];
    const needsParentheses =
        expression.precedence < outer ||
        (expression.precedence === outer && side === "left");
    const inner = needsParentheses ? `(${expression.text})` : expression.text;
    const symbol = SYMBOL[operation];
    return {
        text: side === "left" ? `${operand} ${symbol} ${inner}` : `${inner} ${symbol} ${operand}`,
        precedence: outer
    };
}

// Text of x after the first `count` transformations. Computed on demand for one
// prefix only; nothing is stored, so there is no expression history.
function buildExpression(transformations, count) {
    let expression = { text: "x", precedence: ATOM };
    for (let i = 0; i < count; i++) {
        const { operation, side, operand } = transformations[i];
        expression = combine(expression, operation, side, operand);
    }
    return expression;
}

// How an expression reads inside a choice label: +x, but +(x + 2).
function asTerm(expression) {
    return expression.precedence === ATOM ? expression.text : `(${expression.text})`;
}

// Four choices: both operations of the answer's kind applied to the correct
// operand and to one decoy operand (the first candidate that differs from it).
function buildChoicesOperations(operation, answerTerm, decoyTerms) {
    const decoyTerm = decoyTerms.map(String).find(term => term !== String(answerTerm));
    const kind = Object.keys(PRECEDENCE).filter(op => PRECEDENCE[op] === PRECEDENCE[operation]);
    return [answerTerm, decoyTerm].flatMap(term => kind.map(op => `${SYMBOL[op]}${term}`));
}

// Undoes ONE transformation.
//   transformation : what to undo
//   inner          : the expression underneath it (what remains once it is undone)
//   state          : { value, expressionOnLeft } - the number on the other side,
//                    and which side of "=" currently holds the transformed expression
// Returns { steps, state } where state describes the equation after the undo.
function buildTransformationSteps(transformation, inner, { value, expressionOnLeft }) {
    const { operation, side, operand } = transformation;
    const undo = INVERSE[operation];
    const innerTerm = asTerm(inner);

    // Sides are named by who sat there when this transformation started.
    const join = (startSide, otherSide) =>
        expressionOnLeft ? `${startSide} = ${otherSide}` : `${otherSide} = ${startSide}`;

    const equation = join(combine(inner, operation, side, operand).text, value);

    // n − E and n ÷ E: the expression is the subtrahend/divisor, so it must first
    // be moved with an operation of its own (two steps). Everything else is one step.
    const expressionIsSecondOperand =
        side === "left" && (operation === "subtraction" || operation === "division");

    if (!expressionIsSecondOperand) {
        const newValue = calculate(undo, value, operand);
        return {
            steps: [{
                equation,
                choices: buildChoicesOperations(undo, operand, [value, innerTerm]),
                answer: `${SYMBOL[undo]}${operand}`,
                resultingEquation: join(inner.text, newValue)
            }],
            state: { value: newValue, expressionOnLeft }
        };
    }

    // Step 1: apply `undo` with the whole expression:  n = value ⊕ E
    // Step 2: apply the original operation with the value:  n ⊖ value = E
    const middle = join(operand, combine(inner, undo, "left", value).text);
    const newValue = calculate(operation, operand, value);
    return {
        steps: [
            {
                equation,
                choices: buildChoicesOperations(undo, innerTerm, [value, operand]),
                answer: `${SYMBOL[undo]}${innerTerm}`,
                resultingEquation: middle
            },
            {
                equation: middle,
                choices: buildChoicesOperations(operation, value, [innerTerm, operand]),
                answer: `${SYMBOL[operation]}${value}`,
                resultingEquation: join(newValue, inner.text)
            }
        ],
        state: { value: newValue, expressionOnLeft: !expressionOnLeft }
    };
}

// transformations are in construction order, so they are undone last-to-first.
// The first step's `equation` is the problem prompt.
function buildSteps(transformations) {
    const steps = [];
    let state = { value: transformations[transformations.length - 1].result, expressionOnLeft: true };
    for (let i = transformations.length - 1; i >= 0; i--) {
        const inner = buildExpression(transformations, i);
        const result = buildTransformationSteps(transformations[i], inner, state);
        steps.push(...result.steps);
        state = result.state;
    }
    // Cosmetic: "2 = x" -> "x = 2" (symmetry of =, not a student action).
    steps[steps.length - 1].resultingEquation = `x = ${state.value}`;
    return steps;
}

////////////////
// GEOMETRY
//////////////////////

const POINT_NAMES = ["A", "B", "C", "D"];
const LINE_NAMES = ["l", "k", "m"];
const RAY_NAMES = ["r", "s", "t"];
const SEGMENT_NAMES = ["a", "b", "c", "d"];
const KINDS = ["point", "segment", "line", "ray"];

const DIAGRAM_SIZE = { width: 300, height: 150, scale: 50 };

/* ---------- helpers ---------- */

function pick(items) {
    return items[Math.floor(Math.random() * items.length)];
}

// Random subset without repeats (assumes shuffle() works in place)
function sample(items, count) {
    const copy = [...items];
    shuffle(copy);
    return copy.slice(0, count);
}

// "segment BA" and "segment AB" are the same object, so compare them
// in a canonical form.
function canonical(choice) {
    const [kind, name] = choice.split(" ");
    return kind === "segment" && /^[A-Z]{2}$/.test(name)
        ? `segment ${[...name].sort().join("")}`
        : choice;
}

/* ---------- decoy generation ---------- */

// Makes one random answer of the given kind.
// Cross-kind decoys prefer points that are visible in the diagram,
// which makes them more plausible. Same-kind decoys ("fresh") use any name.
function randomChoice(kind, { visiblePoints = [], fresh = false } = {}) {
    const points = !fresh && visiblePoints.length
        ? visiblePoints
        : POINT_NAMES;

    switch (kind) {
        case "point":
            return `point ${pick(points)}`;

        case "segment":
            return Math.random() < 0.5
                ? `segment ${sample(POINT_NAMES, 2).sort().join("")}`
                : `segment ${pick(SEGMENT_NAMES)}`;

        case "line":
            return `line ${pick(LINE_NAMES)}`;

        case "ray":
            return `ray ${pick(points)}${pick(RAY_NAMES)}`;
    }
}

function buildChoices(kind, answer, { visiblePoints = [], alsoCorrect = [] } = {}) {
    // Anything in here can never appear as a decoy.
    const taken = new Set([answer, ...alsoCorrect].map(canonical));

    function draw(decoyKind, fresh) {
        for (let attempt = 0; attempt < 50; attempt++) {
            const candidate = randomChoice(decoyKind, { visiblePoints, fresh });
            const key = canonical(candidate);

            if (!taken.has(key)) {
                taken.add(key);
                return candidate;
            }
        }
        return null;
    }

    const otherKinds = sample(KINDS.filter(k => k !== kind), 2);

    const decoys = [
        draw(kind, true),                       // same type, wrong name
        ...otherKinds.map(k => draw(k, false))  // different types
    ].filter(Boolean);

    const choices = [answer, ...decoys];
    shuffle(choices);
    return choices;
}

function buildProblem({ diagram, kind, answer, visiblePoints, alsoCorrect }) {
    const svg = createGeometrySvg({ ...DIAGRAM_SIZE, ...diagram });

    return {
        prompt: `What is shown in the diagram?<br>${svg}`,
        answer,
        choices: buildChoices(kind, answer, { visiblePoints, alsoCorrect }),
        explanation: {}
    };
}

/* ---------- generators ---------- */

function generatePointProblem() {
    const name = pick(POINT_NAMES);

    return buildProblem({
        kind: "point",
        answer: `point ${name}`,
        visiblePoints: [name],
        diagram: {
            points: [{ id: name, x: 3, y: 1.5, label: name }]
        }
    });
}

function generateSegmentProblem() {
    const [p, q] = sample(POINT_NAMES, 2).sort();
    const useEndpoints = Math.random() < 0.5;

    // A lowercase label must not look like a visible point (b next to B).
    const letters = SEGMENT_NAMES.filter(
        l => l !== p.toLowerCase() && l !== q.toLowerCase()
    );
    const label = useEndpoints ? `${p}${q}` : pick(letters);

    return buildProblem({
        kind: "segment",
        answer: `segment ${label}`,
        visiblePoints: [p, q],
        // In "letter" mode, "segment pq" is also a correct description.
        alsoCorrect: [`segment ${p}${q}`],
        diagram: {
            points: [
                { id: p, x: 1, y: 1.5, label: p },
                { id: q, x: 5, y: 1.5, label: q }
            ],
            segments: [{ from: p, to: q, label }]
        }
    });
}

function generateLineProblem() {
    const label = pick(LINE_NAMES);

    return buildProblem({
        kind: "line",
        answer: `line ${label}`,
        visiblePoints: [],
        diagram: {
            points: [
                { id: "A", x: 1, y: 1.5, visible: false },
                { id: "B", x: 5, y: 1.5, visible: false }
            ],
            lines: [{ through: ["A", "B"], label }]
        }
    });
}

function generateRayProblem() {
    const endpoint = pick(POINT_NAMES);
    const name = pick(RAY_NAMES);

    return buildProblem({
        kind: "ray",
        answer: `ray ${endpoint}${name}`,
        visiblePoints: [endpoint],
        diagram: {
            points: [
                { id: endpoint, x: 1, y: 1.5, label: endpoint },
                { id: "direction", x: 3, y: 1.5, visible: false }
            ],
            rays: [{ from: endpoint, through: "direction", label: name }]
        }
    });
}



/////////////////////////////////////////////////////////

function generateShape() {

    const vertexCount =
        3 + Math.floor(Math.random() * 4);

    const points = [];

    const centerX = 4;
    const centerY = 3;

    const radiusX = 2.5;
    const radiusY = 2;

    for (let i = 0; i < vertexCount; i++) {

        const angle =
            -Math.PI / 2 +
            (2 * Math.PI * i) / vertexCount;

        const radius =
            0.9 + Math.random() * 0.3;

        points.push({
            id: String.fromCharCode(65 + i),

            x:
                centerX +
                Math.cos(angle) *
                radiusX *
                radius,

            y:
                centerY +
                Math.sin(angle) *
                radiusY *
                radius,

            label:
                String.fromCharCode(65 + i)
        });
    }

    const segments = [];

    for (let i = 0; i < vertexCount; i++) {

        segments.push({
            from:
                points[i].id,

            to:
                points[
                    (i + 1) % vertexCount
                ].id
        });
    }

    return {
        points,
        segments,
        vertexCount
    };
}
function generateSideCountProblem(shape) {

    const expression =
        createGeometrySvg({
            width: 360,
            height: 280,
            scale: 45,

            points: shape.points,
            segments: shape.segments
        });

    return {
        prompt: `
            <p>
                How many sides does this shape have?
            </p>
            <br>
            ${expression}

        `,

        answer:
            shape.vertexCount,

        choices:
            generateNumberChoices(
                shape.vertexCount
            ),
        explanation: {}
    };
}
function generateVertexCountProblem(shape) {

    const expression =
        createGeometrySvg({
            width: 360,
            height: 280,
            scale: 45,

            points: shape.points,
            segments: shape.segments
        });

    return {
        prompt: `
            <p>
                How many vertices does this shape have?
            </p>
            <br>
            ${expression}

        `,

        answer:
            shape.vertexCount,

        choices:
            generateNumberChoices(
                shape.vertexCount
            ),
        explanation: {}

    };
}
function generateAngleCountProblem(shape) {

    const expression =
        createGeometrySvg({
            width: 360,
            height: 280,
            scale: 45,

            points: shape.points,
            segments: shape.segments
        });

    return {
        prompt: `
            <p>
                How many angles does this shape have?
            </p>
            <br>
            ${expression}

        `,

        answer:
            shape.vertexCount,

        choices:
            generateNumberChoices(
                shape.vertexCount
            ),
        explanation: {}
    };
}
function generateNumberChoices(answer) {

    const choices = new Set();

    choices.add(answer);

    while (choices.size < 4) {

        const offset =
            Math.floor(
                Math.random() * 5
            ) - 2;

        const choice =
            answer + offset;

        if (choice > 0) {
            choices.add(choice);
        }
    }

    return shuffle(
        [...choices]
    );
}
function generateMarkedPartProblem(shape) {

    const types = [
        "side",
        "vertex",
        "angle"
    ];

    const markedType =
        types[
        Math.floor(
            Math.random() * types.length
        )
        ];

    const markedIndex =
        Math.floor(
            Math.random() *
            shape.vertexCount
        );

    const points =
        shape.points.map(point => ({
            ...point
        }));

    const segments =
        shape.segments.map(segment => ({
            ...segment
        }));

    const angles = [];

    if (markedType === "vertex") {

        points[markedIndex].label = "?";

    }

    if (markedType === "side") {

        segments[markedIndex].label = "?";

    }

    if (markedType === "angle") {

        for (let i = 0; i < shape.vertexCount; i++) {

            angles.push(
                createShapeAngle(
                    shape,
                    i,
                    i === markedIndex
                        ? "?"
                        : null
                )
            );
        }
    }

    const expression =
        createGeometrySvg({
            width: 360,
            height: 280,
            scale: 45,

            points,
            segments,
            angles
        });

    return {
        prompt: `
            <p>
                What is marked with a question mark?
            </p>
            <br>
            ${expression}

        `,

        answer:
            capitalize(markedType),

        choices: [
            "Side",
            "Vertex",
            "Angle"
        ],
        explanation: {}
    };
}
function createShapeAngle(
    shape,
    index,
    label = null
) {
    const count =
        shape.vertexCount;

    const previous =
        shape.points[
            (index - 1 + count) % count
        ].id;

    const current =
        shape.points[index].id;

    const next =
        shape.points[
            (index + 1) % count
        ].id;

    return {
        vertex: current,
        from: previous,
        to: next,
        label
    };
}
function generateMarkedAngleNameProblem(shape) {

    const markedIndex =
        Math.floor(
            Math.random() *
            shape.vertexCount
        );

    const angles = [];

    for (let i = 0; i < shape.vertexCount; i++) {

        angles.push(
            createShapeAngle(
                shape,
                i,
                i === markedIndex
                    ? "?"
                    : null
            )
        );
    }

    const expression =
        createGeometrySvg({
            width: 360,
            height: 280,
            scale: 45,

            points: shape.points,
            segments: shape.segments,
            angles
        });

    const answer =
        getAngleName(
            shape,
            markedIndex
        );

    const choices =
        generateAngleChoices(
            shape,
            markedIndex
        );

    return {
        prompt: `
            <p>
                What is the name of the marked angle?
            </p>
            <br>
            ${expression}

        `,

        answer,
        choices,
        explanation: {}
    };
}
function getAngleName(shape, index) {

    const count =
        shape.vertexCount;

    const previous =
        shape.points[
            (index - 1 + count) % count
        ].id;

    const current =
        shape.points[index].id;

    const next =
        shape.points[
            (index + 1) % count
        ].id;

    return (
        previous +
        current +
        next
    );
}
function generateAngleChoices(
    shape,
    answerIndex
) {
    const choices = new Set();

    choices.add(
        getAngleName(
            shape,
            answerIndex
        )
    );

    while (choices.size < 4) {

        const index =
            Math.floor(
                Math.random() *
                shape.vertexCount
            );

        choices.add(
            getAngleName(
                shape,
                index
            )
        );
    }

    return shuffle(
        [...choices]
    );
}
function capitalize(text) {

    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
    );
}
///////////////////////////////////////////////////////////////
/* ---------- settings ---------- */

// renderSegmentLabel puts a label on a fixed side of from -> to. Since every
// segment here goes around the shape the same way, all labels land on the same
// side. This constant picks the winding that puts them OUTSIDE the shape.
// If your labels end up inside, change it to -1.
const OUTSIDE_LABEL_WINDING = 1;

const MIN_SIDE_LENGTH = 1.6;  // in diagram units, keeps side labels readable
const MIN_ANGLE = 55;         // degrees, avoids needle-sharp corners
const MAX_ANGLE = 130;        // degrees, avoids near-straight corners

/* ---------- helpers ---------- */

function pick(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function round1(value) {
    return Math.round(value * 10) / 10;
}

// Four consecutive letters (ABCD, EFGH, PQRS, WXYZ...), skipping I and O
// because they look like 1 and 0.
function randomLetterRun(length) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const runs = [];

    for (let start = 0; start + length <= alphabet.length; start++) {
        const run = alphabet.slice(start, start + length).split("");
        if (!run.includes("I") && !run.includes("O")) runs.push(run);
    }

    return pick(runs);
}

function signedArea(points) {
    let sum = 0;
    for (let i = 0; i < points.length; i++) {
        const a = points[i];
        const b = points[(i + 1) % points.length];
        sum += a.x * b.y - b.x * a.y;
    }
    return sum / 2;
}

// Convex, no tiny sides, no extreme angles.
function isGoodQuadrilateral(p) {
    let turn = 0;

    for (let i = 0; i < p.length; i++) {
        const a = p[i];
        const b = p[(i + 1) % p.length];
        const c = p[(i + 2) % p.length];

        const abx = b.x - a.x, aby = b.y - a.y;
        const bcx = c.x - b.x, bcy = c.y - b.y;
        const abLen = Math.hypot(abx, aby);
        const bcLen = Math.hypot(bcx, bcy);

        if (abLen < MIN_SIDE_LENGTH) return false;

        // All corners must turn the same way (rules out dents and bow-ties)
        const cross = abx * bcy - aby * bcx;
        if (turn === 0) turn = Math.sign(cross);
        else if (Math.sign(cross) !== turn) return false;

        // Interior angle at b
        const cos = (-abx * bcx - aby * bcy) / (abLen * bcLen);
        const angle = Math.acos(cos) * 180 / Math.PI;
        if (angle < MIN_ANGLE || angle > MAX_ANGLE) return false;
    }

    return true;
}

// Jitter the corners of a square, stretch the result to a randomly sized
// frame that fits the 360x260 canvas, and keep it only if it looks good.
function randomConvexQuadrilateral() {
    const unitSquare = [[0, 0], [1, 0], [1, 1], [0, 1]];

    for (let attempt = 0; attempt < 200; attempt++) {
        const raw = unitSquare.map(([x, y]) => ({
            x: x + (Math.random() * 2 - 1) * 0.3,
            y: y + (Math.random() * 2 - 1) * 0.3
        }));

        const minX = Math.min(...raw.map(p => p.x));
        const maxX = Math.max(...raw.map(p => p.x));
        const minY = Math.min(...raw.map(p => p.y));
        const maxY = Math.max(...raw.map(p => p.y));

        const width = 4.4 + Math.random() * 1.2;
        const height = 2.8 + Math.random() * 0.9;

        const points = raw.map(p => ({
            x: round1(4 - width / 2 + (p.x - minX) / (maxX - minX) * width),
            y: round1(2.9 - height / 2 + (p.y - minY) / (maxY - minY) * height)
        }));

        if (isGoodQuadrilateral(points)) return points;
    }

    // Practically never reached
    return [
        { x: 1.5, y: 1.2 },
        { x: 6.5, y: 1.2 },
        { x: 6.5, y: 4.5 },
        { x: 1.5, y: 4.5 }
    ];
}

/* ---------- answer choices ---------- */

// "Which pair is adjacent to items[index]?"
// Decoys: the two near-misses (one neighbour plus the opposite item) and
// one pair that includes the item itself.
// Every pair is written in the same order (position around the shape), so
// the formatting never gives the answer away.
function adjacentPairChoices(items, index) {
    const n = items.length;
    const key = pair => pair.join(",");

    const correct = [(index + n - 1) % n, (index + 1) % n].sort((a, b) => a - b);

    const decoys = [];
    for (let a = 0; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            if (key([a, b]) !== key(correct)) decoys.push([a, b]);
        }
    }

    const nearMisses = decoys.filter(pair => !pair.includes(index));
    const weak = decoys.filter(pair => pair.includes(index));
    shuffle(nearMisses);
    shuffle(weak);

    const format = pair => pair.map(i => items[i]).join(" and ");
    const choices = [correct, ...[...nearMisses, ...weak].slice(0, 3)].map(format);

    shuffle(choices);
    return { answer: format(correct), choices };
}

// "Which one is opposite to items[index]?" The four items are the choices.
function oppositeChoices(items, index) {
    const choices = [...items];
    shuffle(choices);
    return { answer: items[(index + 2) % items.length], choices };
}