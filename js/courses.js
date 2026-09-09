const COURSES = {
    numbers: {
        id: "numbers",
        title: "Numbers",
        description: "Learn about numbers and how they work.",
        icon: "#",

        lessons: [
            {
                id: "numbers-intro",

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
                    }
                ]
            }
        ]
    }
};