

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