

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


function numberToWordsSr(n) {

    const ones = [
        "nula",
        "jedan",
        "dva",
        "tri",
        "četiri",
        "pet",
        "šest",
        "sedam",
        "osam",
        "devet",
        "deset",
        "jedanaest",
        "dvanaest",
        "trinaest",
        "četrnaest",
        "petnaest",
        "šesnaest",
        "sedamnaest",
        "osamnaest",
        "devetnaest"
    ];

    const tens = [
        "",
        "",
        "dvadeset",
        "trideset",
        "četrdeset",
        "pedeset",
        "šezdeset",
        "sedamdeset",
        "osamdeset",
        "devedeset"
    ];

    const hundreds = [
        "",
        "sto",
        "dvesta",
        "trista",
        "četiristo",
        "petsto",
        "šeststo",
        "sedamsto",
        "osamsto",
        "devetsto"
    ];

    function chunk(n) {
        const parts = [];

        if (n >= 100) {
            parts.push(
                hundreds[Math.floor(n / 100)]
            );

            n %= 100;
        }

        if (n >= 20) {
            parts.push(
                tens[Math.floor(n / 10)]
            );

            n %= 10;
        }

        if (n > 0) {
            parts.push(ones[n]);
        }

        return parts.join(" ");
    }

    function thousandForm(n) {
        if (n % 100 >= 11 && n % 100 <= 19) {
            return "hiljada";
        }

        const lastDigit = n % 10;

        if (lastDigit === 1) {
            return "hiljada";
        }

        if (
            lastDigit >= 2 &&
            lastDigit <= 4
        ) {
            return "hiljade";
        }

        return "hiljada";
    }

    function thousandPrefix(n) {
        /*
         * Serbian uses:
         *
         * 1.000  → hiljadu
         * 2.000  → dve hiljade
         * 3.000  → tri hiljade
         * 4.000  → četiri hiljade
         */
        if (n === 1) {
            return "hiljadu";
        }

        if (n === 2) {
            return "dve hiljade";
        }

        return `${chunk(n)} ${thousandForm(n)}`;
    }

    if (n === 0) {
        return "nula";
    }

    const parts = [];

    const billions =
        Math.floor(n / 1_000_000_000);

    n %= 1_000_000_000;

    const millions =
        Math.floor(n / 1_000_000);

    n %= 1_000_000;

    const thousands =
        Math.floor(n / 1_000);

    n %= 1_000;

    if (billions > 0) {
        parts.push(
            `${chunk(billions)} milijardi`
        );
    }

    if (millions > 0) {
        if (millions === 1) {
            parts.push("milion");
        } else if (
            millions % 100 >= 11 &&
            millions % 100 <= 19
        ) {
            parts.push(`${chunk(millions)} miliona`);
        } else if (
            millions % 10 >= 2 &&
            millions % 10 <= 4
        ) {
            parts.push(`${chunk(millions)} miliona`);
        } else {
            parts.push(`${chunk(millions)} miliona`);
        }
    }

    if (thousands > 0) {
        parts.push(
            thousandPrefix(thousands)
        );
    }

    if (n > 0) {
        parts.push(chunk(n));
    }

    return parts.join(" ");
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