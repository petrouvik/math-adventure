const COURSES = {
    numbers: {
        id: "numbers",
        title: "Numbers",
        description: "Learn what numbers are, how to read and write them, and how to work with even and odd numbers.",
        icon: "#",

        lessons: [
            {
                id: "numbers-intro",

                title: "What Are Numbers?",

                description: "Learn what numbers mean and how to read and write them.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Numbers help us count and describe how many things there are."
                    },

                    {
                        type: "example",
                        expression: "5",
                        explanation: "This number means five. We can use it to describe five objects."
                    },

                    {
                        type: "text",
                        text: "Numbers can be written using digits. For example, the number five is written as 5."
                    },

                    {
                        type: "example",
                        expression: "12",
                        explanation: "This number is read as twelve."
                    },

                    {
                        type: "text",
                        text: "We can read numbers and write them using their number names."
                    },

                    {
                        type: "example",
                        expression: "7 → seven",
                        explanation: "The digit 7 represents the number seven."
                    }
                ]
            },

            {
                id: "numbers-reading",

                title: "Reading Numbers",

                description: "Practice reading numbers from 0 to 100.",

                type: "practice",

                practice: {
                    generator: "number-reading",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 100
                    },

                    problemCount: 10
                }
            },

            {
                id: "numbers-predecessor-successor-intro",

                title: "Before and After",

                description: "Learn about the predecessor and successor of a number.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Every number has a number that comes immediately before it and a number that comes immediately after it."
                    },

                    {
                        type: "example",
                        expression: "4, 5, 6",
                        explanation: "The number before 5 is 4, and the number after 5 is 6."
                    },

                    {
                        type: "text",
                        text: "The number immediately before a number is called its predecessor. The number immediately after it is called its successor."
                    },

                    {
                        type: "example",
                        expression: "5 → predecessor: 4, successor: 6",
                        explanation: "The predecessor of 5 is 4, while its successor is 6."
                    }
                ]
            },

            {
                id: "numbers-predecessor-successor",

                title: "Predecessor and Successor",

                description: "Practice finding the number before and after another number.",

                type: "practice",

                practice: {
                    generator: "predecessor-successor",
                    interaction: "number-input",

                    settings: {
                        min: 1,
                        max: 99
                    },

                    problemCount: 10
                }
            },

            {
                id: "numbers-even-odd-intro",

                title: "Even and Odd Numbers",

                description: "Learn the difference between even and odd numbers.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "An even number can be split into pairs with nothing left over."
                    },

                    {
                        type: "example",
                        expression: "6 → ●● ●● ●●",
                        explanation: "Six objects can be grouped into three pairs, so 6 is even."
                    },

                    {
                        type: "text",
                        text: "An odd number cannot be split into pairs without one object being left over."
                    },

                    {
                        type: "example",
                        expression: "5 → ●● ●● ●",
                        explanation: "Five objects make two pairs with one object left over, so 5 is odd."
                    },

                    {
                        type: "text",
                        text: "The even numbers from 0 to 10 are 0, 2, 4, 6, 8, and 10."
                    },

                    {
                        type: "text",
                        text: "The odd numbers from 0 to 10 are 1, 3, 5, 7, and 9."
                    }
                ]
            },

            {
                id: "numbers-even-odd",

                title: "Even or Odd?",

                description: "Practice identifying even and odd numbers.",

                type: "practice",

                practice: {
                    generator: "even-odd",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 100
                    },

                    problemCount: 10
                }
            }
        ]
    },

    addition: {
        id: "addition",
        title: "Addition",
        description: "Learn how to put numbers together and solve addition problems.",
        icon: "+",

        lessons: [
            {
                id: "addition-intro",

                title: "What is Addition?",

                description: "Learn what addition means.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Addition means putting two or more groups together."
                    },

                    {
                        type: "example",
                        expression: "3 + 2 = 5",
                        explanation: "If you have 3 apples and get 2 more apples, you have 5 apples altogether."
                    },

                    {
                        type: "text",
                        text: "The + symbol means add, and the = symbol means equals."
                    }
                ]
            },
            {
                id: "addition-10",

                title: "Adding to 10",

                description: "Practice adding numbers up to 10.",

                type: "practice",

                practice: {
                    generator: "addition",
                    interaction: "number-input",

                    settings: {
                        max: 10
                    },

                    problemCount: 10
                }
            },
            {
                id: "addition-20",

                title: "Adding to 20",

                description: "Practice adding numbers up to 20.",

                type: "practice",

                practice: {
                    generator: "addition",
                    interaction: "number-input",

                    settings: {
                        max: 20
                    },

                    problemCount: 10
                }
            }
        ]
    },

    subtraction: {
        id: "subtraction",
        title: "Subtraction",
        description: "Learn how to take numbers away and solve subtraction problems.",
        icon: "−",

        lessons: [
            {
                id: "subtraction-intro",

                title: "What is Subtraction?",

                description: "Learn what subtraction means.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Subtraction means taking one group away from another."
                    },

                    {
                        type: "example",
                        expression: "5 − 2 = 3",
                        explanation: "If you have 5 apples and take away 2 apples, you have 3 apples left."
                    },

                    {
                        type: "text",
                        text: "The − symbol means subtract, or take away, and the = symbol means equals."
                    }
                ]
            },

            {
                id: "subtraction-10",

                title: "Subtracting to 10",

                description: "Practice subtracting numbers up to 10.",

                type: "practice",

                practice: {
                    generator: "subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 10
                    },

                    problemCount: 10
                }
            },

            {
                id: "subtraction-20",

                title: "Subtracting to 20",

                description: "Practice subtracting numbers up to 20.",

                type: "practice",

                practice: {
                    generator: "subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 20
                    },

                    problemCount: 10
                }
            }
        ]
    },

    multiplication: {
        id: "multiplication",
        title: "Multiplication",
        description: "Learn multiplication and master the multiplication tables.",
        icon: "×",

        lessons: [
            {
                id: "multiplication-intro",

                title: "What is Multiplication?",

                description: "Learn what multiplication means.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Multiplication is a quick way to add the same number several times."
                    },

                    {
                        type: "example",
                        expression: "3 × 4 = 12",
                        explanation: "This means 3 groups of 4. You can think of it as 4 + 4 + 4 = 12."
                    },

                    {
                        type: "text",
                        text: "The × symbol means multiply, and the = symbol means equals."
                    }
                ]
            },

            {
                id: "multiplication-2",
                title: "The 2 Times Table",
                description: "Learn and practice the 2 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [2],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-3",
                title: "The 3 Times Table",
                description: "Learn and practice the 3 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [3],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-4",
                title: "The 4 Times Table",
                description: "Learn and practice the 4 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [4],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-5",
                title: "The 5 Times Table",
                description: "Learn and practice the 5 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [5],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-6",
                title: "The 6 Times Table",
                description: "Learn and practice the 6 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [6],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-7",
                title: "The 7 Times Table",
                description: "Learn and practice the 7 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [7],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-8",
                title: "The 8 Times Table",
                description: "Learn and practice the 8 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [8],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-9",
                title: "The 9 Times Table",
                description: "Learn and practice the 9 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [9],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },

            {
                id: "multiplication-10",
                title: "The 10 Times Table",
                description: "Learn and practice the 10 times table.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [10],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            },
            
            {
                id: "multiplication-mixed",
                title: "All Times Tables, From 2 To 10",
                description: "Learn and practice all multiplication tables.",
                type: "practice",
                practice: {
                    generator: "multiplication-table",
                    interaction: "number-input",
                    settings: {
                        tables: [2,3,4,5,6,7,8,9,10],
                        maxMultiplier: 10
                    },
                    problemCount: 10
                }
            }
        ]
    },

    division: {
        id: "division",
        title: "Division",
        description: "Learn how to split numbers into equal groups.",
        icon: "÷",

        lessons: [
            {
                id: "division-intro",

                title: "What is Division?",

                description: "Learn what division means.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Division means splitting something into equal groups."
                    },

                    {
                        type: "example",
                        expression: "6 ÷ 2 = 3",
                        explanation: "If you split 6 apples into 2 equal groups, each group has 3 apples."
                    },

                    {
                        type: "text",
                        text: "The ÷ symbol means divide, and the = symbol means equals."
                    }
                ]
            },

            {
                id: "division-sharing",

                title: "Sharing Equally",

                description: "Learn how to divide by sharing things equally.",
                
                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [2, 3, 4, 5],
                        maxQuotient: 5
                    },

                    problemCount: 10
                }
            },

            {
                id: "division-facts-2-5",

                title: "Division Facts 2–5",

                description: "Practice division facts using the 2 through 5 times tables.",

                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [2, 3, 4, 5],
                        maxQuotient: 10
                    },

                    problemCount: 10
                }
            },

            {
                id: "division-facts-6-10",

                title: "Division Facts 6–10",

                description: "Practice division facts using the 6 through 10 times tables.",

                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [6, 7, 8, 9, 10],
                        maxQuotient: 10
                    },

                    problemCount: 10
                }
            },

            {
                id: "division-mixed",

                title: "Mixed Division Facts",

                description: "Practice division facts from all the times tables.",

                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [2, 3, 4, 5, 6, 7, 8, 9, 10],
                        maxQuotient: 10
                    },

                    problemCount: 10
                }
            }
        ]
    },

    "roman-numerals": {
        id: "roman-numerals",
        title: "Roman Numerals",
        description: "Learn how Roman numerals work and master their rules.",
        icon: "Ⅻ",

        lessons: [
            {
                id: "roman-numerals-intro",

                title: "Meet the Roman Numerals",

                description: "Learn the symbols used to write Roman numerals.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Roman numerals use special symbols to represent numbers."
                    },

                    {
                        type: "example",
                        expression: "I = 1, V = 5, X = 10",
                        explanation: "These are three of the most common Roman numeral symbols."
                    },

                    {
                        type: "text",
                        text: "The symbols L, C, D, and M represent 50, 100, 500, and 1000."
                    }
                ]
            },

            {
                id: "roman-numerals-symbols",

                title: "Learn the Symbols",

                description: "Practice recognizing Roman numeral symbols and their values.",

                type: "practice",

                practice: {
                    generator: "roman-symbols",
                    interaction: "multiple-choice",

                    settings: {},

                    problemCount: 10
                }
            },

            {
                id: "roman-numerals-combining",

                title: "Combining Symbols",

                description: "Learn how Roman numeral symbols are combined to make larger numbers.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Roman numerals can be combined by putting symbols next to each other."
                    },

                    {
                        type: "example",
                        expression: "VI = 6",
                        explanation: "V is 5 and I is 1. Since I comes after V, we add them: 5 + 1 = 6."
                    },

                    {
                        type: "example",
                        expression: "XIII = 13",
                        explanation: "X is 10 and III is 3, so XIII means 10 + 3 = 13."
                    }
                ]
            },

            {
                id: "roman-numerals-addition",

                title: "Adding Symbols",

                description: "Practice reading Roman numerals where symbols are added together.",

                type: "practice",

                practice: {
                    generator: "roman-addition",
                    interaction: "number-input",

                    settings: {
                        mode: "to-arabic",
                        min: 1,
                        max: 39,
                        subtraction: false
                    },

                    problemCount: 10
                }
            },

            {
                id: "roman-numerals-subtraction",

                title: "The Subtraction Rule",

                description: "Learn how smaller symbols can be placed before larger symbols to subtract.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Sometimes a smaller Roman numeral comes before a larger one. When this happens, we subtract the smaller value."
                    },

                    {
                        type: "example",
                        expression: "IV = 4",
                        explanation: "I is 1 and V is 5. Because I comes before V, we calculate 5 − 1 = 4."
                    },

                    {
                        type: "example",
                        expression: "IX = 9",
                        explanation: "I comes before X, so we calculate 10 − 1 = 9."
                    },

                    {
                        type: "text",
                        text: "The standard subtraction pairs are IV, IX, XL, XC, CD, and CM."
                    }
                ]
            },

            {
                id: "roman-numerals-repetition",

                title: "The Three-in-a-Row Rule",

                description: "Learn when Roman numeral symbols can be repeated.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "I, X, C, and M can normally be repeated up to three times in a row."
                    },

                    {
                        type: "example",
                        expression: "I, II, III",
                        explanation: "These represent 1, 2, and 3."
                    },

                    {
                        type: "example",
                        expression: "XXX = 30",
                        explanation: "X can appear three times in a row, but not four times."
                    },

                    {
                        type: "text",
                        text: "V, L, and D are not normally repeated."
                    }
                ]
            },

            {
                id: "roman-numerals-to-arabic",

                title: "Roman to Arabic",

                description: "Practice converting Roman numerals into ordinary numbers.",

                type: "practice",

                practice: {
                    generator: "roman-to-arabic",
                    interaction: "number-input",

                    settings: {
                        mode: "to-arabic",
                        min: 1,
                        max: 3999
                    },

                    problemCount: 10
                }
            },

            {
                id: "roman-numerals-to-roman",

                title: "Arabic to Roman",

                description: "Practice converting ordinary numbers into Roman numerals.",

                type: "practice",

                practice: {
                    generator: "arabic-to-roman",
                    interaction: "multiple-choice",

                    settings: {
                        mode: "to-roman",
                        min: 1,
                        max: 3999
                    },

                    problemCount: 10
                }
            }
        ]
    },
    
    "advanced-numbers": {
        id: "advanced-numbers",
        title: "Advanced Numbers",
        description: "Learn to read, write, compare, and understand numbers up to one million.",
        icon: "#",

        lessons: [
            {
                id: "advanced-numbers-reading",

                title: "Reading Large Numbers",

                description: "Learn how to read numbers up to one million.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "As numbers get larger, we group their digits into groups of three. These groups help us read large numbers more easily."
                    },

                    {
                        type: "example",
                        expression: "1 234",
                        explanation: "We read this as one thousand two hundred thirty-four."
                    },

                    {
                        type: "text",
                        text: "The first group contains the ones, tens, and hundreds. The next group contains thousands."
                    },

                    {
                        type: "example",
                        expression: "42 305",
                        explanation: "We read this as forty-two thousand three hundred five."
                    },

                    {
                        type: "text",
                        text: "A group of three digits can contain zeros. We do not say the names of places whose digits are all zero."
                    },

                    {
                        type: "example",
                        expression: "507 021",
                        explanation: "We read this as five hundred seven thousand twenty-one. We do not say 'zero hundreds' or 'zero tens'."
                    },

                    {
                        type: "text",
                        text: "The largest number in this course is one million: 1 000 000. <br>When you've mastered this course, learning to to read and write even bigger numbers will not be a problem for you."
                    }
                ]
            },

            {
                id: "advanced-numbers-reading-practice",

                title: "Reading Large Numbers",

                description: "Practice reading numbers up to one million.",

                type: "practice",

                practice: {
                    generator: "number-reading",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-numbers-writing",

                title: "Writing Large Numbers",

                description: "Learn how to turn number names into digits.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "We can also go the other way: instead of reading a number written with digits, we can write the digits when we hear or read the number name."
                    },

                    {
                        type: "example",
                        expression: "three thousand two hundred fifteen → 3,215",
                        explanation: "Three thousand means 3,000, and two hundred fifteen means 215. Together they make 3,215."
                    },

                    {
                        type: "text",
                        text: "Pay attention to groups of thousands. A zero may be needed when a place inside a number has no value."
                    },

                    {
                        type: "example",
                        expression: "forty-two thousand five → 42,005",
                        explanation: "There are 42 thousands and 5 ones. There are no hundreds or tens, so those places contain zeros."
                    },

                    {
                        type: "example",
                        expression: "six hundred thousand eighty → 600,080",
                        explanation: "There are 600,000 and 80, so the hundreds and tens inside the thousands group are represented by zeros."
                    }
                ]
            },

            {
                id: "advanced-numbers-writing-practice",

                title: "Writing Large Numbers",

                description: "Practice writing large numbers from their names.",

                type: "practice",

                practice: {
                    generator: "number-writing",
                    interaction: "number-input",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-numbers-comparison",

                title: "Comparing Numbers",

                description: "Learn how to tell which of two numbers is greater or smaller.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "We can compare two numbers to find out whether one is greater than, smaller than, or equal to the other. The sign '<' means 'less than', and the sign '>' means 'greater 'than'. If you have trouble memorizing which is which, you can remember that the sign points toward the smaller number."
                    },

                    {
                        type: "example",
                        expression: "8 > 5",
                        explanation: "Eight is greater than five. The sign points toward the smaller number, number 5."
                    },

                    {
                        type: "example",
                        expression: "3 < 7",
                        explanation: "Three is smaller than seven. The sign points toward the smaller number, number 3."
                    },

                    {
                        type: "example",
                        expression: "6 = 6",
                        explanation: "Both numbers have the same value, so they are equal."
                    },

                    {
                        type: "text",
                        text: "When comparing large numbers, first look at how many digits they have. A number with more digits is greater."
                    },

                    {
                        type: "example",
                        expression: "9,999 < 10,000",
                        explanation: "9,999 has four digits, while 10,000 has five digits, so 10,000 is greater."
                    },

                    {
                        type: "text",
                        text: "If both numbers have the same number of digits, compare the digits from left to right. The first different digit tells us which number is greater."
                    },

                    {
                        type: "example",
                        expression: "42,315 > 41,999",
                        explanation: "Both numbers have five digits. Their first digits are the same, but 2 is greater than 1 in the thousands place, so 42,315 is greater."
                    }
                ]
            },

            {
                id: "advanced-numbers-comparison-practice",

                title: "Comparing Numbers",

                description: "Practice comparing numbers using <, >, and =.",

                type: "practice",

                practice: {
                    generator: "number-comparison",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-numbers-place-value",

                title: "Place Value",

                description: "Learn what each digit is worth depending on its position.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "A digit's value depends on where it is in a number. This is called place value."
                    },

                    {
                        type: "example",
                        expression: "5,432",
                        explanation: "The 5 is worth 5,000, the 4 is worth 400, the 3 is worth 30, and the 2 is worth 2."
                    },

                    {
                        type: "text",
                        text: "From right to left, the places are ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, and millions."
                    },

                    {
                        type: "example",
                        expression: "325,407",
                        explanation: "3 is in the hundred-thousands place, 2 is in the ten-thousands place, 5 is in the thousands place, 4 is in the hundreds place, 0 is in the tens place, and 7 is in the ones place."
                    },

                    {
                        type: "text",
                        text: "A zero can hold a place even when there are no units of that size."
                    },

                    {
                        type: "example",
                        expression: "4,052",
                        explanation: "The 0 is in the hundreds place. There are no hundreds, but the zero keeps the other digits in their correct positions."
                    }
                ]
            },

            {
                id: "advanced-numbers-place-value-practice",

                title: "Place Value",

                description: "Practice identifying the value and position of digits.",

                type: "practice",

                practice: {
                    generator: "place-value",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-numbers-expanded-form",

                title: "Expanded Form",

                description: "Learn how to break large numbers into their place values.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "We can break a number apart into the value of each of its digits. This is called expanded form."
                    },

                    {
                        type: "example",
                        expression: "3,527 = 3,000 + 500 + 20 + 7",
                        explanation: "Each digit is separated according to its place value."
                    },

                    {
                        type: "text",
                        text: "Places containing zero do not need to be written in the expanded form."
                    },

                    {
                        type: "example",
                        expression: "4,052 = 4,000 + 50 + 2",
                        explanation: "There are no hundreds, so we leave the zero hundreds out."
                    },

                    {
                        type: "text",
                        text: "We can also put an expanded number back together by adding all of its parts."
                    },

                    {
                        type: "example",
                        expression: "20,000 + 3,000 + 400 + 6 = 23,406",
                        explanation: "Adding the parts gives us the original number."
                    }
                ]
            },

            {
                id: "advanced-numbers-expanded-form-practice",

                title: "Expanded Form",

                description: "Practice putting expanded numbers back together.",

                type: "practice",

                practice: {
                    generator: "expanded-form",
                    interaction: "number-input",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-numbers-number-groups",

                title: "Tens, Hundreds, and Thousands",

                description: "Learn which group of tens, hundreds, or thousands a number belongs to.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "We can divide numbers into groups to make their position easier to understand. For example, the first hundred contains the numbers from 1 to 100."
                    },

                    {
                        type: "example",
                        expression: "1–100 → first hundred",
                        explanation: "Every number from 1 through 100 belongs to the first hundred."
                    },

                    {
                        type: "example",
                        expression: "101–200 → second hundred",
                        explanation: "Every number from 101 through 200 belongs to the second hundred. Therefore, 104 is in the second hundred."
                    },

                    {
                        type: "text",
                        text: "The same idea can be used with thousands."
                    },

                    {
                        type: "example",
                        expression: "1–1,000 → first thousand",
                        explanation: "Every number from 1 through 1,000 belongs to the first thousand."
                    },

                    {
                        type: "example",
                        expression: "833 → first thousand",
                        explanation: "833 is between 1 and 1,000, so it belongs to the first thousand."
                    },

                    {
                        type: "text",
                        text: "We can also divide numbers into groups of ten. The first ten contains 1 through 10, the second ten contains 11 through 20, and so on."
                    },

                    {
                        type: "example",
                        expression: "34 → fourth ten",
                        explanation: "The fourth ten contains 31 through 40, so 34 belongs to the fourth ten."
                    },

                    {
                        type: "text",
                        text: "Once we know the group, we can also find its smallest and largest number."
                    },

                    {
                        type: "example",
                        expression: "second hundred → 101–200",
                        explanation: "The smallest number in the second hundred is 101, and the largest is 200."
                    }
                ]
            },

            {
                id: "advanced-numbers-number-groups-practice",

                title: "Number Groups",

                description: "Practice finding the tens, hundreds, and thousands that contain a number.",

                type: "practice",

                practice: {
                    generator: "number-groups",
                    interaction: "multiple-choice",

                    settings: {
                        max: 1000000
                    },

                    problemCount: 10
                }
            }
        ]
    },

    geometry: {
        id: "geometry",
        title: "Geometry",
        description: "Explore shapes, angles, and measurements.",
        icon: "△",

        lessons: [
            {
                id: "geometry-intro",
                title: "Introduction to Geometry",
                description: "Learn the basics of geometry.",
                type: "explanation",
                content: [
                    {
                        type: "text",
                        text: "Geometry is the study of shapes, sizes, positions, and the spaces around us."
                    },
                    {
                        type: "example",
                        expression: "△",
                        explanation: "This is a triangle. It has 3 sides and 3 corners."
                    },
                    {
                        type: "text",
                        text: "We'll learn more about shapes, angles, lengths, and other parts of geometry in future lessons."
                    },
                    {
                        type: "image-example",

                        title: "Adding groups together",

                        svg: `
                            <svg viewBox="0 0 400 300">
                                <polygon
                                    points="200,40 80,250 320,250"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="4"
                                />

                                <circle cx="200" cy="40" r="6" fill="currentColor"/>
                                <circle cx="80" cy="250" r="6" fill="currentColor"/>
                                <circle cx="320" cy="250" r="6" fill="currentColor"/>

                                <text
                                    x="200"
                                    y="25"
                                    fill="currentColor"
                                    font-size="20"
                                    text-anchor="middle"
                                >A</text>

                                <text
                                    x="60"
                                    y="270"
                                    fill="currentColor"
                                    font-size="20"
                                    text-anchor="middle"
                                >B</text>

                                <text
                                    x="340"
                                    y="270"
                                    fill="currentColor"
                                    font-size="20"
                                    text-anchor="middle"
                                >C</text>
                            </svg>
                        `,

                        explanation: "We have 3 apples and add 2 more apples."
                    }
                ]
            }
        ]
    }
};