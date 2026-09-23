const COURSES = {
    numbers: {
        id: "numbers",

        title: "courses.numbers.title",
        description: "courses.numbers.description",

        icon: "#",

        lessons: [

            {
                id: "numbers-intro",

                title: "courses.numbers.numbersIntro.title",
                description: "courses.numbers.numbersIntro.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "courses.numbers.numbersIntro.content.text1"
                    },

                    {
                        type: "example",
                        expression: "5",
                        explanation:
                            "courses.numbers.numbersIntro.content.example1"
                    },

                    {
                        type: "text",
                        text: "courses.numbers.numbersIntro.content.text2"
                    },

                    {
                        type: "example",
                        expression: "12",
                        explanation:
                            "courses.numbers.numbersIntro.content.example2"
                    }
                ]
            },


            {
                id: "numbers-reading",

                title: "courses.numbers.numbersReading.title",
                description: "courses.numbers.numbersReading.description",

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

                title:
                    "courses.numbers.predecessorSuccessorIntro.title",

                description:
                    "courses.numbers.predecessorSuccessorIntro.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.numbers.predecessorSuccessorIntro.content.text1"
                    },

                    {
                        type: "example",
                        expression: "4, 5, 6",
                        explanation:
                            "courses.numbers.predecessorSuccessorIntro.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.numbers.predecessorSuccessorIntro.content.text2"
                    },

                    {
                        type: "example",
                        expression: "4, 5, 6",
                        explanation:
                            "courses.numbers.predecessorSuccessorIntro.content.example2"
                    }
                ]
            },


            {
                id: "numbers-predecessor-successor",

                title:
                    "courses.numbers.predecessorSuccessor.title",

                description:
                    "courses.numbers.predecessorSuccessor.description",

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

                title:
                    "courses.numbers.evenOddIntro.title",

                description:
                    "courses.numbers.evenOddIntro.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.numbers.evenOddIntro.content.text1"
                    },

                    {
                        type: "example",
                        expression: "6 → ●● ●● ●●",
                        explanation:
                            "courses.numbers.evenOddIntro.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.numbers.evenOddIntro.content.text2"
                    },

                    {
                        type: "example",
                        expression: "5 → ●● ●● ●",
                        explanation:
                            "courses.numbers.evenOddIntro.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.numbers.evenOddIntro.content.text3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.numbers.evenOddIntro.content.text4"
                    }
                ]
            },


            {
                id: "numbers-even-odd",

                title:
                    "courses.numbers.evenOdd.title",

                description:
                    "courses.numbers.evenOdd.description",

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

        title: "courses.addition.title",
        description: "courses.addition.description",

        icon: "+",

        lessons: [

            {
                id: "addition-intro",

                title: "courses.addition.intro.title",
                description: "courses.addition.intro.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "courses.addition.intro.content.text1"
                    },

                    {
                        type: "example",
                        expression: "3 + 2 = 5",
                        explanation:
                            "courses.addition.intro.content.example1"
                    },

                    {
                        type: "text",
                        text: "courses.addition.intro.content.text2"
                    }
                ]
            },


            {
                id: "addition-10",

                title: "courses.addition.addition10.title",
                description: "courses.addition.addition10.description",

                type: "practice",

                practice: {
                    generator: "addition",
                    interaction: "number-input",

                    settings: {
                        max: 10
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.1
            },


            {
                id: "addition-20",

                title: "courses.addition.addition20.title",
                description: "courses.addition.addition20.description",

                type: "practice",

                practice: {
                    generator: "addition",
                    interaction: "number-input",

                    settings: {
                        max: 19,
                        min: 1,
                        carryProbability: 0.75
                    },

                    problemCount: 10
                }, 

                difficultyMultiplier: 1.25
            }
        ]
    },


    subtraction: {
        id: "subtraction",

        title: "courses.subtraction.title",
        description: "courses.subtraction.description",

        icon: "−",

        lessons: [

            {
                id: "subtraction-intro",

                title: "courses.subtraction.intro.title",
                description: "courses.subtraction.intro.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text: "courses.subtraction.intro.content.text1"
                    },

                    {
                        type: "example",
                        expression: "5 − 2 = 3",
                        explanation:
                            "courses.subtraction.intro.content.example1"
                    },

                    {
                        type: "text",
                        text: "courses.subtraction.intro.content.text2"
                    }
                ]
            },


            {
                id: "subtraction-10",

                title: "courses.subtraction.subtraction10.title",
                description:
                    "courses.subtraction.subtraction10.description",

                type: "practice",

                practice: {
                    generator: "subtraction",
                    interaction: "number-input",

                    settings: {
                        max: 10
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.1
            },


            {
                id: "subtraction-20",

                title: "courses.subtraction.subtraction20.title",
                description:
                    "courses.subtraction.subtraction20.description",

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
                },
                difficultyMultiplier: 1.25
            }
        ]
    },

    multiplication: {
    id: "multiplication",

    title: "courses.multiplication.title",
    description: "courses.multiplication.description",

    icon: "×",

    lessons: [

        {
            id: "multiplication-intro",

            title: "courses.multiplication.intro.title",
            description:
                "courses.multiplication.intro.description",

            type: "explanation",

            content: [
                {
                    type: "text",
                    text:
                        "courses.multiplication.intro.content.text1"
                },

                {
                    type: "example",
                    expression: "3 × 4 = 12",
                    explanation:
                        "courses.multiplication.intro.content.example1"
                },

                {
                    type: "text",
                    text:
                        "courses.multiplication.intro.content.text2"
                }
            ]
        },

        {
            id: "multiplication-2",

            title:
                "courses.multiplication.multiplication2.title",
            description:
                "courses.multiplication.multiplication2.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [2],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.3
        },

        {
            id: "multiplication-3",

            title:
                "courses.multiplication.multiplication3.title",
            description:
                "courses.multiplication.multiplication3.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [3],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.3
        },

        {
            id: "multiplication-4",

            title:
                "courses.multiplication.multiplication4.title",
            description:
                "courses.multiplication.multiplication4.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [4],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.3
        },

        {
            id: "multiplication-5",

            title:
                "courses.multiplication.multiplication5.title",
            description:
                "courses.multiplication.multiplication5.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [5],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.3
        },

        {
            id: "multiplication-6",

            title:
                "courses.multiplication.multiplication6.title",
            description:
                "courses.multiplication.multiplication6.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [6],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.5
        },

        {
            id: "multiplication-7",

            title:
                "courses.multiplication.multiplication7.title",
            description:
                "courses.multiplication.multiplication7.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [7],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.5
        },

        {
            id: "multiplication-8",

            title:
                "courses.multiplication.multiplication8.title",
            description:
                "courses.multiplication.multiplication8.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [8],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.5
        },

        {
            id: "multiplication-9",

            title:
                "courses.multiplication.multiplication9.title",
            description:
                "courses.multiplication.multiplication9.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [9],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.5
        },

        {
            id: "multiplication-10",

            title:
                "courses.multiplication.multiplication10.title",
            description:
                "courses.multiplication.multiplication10.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [10],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.2
        },

        {
            id: "multiplication-mixed",

            title:
                "courses.multiplication.mixed.title",
            description:
                "courses.multiplication.mixed.description",

            type: "practice",

            practice: {
                generator: "multiplication-table",
                interaction: "number-input",

                settings: {
                    tables: [
                        2, 3, 4, 5, 6,
                        7, 8, 9, 10
                    ],
                    maxMultiplier: 10
                },

                problemCount: 10
            },
            difficultyMultiplier: 1.5
        }
    ]
    },

    division: {
        id: "division",

        title: "courses.division.title",
        description: "courses.division.description",

        icon: "÷",

        lessons: [

            {
                id: "division-intro",

                title: "courses.division.intro.title",
                description:
                    "courses.division.intro.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.division.intro.content.text1"
                    },

                    {
                        type: "example",
                        expression: "6 ÷ 2 = 3",
                        explanation:
                            "courses.division.intro.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.division.intro.content.text2"
                    }
                ]
            },

            {
                id: "division-sharing",

                title:
                    "courses.division.sharing.title",
                description:
                    "courses.division.sharing.description",

                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [2, 3, 4, 5],
                        maxQuotient: 5
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.5
            },

            {
                id: "division-facts-2-5",

                title:
                    "courses.division.facts2To5.title",
                description:
                    "courses.division.facts2To5.description",

                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [2, 3, 4, 5],
                        maxQuotient: 10
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.5
            },

            {
                id: "division-facts-6-10",

                title:
                    "courses.division.facts6To10.title",
                description:
                    "courses.division.facts6To10.description",

                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [6, 7, 8, 9, 10],
                        maxQuotient: 10
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.6
            },

            {
                id: "division-mixed",

                title:
                    "courses.division.mixed.title",
                description:
                    "courses.division.mixed.description",

                type: "practice",

                practice: {
                    generator: "division",
                    interaction: "number-input",

                    settings: {
                        divisors: [
                            2, 3, 4, 5,
                            6, 7, 8, 9, 10
                        ],
                        maxQuotient: 10
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.6
            }
        ]
    },

    "roman-numerals": {
        id: "roman-numerals",

        title: "courses.romanNumerals.title",
        description:
            "courses.romanNumerals.description",

        icon: "Ⅻ",

        lessons: [

            {
                id: "roman-numerals-intro",

                title:
                    "courses.romanNumerals.intro.title",
                description:
                    "courses.romanNumerals.intro.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.romanNumerals.intro.content.text1"
                    },

                    {
                        type: "example",
                        expression:
                            "I = 1, V = 5, X = 10",
                        explanation:
                            "courses.romanNumerals.intro.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.romanNumerals.intro.content.text2"
                    }
                ]
            },

            {
                id: "roman-numerals-symbols",

                title:
                    "courses.romanNumerals.symbols.title",
                description:
                    "courses.romanNumerals.symbols.description",

                type: "practice",

                practice: {
                    generator: "roman-symbols",
                    interaction: "multiple-choice",

                    settings: {},

                    problemCount: 10
                },
                difficultyMultiplier: 1.2
            },

            {
                id: "roman-numerals-combining",

                title:
                    "courses.romanNumerals.combining.title",
                description:
                    "courses.romanNumerals.combining.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.romanNumerals.combining.content.text1"
                    },

                    {
                        type: "example",
                        expression:
                            "VI = 6",
                        explanation:
                            "courses.romanNumerals.combining.content.example1"
                    },

                    {
                        type: "example",
                        expression:
                            "XIII = 13",
                        explanation:
                            "courses.romanNumerals.combining.content.example2"
                    }
                ]
            },

            {
                id: "roman-numerals-addition",

                title:
                    "courses.romanNumerals.addition.title",
                description:
                    "courses.romanNumerals.addition.description",

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
                },
                difficultyMultiplier: 1.3
            },

            {
                id: "roman-numerals-subtraction",

                title:
                    "courses.romanNumerals.subtraction.title",
                description:
                    "courses.romanNumerals.subtraction.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.romanNumerals.subtraction.content.text1"
                    },

                    {
                        type: "example",
                        expression:
                            "IV = 4",
                        explanation:
                            "courses.romanNumerals.subtraction.content.example1"
                    },

                    {
                        type: "example",
                        expression:
                            "IX = 9",
                        explanation:
                            "courses.romanNumerals.subtraction.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.romanNumerals.subtraction.content.text2"
                    }
                ]
            },

            {
                id: "roman-numerals-repetition",

                title:
                    "courses.romanNumerals.repetition.title",
                description:
                    "courses.romanNumerals.repetition.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.romanNumerals.repetition.content.text1"
                    },

                    {
                        type: "example",
                        expression:
                            "I, II, III",
                        explanation:
                            "courses.romanNumerals.repetition.content.example1"
                    },

                    {
                        type: "example",
                        expression:
                            "XXX = 30",
                        explanation:
                            "courses.romanNumerals.repetition.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.romanNumerals.repetition.content.text2"
                    }
                ]
            },

            {
                id: "roman-numerals-to-arabic",

                title:
                    "courses.romanNumerals.toArabic.title",
                description:
                    "courses.romanNumerals.toArabic.description",

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
                },
                difficultyMultiplier: 1.5
            },

            {
                id: "roman-numerals-to-roman",

                title:
                    "courses.romanNumerals.toRoman.title",
                description:
                    "courses.romanNumerals.toRoman.description",

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
                },
                difficultyMultiplier: 1.4
            }
        ]
    },
    
    "advanced-numbers": {
        id: "advanced-numbers",

        title: "courses.advancedNumbers.title",
        description:
            "courses.advancedNumbers.description",

        icon: "#",

        lessons: [

            {
                id: "advanced-numbers-reading",

                title:
                    "courses.advancedNumbers.reading.title",
                description:
                    "courses.advancedNumbers.reading.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.reading.content.text1"
                    },

                    {
                        type: "example",
                        expression: "1 234",
                        explanation:
                            "courses.advancedNumbers.reading.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.reading.content.text2"
                    },

                    {
                        type: "example",
                        expression: "42 305",
                        explanation:
                            "courses.advancedNumbers.reading.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.reading.content.text3"
                    },

                    {
                        type: "example",
                        expression: "507 021",
                        explanation:
                            "courses.advancedNumbers.reading.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.reading.content.text4"
                    }
                ]
            },

            {
                id: "advanced-numbers-reading-practice",

                title:
                    "courses.advancedNumbers.readingPractice.title",
                description:
                    "courses.advancedNumbers.readingPractice.description",

                type: "practice",

                practice: {
                    generator: "number-reading",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.75
            },

            {
                id: "advanced-numbers-writing",

                title:
                    "courses.advancedNumbers.writing.title",
                description:
                    "courses.advancedNumbers.writing.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.writing.content.text1"
                    },

                    {
                        type: "example",
                        expression:
                            "3 215",
                        explanation:
                            "courses.advancedNumbers.writing.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.writing.content.text2"
                    },

                    {
                        type: "example",
                        expression:
                            "42,005",
                        explanation:
                            "courses.advancedNumbers.writing.content.example2"
                    }
                ]
            },

            {
                id: "advanced-numbers-writing-practice",

                title:
                    "courses.advancedNumbers.writingPractice.title",
                description:
                    "courses.advancedNumbers.writingPractice.description",

                type: "practice",

                practice: {
                    generator: "number-writing",
                    interaction: "number-input",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                },

                difficultyMultiplier: 1.75
            },

            {
                id: "advanced-numbers-comparison",

                title:
                    "courses.advancedNumbers.comparison.title",
                description:
                    "courses.advancedNumbers.comparison.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.comparison.content.text1"
                    },

                    {
                        type: "example",
                        expression: "8 > 5",
                        explanation:
                            "courses.advancedNumbers.comparison.content.example1"
                    },

                    {
                        type: "example",
                        expression: "3 < 7",
                        explanation:
                            "courses.advancedNumbers.comparison.content.example2"
                    },

                    {
                        type: "example",
                        expression: "6 = 6",
                        explanation:
                            "courses.advancedNumbers.comparison.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.comparison.content.text2"
                    },

                    {
                        type: "example",
                        expression: "9,999 < 10,000",
                        explanation:
                            "courses.advancedNumbers.comparison.content.example4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.comparison.content.text3"
                    },

                    {
                        type: "example",
                        expression: "42,315 > 41,999",
                        explanation:
                            "courses.advancedNumbers.comparison.content.example5"
                    }
                ]
            },

            {
                id: "advanced-numbers-comparison-practice",

                title:
                    "courses.advancedNumbers.comparisonPractice.title",
                description:
                    "courses.advancedNumbers.comparisonPractice.description",

                type: "practice",

                practice: {
                    generator: "number-comparison",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.6
            },

            {
                id: "advanced-numbers-place-value",

                title:
                    "courses.advancedNumbers.placeValue.title",
                description:
                    "courses.advancedNumbers.placeValue.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.placeValue.content.text1"
                    },

                    {
                        type: "example",
                        expression: "5,432",
                        explanation:
                            "courses.advancedNumbers.placeValue.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.placeValue.content.text2"
                    },

                    {
                        type: "example",
                        expression: "325,407",
                        explanation:
                            "courses.advancedNumbers.placeValue.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.placeValue.content.text3"
                    },

                    {
                        type: "example",
                        expression: "4,052",
                        explanation:
                            "courses.advancedNumbers.placeValue.content.example3"
                    }
                ]
            },

            {
                id: "advanced-numbers-place-value-practice",

                title:
                    "courses.advancedNumbers.placeValuePractice.title",
                description:
                    "courses.advancedNumbers.placeValuePractice.description",

                type: "practice",

                practice: {
                    generator: "place-value",
                    interaction: "multiple-choice",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.4
            },

            {
                id: "advanced-numbers-expanded-form",

                title:
                    "courses.advancedNumbers.expandedForm.title",
                description:
                    "courses.advancedNumbers.expandedForm.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.expandedForm.content.text1"
                    },

                    {
                        type: "example",
                        expression:
                            "3,527 = 3,000 + 500 + 20 + 7",
                        explanation:
                            "courses.advancedNumbers.expandedForm.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.expandedForm.content.text2"
                    },

                    {
                        type: "example",
                        expression:
                            "4,052 = 4,000 + 50 + 2",
                        explanation:
                            "courses.advancedNumbers.expandedForm.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.expandedForm.content.text3"
                    },

                    {
                        type: "example",
                        expression:
                            "20,000 + 3,000 + 400 + 6 = 23,406",
                        explanation:
                            "courses.advancedNumbers.expandedForm.content.example3"
                    }
                ]
            },

            {
                id: "advanced-numbers-expanded-form-practice",

                title:
                    "courses.advancedNumbers.expandedFormPractice.title",
                description:
                    "courses.advancedNumbers.expandedFormPractice.description",

                type: "practice",

                practice: {
                    generator: "expanded-form",
                    interaction: "number-input",

                    settings: {
                        min: 0,
                        max: 1000000
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.4
            },

            {
                id: "advanced-numbers-number-groups",

                title:
                    "courses.advancedNumbers.numberGroups.title",
                description:
                    "courses.advancedNumbers.numberGroups.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.numberGroups.content.text1"
                    },

                    {
                        type: "example",
                        expression:
                            "1–100",
                        explanation:
                            "courses.advancedNumbers.numberGroups.content.example1"
                    },

                    {
                        type: "example",
                        expression:
                            "101–200",
                        explanation:
                            "courses.advancedNumbers.numberGroups.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.numberGroups.content.text2"
                    },

                    {
                        type: "example",
                        expression:
                            "1–1,000",
                        explanation:
                            "courses.advancedNumbers.numberGroups.content.example3"
                    },

                    {
                        type: "example",
                        expression:
                            "833",
                        explanation:
                            "courses.advancedNumbers.numberGroups.content.example4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.numberGroups.content.text3"
                    },

                    {
                        type: "example",
                        expression:
                            "34",
                        explanation:
                            "courses.advancedNumbers.numberGroups.content.example5"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedNumbers.numberGroups.content.text4"
                    },

                    {
                        type: "example",
                        expression:
                            "101–200",
                        explanation:
                            "courses.advancedNumbers.numberGroups.content.example6"
                    }
                ]
            },

            {
                id: "advanced-numbers-number-groups-practice",

                title:
                    "courses.advancedNumbers.numberGroupsPractice.title",
                description:
                    "courses.advancedNumbers.numberGroupsPractice.description",

                type: "practice",

                practice: {
                    generator: "number-groups",
                    interaction: "multiple-choice",

                    settings: {
                        max: 1000000
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 1.8
            }
        ]
    },

    "advanced-addition": {
        id: "advanced-addition",

        title: "courses.advancedAddition.title",
        description:
            "courses.advancedAddition.description",

        icon: "+",

        lessons: [

            {
                id: "advanced-addition-no-carry",

                title:
                    "courses.advancedAddition.noCarry.title",
                description:
                    "courses.advancedAddition.noCarry.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.noCarry.content.text1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.noCarry.content.text2"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "243",
                            "125",
                            "368",
                            []
                        ),

                        explanation:
                            "courses.advancedAddition.noCarry.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.noCarry.content.text3"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "3421",
                            "1253",
                            "4674",
                            []
                        ),

                        explanation:
                            "courses.advancedAddition.noCarry.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.noCarry.content.text4"
                    }
                ]
            },

            {
                id: "advanced-addition-no-carry-practice",

                title:
                    "courses.advancedAddition.noCarryPractice.title",
                description:
                    "courses.advancedAddition.noCarryPractice.description",

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
                },
                difficultyMultiplier: 2.0
            },

            {
                id: "advanced-addition-one-carry",

                title:
                    "courses.advancedAddition.oneCarry.title",
                description:
                    "courses.advancedAddition.oneCarry.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.oneCarry.content.text1"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "247",
                            "135",
                            "382",
                            [1]
                        ),

                        explanation:
                            "courses.advancedAddition.oneCarry.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.oneCarry.content.text2"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "247",
                            "135",
                            "382",
                            [1]
                        ),

                        explanation:
                            "courses.advancedAddition.oneCarry.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.oneCarry.content.text3"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "356",
                            "127",
                            "483",
                            [1]
                        ),

                        explanation:
                            "courses.advancedAddition.oneCarry.content.example3"
                    }
                ]
            },

            {
                id: "advanced-addition-one-carry-practice",

                title:
                    "courses.advancedAddition.oneCarryPractice.title",
                description:
                    "courses.advancedAddition.oneCarryPractice.description",

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
                },
                difficultyMultiplier: 2.2
            },

            {
                id: "advanced-addition-multiple-carries",

                title:
                    "courses.advancedAddition.multipleCarries.title",
                description:
                    "courses.advancedAddition.multipleCarries.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.multipleCarries.content.text1"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "587",
                            "694",
                            "1281",
                            [1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.multipleCarries.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.multipleCarries.content.text2"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "4682",
                            "3759",
                            "8441",
                            [1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.multipleCarries.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.multipleCarries.content.text3"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "999",
                            "888",
                            "1887",
                            [1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.multipleCarries.content.example3"
                    }
                ]
            },

            {
                id: "advanced-addition-multiple-carries-practice",

                title:
                    "courses.advancedAddition.multipleCarriesPractice.title",
                description:
                    "courses.advancedAddition.multipleCarriesPractice.description",

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
                },
                difficultyMultiplier: 2.4
            },

            {
                id: "advanced-addition-carry-through-zero",

                title:
                    "courses.advancedAddition.carryThroughZero.title",
                description:
                    "courses.advancedAddition.carryThroughZero.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.carryThroughZero.content.text1"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "109",
                            "1",
                            "110",
                            [1]
                        ),

                        explanation:
                            "courses.advancedAddition.carryThroughZero.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.carryThroughZero.content.text2"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "999",
                            "1",
                            "1000",
                            [1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.carryThroughZero.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.carryThroughZero.content.text3"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "4999",
                            "1",
                            "5000",
                            [1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.carryThroughZero.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.carryThroughZero.content.text4"
                    }
                ]
            },

            {
                id: "advanced-addition-carry-through-zero-practice",

                title:
                    "courses.advancedAddition.carryThroughZeroPractice.title",
                description:
                    "courses.advancedAddition.carryThroughZeroPractice.description",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        carryThroughZero: true
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 2.4
            },

            {
                id: "advanced-addition-different-lengths",

                title:
                    "courses.advancedAddition.differentLengths.title",
                description:
                    "courses.advancedAddition.differentLengths.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.differentLengths.content.text1"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "4826",
                            "397",
                            "5223",
                            [1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.differentLengths.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.differentLengths.content.text2"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "4826",
                            "397",
                            "5223",
                            [1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.differentLengths.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.differentLengths.content.text3"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "58",
                            "12746",
                            "12804",
                            [1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.differentLengths.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.differentLengths.content.text4"
                    }
                ]
            },

            {
                id: "advanced-addition-different-lengths-practice",

                title:
                    "courses.advancedAddition.differentLengthsPractice.title",
                description:
                    "courses.advancedAddition.differentLengthsPractice.description",

                type: "practice",

                practice: {
                    generator: "advanced-addition",
                    interaction: "number-input",

                    settings: {
                        max: 10000,
                        sameLength: false
                    },

                    problemCount: 10
                },
                difficultyMultiplier: 2.4
            },

            {
                id: "advanced-addition-large-numbers",

                title:
                    "courses.advancedAddition.largeNumbers.title",
                description:
                    "courses.advancedAddition.largeNumbers.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.largeNumbers.content.text1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.largeNumbers.content.text2"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "384729",
                            "76845",
                            "461574",
                            [1, 0, 1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.largeNumbers.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.largeNumbers.content.text3"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "384729",
                            "76845",
                            "461574",
                            [1, 0, 1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.largeNumbers.content.example2"
                    },

                    {
                        type: "example",

                        expression: createAdditionSvg(
                            "999999",
                            "1",
                            "1000000",
                            [1, 1, 1, 1, 1, 1]
                        ),

                        explanation:
                            "courses.advancedAddition.largeNumbers.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.largeNumbers.content.text4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedAddition.largeNumbers.content.text5"
                    }
                ]
            },

            {
                id: "advanced-addition-large-numbers-practice",

                title:
                    "courses.advancedAddition.largeNumbersPractice.title",
                description:
                    "courses.advancedAddition.largeNumbersPractice.description",

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
                }, 
                difficultyMultiplier: 2.8
            }
        ]
    },

    "advanced-subtraction": {
        id: "advanced-subtraction",

        title: "courses.advancedSubtraction.title",
        description: "courses.advancedSubtraction.description",

        icon: "−",

        lessons: [

            {
                id: "advanced-subtraction-no-borrowing",

                title:
                    "courses.advancedSubtraction.noBorrowing.title",

                description:
                    "courses.advancedSubtraction.noBorrowing.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.noBorrowing.content.text1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.noBorrowing.content.text2"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "568",
                            "243",
                            "325",
                            []
                        ),
                        explanation:
                            "courses.advancedSubtraction.noBorrowing.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.noBorrowing.content.text3"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "7842",
                            "3511",
                            "4331",
                            []
                        ),
                        explanation:
                            "courses.advancedSubtraction.noBorrowing.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.noBorrowing.content.text4"
                    }
                ]
            },

            {
                id: "advanced-subtraction-no-borrowing-practice",

                title:
                    "courses.advancedSubtraction.noBorrowingPractice.title",

                description:
                    "courses.advancedSubtraction.noBorrowingPractice.description",

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
                },
                difficultyMultiplier: 2.0
            },

            {
                id: "advanced-subtraction-one-borrowing",

                title:
                    "courses.advancedSubtraction.oneBorrowing.title",

                description:
                    "courses.advancedSubtraction.oneBorrowing.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.oneBorrowing.content.text1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.oneBorrowing.content.text2"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "52",
                            "27",
                            "25",
                            [1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.oneBorrowing.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.oneBorrowing.content.text3"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "63",
                            "28",
                            "35",
                            [1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.oneBorrowing.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.oneBorrowing.content.text4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.oneBorrowing.content.text5"
                    }
                ]
            },

            {
                id: "advanced-subtraction-one-borrowing-practice",

                title:
                    "courses.advancedSubtraction.oneBorrowingPractice.title",

                description:
                    "courses.advancedSubtraction.oneBorrowingPractice.description",

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
                },
                difficultyMultiplier: 2.2
            },

            {
                id: "advanced-subtraction-multiple-borrowings",

                title:
                    "courses.advancedSubtraction.multipleBorrowings.title",

                description:
                    "courses.advancedSubtraction.multipleBorrowings.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.multipleBorrowings.content.text1"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "743",
                            "286",
                            "457",
                            [1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.multipleBorrowings.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.multipleBorrowings.content.text2"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "8652",
                            "4378",
                            "4274",
                            [1, 1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.multipleBorrowings.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.multipleBorrowings.content.text3"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "9321",
                            "4876",
                            "4445",
                            [1, 1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.multipleBorrowings.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.multipleBorrowings.content.text4"
                    }
                ]
            },

            {
                id: "advanced-subtraction-multiple-borrowings-practice",

                title:
                    "courses.advancedSubtraction.multipleBorrowingsPractice.title",

                description:
                    "courses.advancedSubtraction.multipleBorrowingsPractice.description",

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
                },
                difficultyMultiplier: 2.4
            },

            {
                id: "advanced-subtraction-borrow-through-zero",

                title:
                    "courses.advancedSubtraction.borrowThroughZero.title",

                description:
                    "courses.advancedSubtraction.borrowThroughZero.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text2"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "52",
                            "27",
                            "25",
                            [1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.borrowThroughZero.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text3"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "502",
                            "178",
                            "324",
                            [1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.borrowThroughZero.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text4"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "502",
                            "178",
                            "324",
                            [1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.borrowThroughZero.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text5"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text6"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "1000",
                            "1",
                            "999",
                            [1, 1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.borrowThroughZero.content.example4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text7"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text8"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text9"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.borrowThroughZero.content.text10"
                    }
                ]
            },

            {
                id: "advanced-subtraction-borrow-through-zero-practice",

                title:
                    "courses.advancedSubtraction.borrowThroughZeroPractice.title",

                description:
                    "courses.advancedSubtraction.borrowThroughZeroPractice.description",

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
                },
                difficultyMultiplier: 2.4
            },

            {
                id: "advanced-subtraction-different-lengths",

                title:
                    "courses.advancedSubtraction.differentLengths.title",

                description:
                    "courses.advancedSubtraction.differentLengths.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.differentLengths.content.text1"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "4826",
                            "397",
                            "4429",
                            [1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.differentLengths.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.differentLengths.content.text2"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "4826",
                            "397",
                            "4429",
                            [1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.differentLengths.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.differentLengths.content.text3"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "12746",
                            "58",
                            "12688",
                            [1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.differentLengths.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.differentLengths.content.text4"
                    }
                ]
            },

            {
                id: "advanced-subtraction-different-lengths-practice",

                title:
                    "courses.advancedSubtraction.differentLengthsPractice.title",

                description:
                    "courses.advancedSubtraction.differentLengthsPractice.description",

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
                },
                difficultyMultiplier: 2.4
            },

            {
                id: "advanced-subtraction-large-numbers",

                title:
                    "courses.advancedSubtraction.largeNumbers.title",

                description:
                    "courses.advancedSubtraction.largeNumbers.description",

                type: "explanation",

                content: [
                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.largeNumbers.content.text1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.largeNumbers.content.text2"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "684729",
                            "276845",
                            "407884",
                            [1, 1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.largeNumbers.content.example1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.largeNumbers.content.text3"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "800000",
                            "1",
                            "799999",
                            [1, 1, 1, 1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.largeNumbers.content.example2"
                    },

                    {
                        type: "example",
                        expression: createSubtractionSvg(
                            "1000000",
                            "1",
                            "999999",
                            [1, 1, 1, 1, 1, 1]
                        ),
                        explanation:
                            "courses.advancedSubtraction.largeNumbers.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.largeNumbers.content.text4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.advancedSubtraction.largeNumbers.content.text5"
                    }
                ]
            },

            {
                id: "advanced-subtraction-large-numbers-practice",

                title:
                    "courses.advancedSubtraction.largeNumbersPractice.title",

                description:
                    "courses.advancedSubtraction.largeNumbersPractice.description",

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
                },
                difficultyMultiplier: 2.8
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