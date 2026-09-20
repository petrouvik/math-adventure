

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
function numberToWords(n) {
  const ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
    'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  function chunk(n) { // handles 0-999
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? '-' + ones[n % 10] : '');
    return ones[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + chunk(n % 100) : '');
  }

  if (n === 0) return 'zero';

  const scales = ['', ' thousand', ' million', ' billion'];
  let words = '';
  let scaleIndex = 0;

  while (n > 0) {
    const part = n % 1000;
    if (part !== 0) {
      words = chunk(part) + scales[scaleIndex] + (words ? ' ' + words : '');
    }
    n = Math.floor(n / 1000);
    scaleIndex++;
  }

  return words;
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


function getGroupName(groupNumber, groupSize) {
    const type = getGroupType(groupSize);

    return `${groupNumber}${getOrdinalSuffix(groupNumber)} ${type}`;
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
