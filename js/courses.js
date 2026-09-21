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
                        max: 20,
                        min: 1,
                        carryProbability: 0.75
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
                        max: 19,
                        min: 1,
                        borrowProbability: 0.75
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

    "advanced-addition": {
        id: "advanced-addition",
        title: "Advanced Addition",
        description: "Learn how to add large numbers using the written addition algorithm.",
        icon: "+",

        lessons: [
            {
                id: "advanced-addition-no-carry",

                title: "Adding Without Carrying",

                description: "Learn how to add numbers column by column when no carrying is needed.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "When numbers become larger, we can add them by writing one number underneath the other. This is called column addition."
                    },

                    {
                        type: "text",
                        text: "The most important rule is to line up numbers by place value. Ones go under ones, tens go under tens, hundreds go under hundreds, and so on."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "243",
                            "125",
                            "368",
                            []
                        ),
                        explanation: "First, add the ones: 3 + 5 = 8. Then add the tens: 4 + 2 = 6. Finally, add the hundreds: 2 + 1 = 3. The answer is 368."
                    },

                    {
                        type: "text",
                        text: "We always start with the rightmost column, which is the ones column. Then we move to the left one column at a time."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "3421",
                            "1253",
                            "4674",
                            []
                        ),
                        explanation: "We add the ones, then the tens, then the hundreds, and finally the thousands. Since none of the columns makes 10 or more, we do not need to carry (we will see what carrying means soon)."
                    },

                    {
                        type: "text",
                        text: "This same method works no matter how many columns the numbers have. We simply continue from right to left."
                    }
                ]
            },

            {
                id: "advanced-addition-no-carry-practice",

                title: "Practice: No Carrying",

                description: "Practice adding numbers without carrying.",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: true,
                        carryCount: 0
                    },

                    problemCount: 10,
                    solveOnPaper: true
                }
            },

            {
                id: "advanced-addition-one-carry",

                title: "Adding With One Carry",

                description: "Learn what to do when one column adds up to 10 or more.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Sometimes the digits in a column add up to 10 or more. When that happens, we cannot write the whole number in that column."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "247",
                            "135",
                            "382",
                            [1]
                        ),
                        explanation: "Start with the ones: 7 + 5 = 12. We write the 2 in the ones place and carry the 1 into the tens column."
                    },

                    {
                        type: "text",
                        text: "The carried 1 represents one extra ten. When we move to the tens column, we must remember to add that carried 1."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "247",
                            "135",
                            "382",
                            [1]
                        ),
                        explanation: "Now add the tens: 4 + 3 + 1 = 8. Finally, add the hundreds: 2 + 1 = 3. The answer is 382."
                    },

                    {
                        type: "text",
                        text: "Whenever a column gives us 10 or more, write the ones digit in that column and carry the remaining ten into the next column."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "356",
                            "127",
                            "483",
                            [1]
                        ),
                        explanation: "6 + 7 = 13, so we write 3 and carry 1. Then 5 + 2 + 1 = 8. The hundreds column is 3 + 1 = 4, giving us 483."
                    }
                ]
            },

            {
                id: "advanced-addition-one-carry-practice",

                title: "Practice: One Carry",

                description: "Practice addition problems that require one carry.",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: true,
                        carryCount: 1
                    },

                    problemCount: 10,
                    solveOnPaper: true
                }
            },

            {
                id: "advanced-addition-multiple-carries",

                title: "Adding With Multiple Carries",

                description: "Learn how to carry through several columns.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "A calculation can require carrying in more than one column. The process is exactly the same: solve one column, write its ones digit, and carry the extra ten to the next column."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "587",
                            "694",
                            "1281",
                            [1,1,1]
                        ),
                        explanation: "Start with the ones: 7 + 4 = 11. Write 1 and carry 1. Then add the tens: 8 + 9 + 1 = 18. Write 8 and carry 1 again. Finally, 5 + 6 + 1 = 12. This gives us 1,281."
                    },

                    {
                        type: "text",
                        text: "Notice that a carry from one column becomes part of the calculation in the next column. We must never forget to include it."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "4682",
                            "3759",
                            "8441",
                            [1,1,1]
                        ),
                        explanation: "Several columns require carrying. We work from right to left, carrying to the next column whenever the sum is 10 or more."
                    },

                    {
                        type: "text",
                        text: "Even if every column requires a carry, the method does not change. Keep moving from right to left until every column has been added."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "999",
                            "888",
                            "1887",
                            [1,1,1]
                        ),
                        explanation: "Here every column produces a carry. The ones give 17, the tens give 18 after including the carried 1, and the hundreds give 18 as well. The final answer is 1,887."
                    }
                ]
            },

            {
                id: "advanced-addition-multiple-carries-practice",

                title: "Practice: Multiple Carries",

                description: "Practice addition problems that require several carries.",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: true,
                        carryCount: {
                            min: 2
                        }
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-addition-carry-through-zero",

                title: "Carrying Through Zeros",

                description: "Learn how to handle zeros when a carry moves through a column.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Sometimes a carry reaches a column containing zero. We still follow the same procedure, but the zero cannot add anything by itself."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "109",
                            "1",
                            "110",
                            [1]
                        ),
                        explanation: "The ones are 9 + 1 = 10. We write 0 in the ones place and carry 1 into the tens column. The tens column contains 0, so 0 + 0 + 1 = 1. The answer is 110."
                    },

                    {
                        type: "text",
                        text: "A carry can also continue through several zero columns. Each zero simply receives the carried 1."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "999",
                            "1",
                            "1000",
                            [1,1,1]
                        ),
                        explanation: "The ones give 10, so we write 0 and carry 1. The tens then give 10, so we write 0 and carry 1 again. The same thing happens in the hundreds. The final carry creates a new thousands place, giving 1,000."
                    },

                    {
                        type: "text",
                        text: "This is an important example because the answer has more digits than either number we started with."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "4999",
                            "1",
                            "5000",
                            [1,1,1]
                        ),
                        explanation: "The 1 travels through the ones, tens, and hundreds columns before reaching the thousands column. The result is 5,000."
                    },

                    {
                        type: "text",
                        text: "Do not skip a column just because its digit is zero. Every column still has a place-value position, and every carry must move through it."
                    }
                ]
            },

            {
                id: "advanced-addition-carry-through-zero-practice",

                title: "Practice: Carrying Through Zeros",

                description: "Practice addition problems where carries pass through zero.",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        carryThroughZero: true
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-addition-different-lengths",

                title: "Adding Different-Length Numbers",

                description: "Learn how to add numbers that do not have the same number of digits.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "The two numbers do not need to have the same number of digits. We simply line them up by place value."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "4826",
                            "397",
                            "5223",
                            [1,1,1]
                        ),
                        explanation: "The 7 goes under the ones place, the 9 under the tens place, and the 3 under the hundreds place. There is nothing under the thousands place of 397, so that place contributes zero."
                    },

                    {
                        type: "text",
                        text: "It can help to imagine the shorter number with zeros added to its left. For example, 397 can be thought of as 0,397."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "4826",
                            "397",
                            "5223",
                            [1,1,1]
                        ),
                        explanation: "Think of the problem as 4,826 + 0,397. Now every digit has a matching place: ones with ones, tens with tens, hundreds with hundreds, and thousands with thousands."
                    },

                    {
                        type: "text",
                        text: "The shorter number does not need to be changed. The important thing is that its digits are placed in the correct columns."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "58",
                            "12746",
                            "12804",
                            [1,1]
                        ),
                        explanation: "Here 58 is much shorter than 12,746. The 8 belongs under the ones and the 5 belongs under the tens. The empty places to the left simply contribute nothing."
                    },

                    {
                        type: "text",
                        text: "Once the numbers are aligned correctly, the addition algorithm is exactly the same as before."
                    }
                ]
            },

            {
                id: "advanced-addition-different-lengths-practice",

                title: "Practice: Different Lengths",

                description: "Practice adding numbers with different numbers of digits.",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: false
                    },

                    problemCount: 10
                }
            },

            {
                id: "advanced-addition-large-numbers",

                title: "Adding Large Numbers",

                description: "Put everything together and add numbers up to one million.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "You now know the complete written addition algorithm. It works for numbers of any size because the procedure never changes."
                    },

                    {
                        type: "text",
                        text: "For large numbers, continue aligning the digits by place value and work from the ones column toward the left."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "384729",
                            "76845",
                            "461574",
                            [1,0,1,1,1]
                        ),
                        explanation: "Even though the numbers are much larger, we still solve the same way: start with the ones, carry when necessary, and continue one column at a time."
                    },

                    {
                        type: "text",
                        text: "The same method works when the numbers have hundreds of thousands or millions."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "384729",
                            "76845",
                            "461574",
                            [1,0,1,1,1]
                        ),
                        explanation: "There is no new trick to learn for larger numbers. The thousands and hundred-thousands columns are handled exactly like the smaller columns."
                    },

                    {
                        type: "example",
                        expression: createAdditionSvg(
                            "999999",
                            "1",
                            "1000000",
                            [1,1,1,1,1,1]
                        ),
                        explanation: "Here a single 1 causes carries through every existing column. The final carry creates a new millions place, giving 1,000,000."
                    },

                    {
                        type: "text",
                        text: "Remember the complete procedure: line up the numbers by place value, start on the right, add each column, write the digit in that column, carry when necessary, and continue to the left."
                    },

                    {
                        type: "text",
                        text: "You do not need a different method for bigger numbers. Once you know the algorithm, you can use the same steps again and again."
                    }
                ]
            },

            {
                id: "advanced-addition-large-numbers-practice",

                title: "Practice: Large Numbers",

                description: "Practice adding numbers up to one million using the complete algorithm.",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        min: 1,
                        max: 1000000,
                        sameLength: false
                    },

                    problemCount: 10
                }
            }
        ]
    },

    "advanced-subtraction": {
        id: "advanced-subtraction",
        title: "Advanced Subtraction",
        description: "Learn how to subtract large numbers using the written subtraction algorithm.",
        icon: "−",

        lessons: [
            {
                id: "advanced-subtraction-no-borrowing",

                title: "Subtracting Without Borrowing",

                description: "Learn how to subtract numbers column by column when no borrowing is needed.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "When numbers become larger, we can subtract them by writing one number underneath the other. This is called column subtraction."
                    },

                    {
                        type: "text",
                        text: "The most important rule is to line up the numbers by place value. Ones go under ones, tens go under tens, hundreds go under hundreds, and so on."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "568",
                            "243",
                            "325",
                            []
                        ),
                        explanation: "First, subtract the ones: 8 − 3 = 5. Then subtract the tens: 6 − 4 = 2. Finally, subtract the hundreds: 5 − 2 = 3. The answer is 325."
                    },

                    {
                        type: "text",
                        text: "We always start with the rightmost column, which is the ones column. Then we move to the left one column at a time."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "7842",
                            "3511",
                            "4331",
                            []
                        ),
                        explanation: "We subtract the ones, then the tens, then the hundreds, and finally the thousands. Every top digit is large enough to subtract the digit underneath it, so no borrowing is needed."
                    },

                    {
                        type: "text",
                        text: "This same method works no matter how many columns the numbers have. We simply continue from right to left."
                    }
                ]
            },

            {
                id: "advanced-subtraction-no-borrowing-practice",

                title: "Practice: No Borrowing",

                description: "Practice subtracting numbers without borrowing.",

                type: "practice",

                practice: {
                    generator: "advanced-subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 9999,
                        sameLength: true,
                        borrowCount: 0
                    },

                    problemCount: 10,
                    solveOnPaper: true
                }
            },

            {
                id: "advanced-subtraction-one-borrowing",

                title: "Subtracting With One Borrow",

                description: "Learn what to do when a top digit is too small to subtract.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "Sometimes the top digit in a column is smaller than the digit underneath it. We cannot subtract the smaller digit from it, so we need to borrow from the next column."
                    },

                    {
                        type: "text",
                        text: "When we borrow, we take 1 from the digit immediately to the left and add 10 to the current digit. This gives us enough to subtract. We write how much we have borrowed above the column that we have borrowed from."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "52",
                            "27",
                            "25",
                            [1]
                        ),
                        explanation: "Start with the ones: 2 is smaller than 7, so we need to borrow. We take 1 ten from the 5 tens, leaving 4 tens. That borrowed ten becomes 10 ones, so the 2 ones become 12 ones."
                    },

                    {
                        type: "text",
                        text: "Now we can subtract the ones: 12 − 7 = 5. Then subtract the tens (do not forget that we have borrowed from the 5 so it becomes a 4): 4 − 2 = 2. The answer is 25."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "63",
                            "28",
                            "35",
                            [1]
                        ),
                        explanation: "The ones column needs a borrow because 3 is smaller than 8. Borrow 1 ten from 6, leaving 5 tens, and turn the 3 ones into 13 ones. Then 13 − 8 = 5 and 5 − 2 = 3, giving 35."
                    },

                    {
                        type: "text",
                        text: "Borrowing does not change the value of the number. We are simply taking one ten and changing it into ten ones so that we can subtract."
                    },

                    {
                        type: "text",
                        text: "Whenever a top digit is too small, look to the next column on the left. Borrow 1 from that column, add 10 to the current column, and then continue subtracting."
                    }
                ]
            },

            {
                id: "advanced-subtraction-one-borrowing-practice",

                title: "Practice: One Borrow",

                description: "Practice subtraction problems that require one borrow.",

                type: "practice",

                practice: {
                    generator: "advanced-subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: true,
                        borrowCount: 1
                    },

                    problemCount: 10,
                    solveOnPaper: true
                }
            },

            {
                id: "advanced-subtraction-multiple-borrowings",

                title: "Subtracting With Multiple Borrows",

                description: "Learn how to borrow in several columns.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "A subtraction problem can require borrowing in more than one column. The process is always the same: when a top digit is too small, borrow 1 from the next column and add 10 to the current column."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "743",
                            "286",
                            "457",
                            [1, 1]
                        ),
                        explanation: "Start with the ones: 3 is smaller than 6, so borrow 1 ten. The 3 becomes 13 and the 4 becomes 3. Now 13 − 6 = 7. In the tens column, 3 is smaller than 8, so borrow 1 hundred. The 3 becomes 13 and the 7 becomes 6. Then 13 − 8 = 5. Finally, 6 − 2 = 4. The answer is 457."
                    },

                    {
                        type: "text",
                        text: "Notice that a borrow changes the digit in the column to the left. That change must be remembered when we reach that column."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "8652",
                            "4378",
                            "4274",
                            [1, 1, 1]
                        ),
                        explanation: "Several columns require borrowing. We start on the right and work left. Each time the top digit is too small, we borrow 1 from the next column before subtracting."
                    },

                    {
                        type: "text",
                        text: "Borrowing can happen in consecutive columns. Even when several columns need a borrow, we never change the order: always work from right to left."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "9321",
                            "4876",
                            "4445",
                            [1, 1, 1]
                        ),
                        explanation: "The ones require a borrow, then the tens require another borrow, and the hundreds require another borrow. After each borrow, we use the changed digit when we move to the next column."
                    },

                    {
                        type: "text",
                        text: "The important thing is to keep track of every borrow. A borrowed ten is used in the current column, while the column we borrowed from becomes 1 smaller."
                    }
                ]
            },

            {
                id: "advanced-subtraction-multiple-borrowings-practice",

                title: "Practice: Multiple Borrows",

                description: "Practice subtraction problems that require several borrows.",

                type: "practice",

                practice: {
                    generator: "advanced-subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: true,
                        borrowCount: {
                            min: 2
                        }
                    },

                    problemCount: 10,
                    solveOnPaper: true
                }
            },

            {
    id: "advanced-subtraction-borrow-through-zero",

    title: "Borrowing Through Zeros",

    description: "Learn how to borrow when zeros appear in the next column.",

    type: "explanation",

    content: [
        {
            type: "text",
            text: "Sometimes we need to borrow, but the next column contains 0. We can still use the same borrowing rule."
        },

        {
            type: "text",
            text: "When we borrow, we take 1 from the column to the left and turn it into 10 in the current column. The column we borrowed from now has 1 less."
        },

        {
            type: "example",
            expression: createSubtractionSvg(
                "52",
                "27",
                "25",
                [1]
            ),
            explanation: "Start with the ones: 2 is smaller than 7, so we borrow 1 ten. The 2 becomes 12, and the 5 tens becomes 4 tens. Now we can subtract 12 − 7 = 5."
        },

        {
            type: "text",
            text: "Now suppose the next column contains 0. We still borrow from that column. We simply remember that it has given away 1, and we continue to the left."
        },

        {
            type: "example",
            expression: createSubtractionSvg(
                "502",
                "178",
                "324",
                [1, 1]
            ),
            explanation: "Start with the ones: 2 is smaller than 8, so we borrow from the tens column. The 2 becomes 12. The tens column has given away 1, so we remember that it has 1 less available when we reach it."
        },

        {
            type: "text",
            text: "Now move to the tens column. It started with 0, but it has already given away 1. It therefore needs to borrow from the hundreds column before we can subtract."
        },

        {
            type: "example",
            expression: createSubtractionSvg(
                "502",
                "178",
                "324",
                [1, 1]
            ),
            explanation: "Borrow 1 hundred for the tens column. That gives us 10 tens. One of those tens is used to make up for the earlier borrow, leaving 9 tens. Now we can subtract 9 − 7 = 2."
        },

        {
            type: "text",
            text: "Finally, the hundreds column has given away 1 hundred, so the 5 becomes 4. We subtract 4 − 1 = 3. The answer is 324."
        },

        {
            type: "text",
            text: "Notice that we never had to calculate with anything unusual. We simply remembered that a column which has already given away 1 has one less available when we reach it."
        },

        {
            type: "example",
            expression: createSubtractionSvg(
                "1000",
                "1",
                "999",
                [1, 1, 1]
            ),
            explanation: "Start with the ones. We need to borrow, so we take 1 from the tens column. The ones become 10, and we remember that the tens column has given away 1."
        },

        {
            type: "text",
            text: "Now move to the tens. That column started with 0 and has already given away 1, so it also needs to borrow. We take 1 from the hundreds column. The tens now have 10, but one of those tens has already been used for the ones column, leaving 9."
        },

        {
            type: "text",
            text: "The same thing happens in the hundreds column. It borrows from the thousands column, leaving 9 hundreds after passing one ten to the tens column."
        },

        {
            type: "text",
            text: "Now we can finish from right to left: 10 − 1 = 9, then 9 − 0 = 9, then 9 − 0 = 9. The answer is 999."
        },

        {
            type: "text",
            text: "The important idea is simple: if you need to borrow, always borrow from the next column. If that column has already given something away, remember that it has 1 less when you reach it. Keep moving left until every column can be solved."
        }
    ]
},

            {
                id: "advanced-subtraction-borrow-through-zero-practice",

                title: "Practice: Borrowing Through Zeros",

                description: "Practice subtraction problems where borrowing passes through zero.",

                type: "practice",

                practice: {
                    generator: "advanced-subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        borrowThroughZero: true
                    },

                    problemCount: 10,
                    solveOnPaper: true
                }
            },

            {
                id: "advanced-subtraction-different-lengths",

                title: "Subtracting Different-Length Numbers",

                description: "Learn how to subtract numbers that do not have the same number of digits.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "The two numbers do not need to have the same number of digits. We simply line them up by place value."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "4826",
                            "397",
                            "4429",
                            [1]
                        ),
                        explanation: "The 7 goes under the ones place, the 9 under the tens place, and the 3 under the hundreds place. The thousands place of 397 is empty, so there is nothing to subtract from the thousands digit of 4,826."
                    },

                    {
                        type: "text",
                        text: "It can help to imagine the shorter number with zeros added to its left. For example, 397 can be thought of as 0,397."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "4826",
                            "397",
                            "4429",
                            [1]
                        ),
                        explanation: "Think of the problem as 4,826 − 0,397. Now every digit has a matching place: ones with ones, tens with tens, hundreds with hundreds, and thousands with thousands."
                    },

                    {
                        type: "text",
                        text: "The shorter number does not need to be changed. The important thing is that its digits are placed in the correct columns."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "12746",
                            "58",
                            "12688",
                            [1, 1]
                        ),
                        explanation: "Here 58 is much shorter than 12,746. The 8 belongs under the ones and the 5 belongs under the tens. The empty places to the left simply contribute nothing."
                    },

                    {
                        type: "text",
                        text: "Once the numbers are aligned correctly, the subtraction algorithm is exactly the same as before. We still start on the right and borrow whenever the top digit is too small."
                    }
                ]
            },

            {
                id: "advanced-subtraction-different-lengths-practice",

                title: "Practice: Different Lengths",

                description: "Practice subtracting numbers with different numbers of digits.",

                type: "practice",

                practice: {
                    generator: "advanced-subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: false
                    },

                    problemCount: 10,
                    solveOnPaper: true
                }
            },

            {
                id: "advanced-subtraction-large-numbers",

                title: "Subtracting Large Numbers",

                description: "Put everything together and subtract numbers up to one million.",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "You now know the complete written subtraction algorithm. It works for numbers of any size because the procedure stays the same."
                    },

                    {
                        type: "text",
                        text: "For large numbers, continue aligning the digits by place value and work from the ones column toward the left. Borrow whenever the top digit is too small."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "684729",
                            "276845",
                            "407884",
                            [1, 1, 1]
                        ),
                        explanation: "Even though the numbers are much larger, we still solve the same way: start with the ones, borrow when necessary, and continue one column at a time toward the left."
                    },

                    {
                        type: "text",
                        text: "Large numbers can contain zeros, different digit lengths, and several borrowing steps. None of these require a new algorithm."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "800000",
                            "1",
                            "799999",
                            [1, 1, 1, 1, 1]
                        ),
                        explanation: "The ones need a borrow, but every column between the ones and the hundred-thousands contains zero. We borrow from the 8 and pass the borrowing through the zero columns. The result is 799,999."
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "1000000",
                            "1",
                            "999999",
                            [1, 1, 1, 1, 1, 1]
                        ),
                        explanation: "Here we subtract 1 from one million. The borrow travels through every zero column until it reaches the ones. The result is 999,999."
                    },

                    {
                        type: "text",
                        text: "Remember the complete procedure: line up the numbers by place value, start on the right, subtract each column, borrow when the top digit is too small, and continue to the left."
                    },

                    {
                        type: "text",
                        text: "You do not need a different method for bigger numbers. Once you know the algorithm, you can use the same steps again and again."
                    }
                ]
            },

            {
                id: "advanced-subtraction-large-numbers-practice",

                title: "Practice: Large Numbers",

                description: "Practice subtracting numbers up to one million using the complete algorithm.",

                type: "practice",

                practice: {
                    generator: "advanced-subtraction",
                    interaction: "number-input",

                    settings: {
                        min: 1,
                        max: 1000000,
                        sameLength: false
                    },

                    problemCount: 10,
                    solveOnPaper: true
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

                        svg: createAdditionSvg(
                            "352414",
                            "221449",
                            "?",
                            [1,2,3,4,5]
                        ),

                        explanation: "We have 3 apples and add 2 more apples."
                    }
                ]
            }
        ]
    }
};