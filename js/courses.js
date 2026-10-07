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
    equations: {
        id: "equations",

        title: "courses.equations.title",

        description:
            "courses.equations.description",

        icon: "=",

        lessons: [

            {
                id: "equations-meaning",

                title:
                    "courses.equations.lessons.meaning.title",

                description:
                    "courses.equations.lessons.meaning.description",

                type: "explanation",

                content: [
                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.meaning.content.text1"
                    },

                    {
                        type: "example",

                        expression: "4 + 3 = 7",

                        explanation:
                            "courses.equations.lessons.meaning.content.example1"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.meaning.content.text2"
                    },

                    {
                        type: "example",

                        expression: "7 = 4 + 3",

                        explanation:
                            "courses.equations.lessons.meaning.content.example2"
                    },

                    {
                        type: "example",

                        expression: "2 + 5 = 4 + 3",

                        explanation:
                            "courses.equations.lessons.meaning.content.example3"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.meaning.content.text3"
                    }
                ]
            },


            {
                id: "equations-meaning-practice",

                title:
                    "courses.equations.lessons.meaningPractice.title",

                description:
                    "courses.equations.lessons.meaningPractice.description",

                type: "practice",

                practice: {
                    generator: "equationEquality",

                    interaction: "multiple-choice",

                    settings: {
                        operations: [
                            "addition"
                        ],

                        equationChoiceProbability: 0.5
                    },

                    problemCount: 10
                },

                difficultyMultiplier: 1
            },


            {
                id: "equations-meaning-all-operations",

                title:
                    "courses.equations.lessons.meaningAllOperations.title",

                description:
                    "courses.equations.lessons.meaningAllOperations.description",

                type: "practice",

                practice: {
                    generator: "equationEquality",

                    interaction: "multiple-choice",

                    settings: {
                        operations: [
                            "addition",
                            "subtraction",
                            "multiplication",
                            "division"
                        ],

                        equationChoiceProbability: 0.5
                    },

                    problemCount: 10
                },

                difficultyMultiplier: 1.1
            },


            {
                id: "equations-variables",

                title:
                    "courses.equations.lessons.variables.title",

                description:
                    "courses.equations.lessons.variables.description",

                type: "explanation",

                content: [
                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.variables.content.text1"
                    },

                    {
                        type: "example",

                        expression: "a = 5",

                        explanation:
                            "courses.equations.lessons.variables.content.example1"
                    },

                    {
                        type: "example",

                        expression: "a + 3 = 5 + 3 = 8",

                        explanation:
                            "courses.equations.lessons.variables.content.example2"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.variables.content.text2"
                    },

                    {
                        type: "example",

                        expression: "a = 4",

                        explanation:
                            "courses.equations.lessons.variables.content.example3"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.variables.content.text3"
                    },

                    {
                        type: "example",

                        expression: "a = 2,   b = 2a",

                        explanation:
                            "courses.equations.lessons.variables.content.example4"
                    }
                ]
            },


            {
                id: "equations-variables-practice",

                title:
                    "courses.equations.lessons.variablesPractice.title",

                description:
                    "courses.equations.lessons.variablesPractice.description",

                type: "practice",

                practice: {
                    generator: "variableSubstitution",

                    interaction: "number-input",

                    settings: {
                        operations: [
                            "addition",
                            "subtraction",
                            "multiplication",
                            "division"
                        ]
                    },

                    problemCount: 10
                },

                difficultyMultiplier: 1.1
            },


            {
                id: "equations-preserving",

                title:
                    "courses.equations.lessons.preserving.title",

                description:
                    "courses.equations.lessons.preserving.description",

                type: "explanation",

                content: [
                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.preserving.content.text1"
                    },

                    {
                        type: "example",

                        expression: "5 = 5",

                        explanation:
                            "courses.equations.lessons.preserving.content.example1"
                    },

                    {
                        type: "example",

                        expression: "5 + 3 = 5 + 3",

                        explanation:
                            "courses.equations.lessons.preserving.content.example2"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.preserving.content.text2"
                    },

                    {
                        type: "example",

                        expression: "7 = 7",

                        explanation:
                            "courses.equations.lessons.preserving.content.example3"
                    },

                    {
                        type: "example",

                        expression: "3 = 3",

                        explanation:
                            "courses.equations.lessons.preserving.content.example4"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.preserving.content.text3"
                    }
                ]
            },


            {
                id: "equations-solving",

                title:
                    "courses.equations.lessons.solving.title",

                description:
                    "courses.equations.lessons.solving.description",

                type: "explanation",

                content: [
                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.solving.content.text1"
                    },

                    {
                        type: "example",

                        expression: "x + 3 = 5",

                        explanation:
                            "courses.equations.lessons.solving.content.example1"
                    },

                    {
                        type: "example",

                        expression: "x + 3 − 3 = 5 − 3",

                        explanation:
                            "courses.equations.lessons.solving.content.example2"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.solving.content.text2"
                    },

                    {
                        type: "example",

                        expression: "4x = 20",

                        explanation:
                            "courses.equations.lessons.solving.content.example3"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.solving.content.text3"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.solving.content.text4"
                    },

                    {
                        type: "text",

                        text:
                            "courses.equations.lessons.solving.content.text5"
                    }
                ]
            },


            {
                id: "equations-solving-all-practice",

                title:
                    "courses.equations.lessons.solvingAllPractice.title",

                description:
                    "courses.equations.lessons.solvingAllPractice.description",

                type: "practice",

                practice: {
                    generator: "linearEquation",

                    interaction: "equation-step",

                    settings: {
                        operations: [
                            "addition",
                            "subtraction",
                            "multiplication",
                            "division"
                        ],

                        operationCount: 1,

                        minSolution: 1,
                        maxSolution: 10,

                        minOperand: 1,
                        maxOperand: 10
                    },

                    problemCount: 10
                },

                difficultyMultiplier: 1.3
            },


            {
                id: "equations-solving-two-operations",

                title:
                    "courses.equations.lessons.solvingTwoOperations.title",

                description:
                    "courses.equations.lessons.solvingTwoOperations.description",

                type: "practice",

                practice: {
                    generator: "linearEquation",

                    interaction: "equation-step",

                    settings: {
                        operations: [
                            "addition",
                            "subtraction",
                            "multiplication",
                            "division"
                        ],

                        operationCount: 2,

                        minSolution: 1,
                        maxSolution: 10,

                        minOperand: 1,
                        maxOperand: 5
                    },

                    problemCount: 10
                },

                difficultyMultiplier: 1.5
            }
        ]
        },
    
    geometry: {
        id: "geometry",

        title: "Geometry",

        description:
            "Learn the basic ideas and building blocks of geometry.",

        icon: "π",

        lessons: [

            {
                id: "geometry-basics",

                title:
                    "Geometry Basics",

                description:
                    "Learn about points, lines, segments, and rays.",

                type: "explanation",

                content: [

                    {
                        type: "text",

                        text:
                            "Geometry is the part of mathematics that helps us describe shapes, sizes, positions, and the space around us. We start with a few simple objects that are used to build many of the things we study in geometry."
                    },

                    {
                        type: "text",

                        text:
                            "A point represents an exact position. We draw it as a small dot. A point has no length or width."
                    },

                    {
                        type: "example",

                        expression:
                            createGeometrySvg({
                                width: 200,
                                height: 100,
                                scale: 50,

                                points: [
                                    {
                                        id: "A",
                                        x: 2,
                                        y: 1,
                                        label: "A"
                                    }
                                ]
                            }),

                        explanation:
                            "This is point A. The letter A is its name."
                    },

                    {
                        type: "text",

                        text:
                            "A line is straight and continues forever in both directions. We can use two points on a line to describe it."
                    },

                    {
                        type: "example",

                        expression:
                            createGeometrySvg({
                                width: 300,
                                height: 100,
                                scale: 50,

                                points: [
                                    {
                                        id: "A",
                                        x: 1,
                                        y: 1,
                                        label: "A"
                                    },
                                    {
                                        id: "B",
                                        x: 4,
                                        y: 1,
                                        label: "B"
                                    }
                                ],

                                lines: [
                                    {
                                        through: ["A", "B"],
                                        label: "l"
                                    }
                                ]
                            }),

                        explanation:
                            "This is line l. Points A and B lie on the line, so we can also describe it as the line through A and B."
                    },

                    {
                        type: "text",

                        text:
                            "A line segment is a part of a line with two endpoints. Unlike a line, a segment does not continue forever."
                    },

                    {
                        type: "example",

                        expression:
                            createGeometrySvg({
                                width: 300,
                                height: 100,
                                scale: 50,

                                points: [
                                    {
                                        id: "A",
                                        x: 1,
                                        y: 1,
                                        label: "A"
                                    },
                                    {
                                        id: "B",
                                        x: 5,
                                        y: 1,
                                        label: "B"
                                    }
                                ],

                                segments: [
                                    {
                                        from: "A",
                                        to: "B",
                                        label: "AB"
                                    }
                                ]
                            }),

                        explanation:
                            "This is segment AB. The points A and B are its endpoints. A segment can be named using the letters of its endpoints."
                    },

                    {
                        type: "text",

                        text:
                            "A ray has one endpoint and continues forever in one direction. We name a ray using its endpoint first."
                    },

                    {
                        type: "example",

                        expression:
                            createGeometrySvg({
                                width: 300,
                                height: 100,
                                scale: 50,

                                points: [
                                    {
                                        id: "A",
                                        x: 1,
                                        y: 1,
                                        label: "A"
                                    },
                                    {
                                        id: "B",
                                        x: 3,
                                        y: 1,
                                        visible: false
                                    }
                                ],

                                rays: [
                                    {
                                        from: "A",
                                        through: "B",
                                        label: "r"
                                    }
                                ]
                            }),

                        explanation:
                            "This is ray Ar. A is its endpoint. It continues forever in only one direction."
                    },

                    {
                        type: "text",

                        text:
                            "Points are usually named with capital letters, such as A, B, and C. Segments can be named using letters of their points, for example AB. Segments can also be named using a single letter, which is usually lower-case, for example b. Rays are usually named using the endpoint and a lower-case letter, for example Ar."
                    }
                ]
            },


            {
                id: "geometry-basics-practice",

                title:
                    "Geometry Basics Practice",

                description:
                    "Identify points, lines, segments, and rays.",

                type: "practice",

                practice: {
                    generator: "geometryBasics",

                    interaction: "multiple-choice",

                    settings: {},

                    problemCount: 10
                },

                difficultyMultiplier: 1
            },

            {
                id: "parts-of-a-shape",

                title:
                    "Parts of a Shape",

                description:
                    "Learn about sides, vertices, and angles.",

                type: "explanation",

                content: [

                    {
                        type: "text",
                        text:
                            "A shape can have sides, vertices, and angles. Let's learn what each of these means."
                    },

                    {
                        type: "text",
                        text:
                            "A side is a line segment that forms part of the outside of a shape. It connects two vertices."
                    },

                    {
                        type: "example",
                        expression:
                            createGeometrySvg({
                                width: 300,
                                height: 220,
                                scale: 40,

                                points: [
                                    { id: "A", x: 1, y: 1, label: "A" },
                                    { id: "B", x: 5, y: 1, label: "B" },
                                    { id: "C", x: 5, y: 4, label: "C" },
                                    { id: "D", x: 1, y: 4, label: "D" }
                                ],

                                segments: [
                                    { from: "A", to: "B", label: "AB" },
                                    { from: "B", to: "C" },
                                    { from: "C", to: "D" },
                                    { from: "D", to: "A" }
                                ]
                            }),

                        explanation:
                            "AB is a side of the shape. It connects vertices A and B."
                    },

                    {
                        type: "text",
                        text:
                            "A vertex is a point where two sides meet. A vertex is one of the corners of a shape."
                    },

                    {
                        type: "example",
                        expression:
                            createGeometrySvg({
                                width: 300,
                                height: 220,
                                scale: 40,

                                points: [
                                    { id: "A", x: 1, y: 1, label: "A" },
                                    { id: "B", x: 5, y: 1, label: "B" },
                                    { id: "C", x: 5, y: 4, label: "C" },
                                    { id: "D", x: 1, y: 4, label: "D" }
                                ],

                                segments: [
                                    { from: "A", to: "B" },
                                    { from: "B", to: "C" },
                                    { from: "C", to: "D" },
                                    { from: "D", to: "A" }
                                ]
                            }),

                        explanation:
                            "B is a vertex because sides AB and BC meet at B."
                    },

                    {
                        type: "text",
                        text:
                            "An angle is the opening between two sides that meet at a vertex."
                    },

                    {
                        type: "example",
                        expression:
                            createGeometrySvg({
                                width: 300,
                                height: 220,
                                scale: 40,

                                points: [
                                    { id: "A", x: 1, y: 1, label: "A" },
                                    { id: "B", x: 5, y: 1, label: "B" },
                                    { id: "C", x: 5, y: 4, label: "C" },
                                    { id: "D", x: 1, y: 4, label: "D" }
                                ],

                                segments: [
                                    { from: "A", to: "B" },
                                    { from: "B", to: "C" },
                                    { from: "C", to: "D" },
                                    { from: "D", to: "A" }
                                ],

                                angles: [
                                    {
                                        vertex: "B",
                                        from: "A",
                                        to: "C",
                                        label: "ABC"
                                    }
                                ]
                            }),

                        explanation:
                            "Angle ABC is the angle at vertex B. It is formed by sides BA and BC."
                    },

                    {
                        type: "text",
                        text:
                            "We can name a side using the letters of its endpoints. For example, the side connecting A and B is side AB."
                    },

                    {
                        type: "text",
                        text:
                            "We can name a vertex using its letter. For example, B is the name of this vertex."
                    },

                    {
                        type: "text",
                        text:
                            "We can name an angle using three letters. The letter for the vertex goes in the middle. For example, angle ABC has vertex B."
                    },

                    {
                        type: "example",
                        expression:
                            createGeometrySvg({
                                width: 360,
                                height: 260,
                                scale: 45,

                                points: [
                                    { id: "A", x: 1, y: 2, label: "A" },
                                    { id: "B", x: 3, y: 1, label: "B" },
                                    { id: "C", x: 6, y: 1.5, label: "C" },
                                    { id: "D", x: 5, y: 4, label: "D" },
                                    { id: "E", x: 2, y: 5, label: "E" }
                                ],

                                segments: [
                                    { from: "A", to: "B" },
                                    { from: "B", to: "C" },
                                    { from: "C", to: "D" },
                                    { from: "D", to: "E" },
                                    { from: "E", to: "A" }
                                ],

                                angles: [
                                    {
                                        vertex: "A",
                                        from: "E",
                                        to: "B",
                                        label: "EAB"
                                    },
                                    {
                                        vertex: "B",
                                        from: "A",
                                        to: "C",
                                        label: "ABC"
                                    },
                                    {
                                        vertex: "C",
                                        from: "B",
                                        to: "D",
                                        label: "BCD"
                                    },
                                    {
                                        vertex: "D",
                                        from: "C",
                                        to: "E",
                                        label: "CDE"
                                    },
                                    {
                                        vertex: "E",
                                        from: "D",
                                        to: "A",
                                        label: "DEA"
                                    }
                                ]
                            }),

                        explanation:
                            "This shape has 5 sides, 5 vertices, and 5 angles. Its vertices are A, B, C, D, and E. Its sides are AB, BC, CD, DE, and EA. Its angles are EAB, ABC, BCD, CDE, and DEA."
                    },

                    {
                        type: "text",
                        text:
                            "When you look at a shape, you can find its sides by following its outside boundary. The points where the sides meet are its vertices, and the openings at those vertices are its angles."
                    }
                ]
            },
            
            {
                id: "parts-of-a-shape-practice",

                title:
                    "Parts of a Shape Practice",

                description:
                    "Practice identifying sides, vertices, and angles.",

                type: "practice",

                practice: {
                    generator: "shapeParts",
                    interaction: "multiple-choice",
                    problemCount: 10
                },

                difficultyMultiplier: 1
            },
{
    id: "angles",

    title:
        "Angles",

    description:
        "Learn about acute, right, obtuse, and straight angles.",

    type: "explanation",

    content: [

        {
            type: "text",
            text:
                "An angle is formed when two sides meet at a vertex. We can describe an angle by how wide its opening is."
        },

        {
            type: "text",
            text:
                "An acute angle is smaller than a right angle. Its opening is less than 90°."
        },

        {
    type: "example",
    expression:
        createGeometrySvg({
            width: 300,
            height: 200,
            scale: 50,

            points: [
                { id: "A", x: 1, y: 3 },
                { id: "B", x: 3, y: 3 },
                { id: "C", x: 1, y: 1 }
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
                    label: "45°"
                }
            ]
        }),

    explanation:
        "This is an acute angle. Its opening is smaller than 90°."
},

        {
            type: "text",
            text:
                "A right angle is exactly 90°. It looks like the corner of a square."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 200,
                    scale: 50,

                    points: [
                        { id: "A", x: 1, y: 3 },
                        { id: "B", x: 3, y: 3 },
                        { id: "C", x: 3, y: 1 }
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
                            label: "90°"
                        }
                    ]
                }),

            explanation:
                "This is a right angle. Its opening is exactly 90°."
        },

        {
            type: "text",
            text:
                "An obtuse angle is larger than a right angle but smaller than a straight angle. Its opening is between 90° and 180°."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 200,
                    scale: 50,

                    points: [
                        { id: "A", x: 1, y: 2 },
                        { id: "B", x: 3, y: 3 },
                        { id: "C", x: 5, y: 1 }
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
                            label: "120°"
                        }
                    ]
                }),

            explanation:
                "This is an obtuse angle. Its opening is between 90° and 180°."
        },

        {
            type: "text",
            text:
                "A straight angle is exactly 180°. Its two sides point in opposite directions and form a straight line."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 200,
                    scale: 50,

                    points: [
                        { id: "A", x: 1, y: 2, label: "A" },
                        { id: "B", x: 3, y: 2, label: "B" },
                        { id: "C", x: 5, y: 2, label: "C" }
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
                            label: "180°"
                        }
                    ]
                }),

            explanation:
                "This is a straight angle. Its opening is exactly 180°."
        },

        {
            type: "text",
            text:
                "Remember: acute angles are less than 90°, right angles are 90°, obtuse angles are between 90° and 180°, and straight angles are 180°."
        }
    ]
},
{
    id: "angles-practice",

    title:
        "Angles Practice",

    description:
        "Practice classifying angles.",

    type: "practice",

    practice: {
        generator: "angles",
        interaction: "multiple-choice",
        problemCount: 10
    },

    difficultyMultiplier: 1
},
{
    id: "adjacent-and-opposite-sides",

    title:
        "Adjacent and Opposite Sides",

    description:
        "Learn which sides and vertices are next to each other.",

    type: "explanation",

    content: [

        {
            type: "text",
            text:
                "Some sides of a shape are next to each other, while other sides are farther apart. We can describe these relationships using the words adjacent and opposite."
        },

        {
            type: "text",
            text:
                "Two sides are adjacent when they meet at a vertex. In other words, they are next to each other."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 360,
                    height: 260,
                    scale: 45,

                    points: [
                        { id: "A", x: 1, y: 1, label: "A" },
                        { id: "B", x: 6, y: 1, label: "B" },
                        { id: "C", x: 5, y: 4, label: "C" },
                        { id: "D", x: 1, y: 4, label: "D" }
                    ],

                    segments: [
                        { from: "A", to: "B", label: "AB" },
                        { from: "B", to: "C", label: "BC" },
                        { from: "C", to: "D", label: "CD" },
                        { from: "D", to: "A", label: "DA" }
                    ]
                }),

            explanation:
                "Sides AB and BC are adjacent because they meet at vertex B. Sides AB and DA are also adjacent because they meet at vertex A."
        },

        {
            type: "text",
            text:
                "Two sides are opposite when they do not meet and are not next to each other."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 360,
                    height: 260,
                    scale: 45,

                    points: [
                        { id: "A", x: 1, y: 1, label: "A" },
                        { id: "B", x: 6, y: 1, label: "B" },
                        { id: "C", x: 5, y: 4, label: "C" },
                        { id: "D", x: 1, y: 4, label: "D" }
                    ],

                    segments: [
                        { from: "A", to: "B", label: "AB" },
                        { from: "B", to: "C", label: "BC" },
                        { from: "C", to: "D", label: "CD" },
                        { from: "D", to: "A", label: "DA" }
                    ]
                }),

            explanation:
                "Sides AB and CD are opposite. They do not meet and there are sides between them."
        },

        {
            type: "text",
            text:
                "Opposite sides only exist when a shape has enough sides for some sides not to meet. A triangle does not have opposite sides."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 240,
                    scale: 45,

                    points: [
                        { id: "A", x: 1, y: 4, label: "A" },
                        { id: "B", x: 4, y: 1, label: "B" },
                        { id: "C", x: 6, y: 4, label: "C" }
                    ],

                    segments: [
                        { from: "A", to: "B", label: "AB" },
                        { from: "B", to: "C", label: "BC" },
                        { from: "C", to: "A", label: "CA" }
                    ]
                }),

            explanation:
                "A triangle has three sides, and every pair of its sides meets at a vertex. Therefore, a triangle has no opposite sides."
        },

        {
            type: "text",
            text:
                "We can also talk about adjacent vertices. Two vertices are adjacent when they are connected by a side."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 360,
                    height: 260,
                    scale: 45,

                    points: [
                        { id: "A", x: 1, y: 1, label: "A" },
                        { id: "B", x: 6, y: 1, label: "B" },
                        { id: "C", x: 5, y: 4, label: "C" },
                        { id: "D", x: 1, y: 4, label: "D" }
                    ],

                    segments: [
                        { from: "A", to: "B" },
                        { from: "B", to: "C" },
                        { from: "C", to: "D" },
                        { from: "D", to: "A" }
                    ]
                }),

            explanation:
                "Vertices A and B are adjacent because side AB connects them. Vertices A and C are not adjacent because there is no side connecting them."
        },

        {
            type: "text",
            text:
                "Remember: adjacent sides meet, while opposite sides do not meet. Adjacent vertices are connected by a side."
        }
    ]
},
{
    id: "adjacent-and-opposite-sides-practice",

    title:
        "Adjacent and Opposite Sides Practice",

    description:
        "Practice identifying adjacent and opposite sides and vertices.",

    type: "practice",

    practice: {
        generator: "adjacentOppositeSides",
        interaction: "multiple-choice",
        problemCount: 10
    },

    difficultyMultiplier: 1
},
{
    id: "length-and-units",

    title:
        "Length and Units",

    description:
        "Learn how we measure length and which units to use.",

    type: "explanation",

    content: [

        {
            type: "text",
            text:
                "Length tells us how long or short something is. We measure length using units."
        },

        {
            type: "text",
            text:
                "A millimetre, written as mm, is a very small unit of length. It is useful for measuring very small things or small distances."
        },

        {
            type: "example",
            expression:
                "1 mm",

            explanation:
                "A millimetre is one thousandth of a metre."
        },

        {
            type: "text",
            text:
                "A centimetre, written as cm, is larger than a millimetre. There are 10 millimetres in 1 centimetre."
        },

        {
            type: "example",
            expression:
                "1 cm = 10 mm",

            explanation:
                "One centimetre is equal to ten millimetres."
        },

        {
            type: "text",
            text:
                "A decimetre, written as dm, is larger than a centimetre. There are 10 centimetres in 1 decimetre."
        },

        {
            type: "example",
            expression:
                "1 dm = 10 cm",

            explanation:
                "One decimetre is equal to ten centimetres."
        },

        {
            type: "text",
            text:
                "A metre, written as m, is a common unit for measuring the length or height of larger objects. There are 10 decimetres in 1 metre."
        },

        {
            type: "example",
            expression:
                "1 m = 10 dm",

            explanation:
                "One metre is equal to ten decimetres."
        },

        {
            type: "text",
            text:
                "A kilometre, written as km, is much larger than a metre. Kilometres are useful for measuring long distances, such as the distance between two places."
        },

        {
            type: "example",
            expression:
                "1 km = 1000 m",

            explanation:
                "One kilometre is equal to one thousand metres."
        },

        {
            type: "text",
            text:
                "We can also convert a measurement from one unit to another. When we convert a measurement, the length stays the same; only the unit changes."
        },

        {
            type: "example",
            expression:
                "2 m = 20 dm = 200 cm = 2000 mm",

            explanation:
                "The same length can be written using different units."
        },

        {
            type: "text",
            text:
                "The unit we choose depends on what we are measuring. Small objects are usually measured in millimetres or centimetres, larger objects in centimetres or metres, and long distances in kilometres."
        },

        {
            type: "text",
            text:
                "Remember: 10 mm = 1 cm, 10 cm = 1 dm, 10 dm = 1 m, and 1000 m = 1 km."
        }
    ]
},
{
    id: "length-and-units-practice",

    title:
        "Length and Units Practice",

    description:
        "Practice converting measurements between different units.",

    type: "practice",

    practice: {
        generator: "lengthUnits",
        interaction: "multiple-choice",
        problemCount: 10
    },

    difficultyMultiplier: 1
},
{
    id: "parallel-and-perpendicular-lines",

    title:
        "Parallel and Perpendicular Lines",

    description:
        "Learn how to recognize parallel and perpendicular lines.",

    type: "explanation",

    content: [

        {
            type: "text",
            text:
                "Sometimes we want to describe how two lines are positioned in relation to each other. Two important relationships are parallel and perpendicular."
        },

        {
            type: "text",
            text:
                "Parallel lines are lines that stay the same distance apart. They do not meet, even if we extend them farther."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 140,
                    scale: 50,

                    points: [
                        { id: "A", x: 1, y: 1, visible: false},
                        { id: "B", x: 5, y: 1, visible: false},
                        { id: "C", x: 1, y: 2, visible: false},
                        { id: "D", x: 5, y: 2, visible: false}
                    ],

                    lines: [
                        {
                            through: ["A", "B"],
                            label: "n"
                        },
                        {
                            through: ["C", "D"],
                            label: "m"
                        }
                    ]
                }),

            explanation:
                "Lines n and m are parallel. They stay the same distance apart and do not meet."
        },

        {
            type: "text",
            text:
                "Parallel lines can appear in familiar shapes. In a rectangle, the top and bottom sides are parallel. The left and right sides are also parallel."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 220,
                    scale: 45,

                    points: [
                        { id: "A", x: 1, y: 1, visible: false},
                        { id: "B", x: 5, y: 1, visible: false},
                        { id: "C", x: 5, y: 4, visible: false},
                        { id: "D", x: 1, y: 4, visible: false}
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B"
                        },
                        {
                            from: "B",
                            to: "C"
                        },
                        {
                            from: "C",
                            to: "D"
                        },
                        {
                            from: "D",
                            to: "A"
                        }
                    ]
                }),

            explanation:
                "The top and bottom sides are parallel. The left and right sides are also parallel."
        },

        {
            type: "text",
            text:
                "Perpendicular lines are lines that meet at a right angle. A right angle measures 90 degrees."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 220,
                    scale: 45,

                    points: [
                        { id: "A", x: 3, y: 1, visible: false},
                        { id: "B", x: 3, y: 4, visible: false},
                        { id: "C", x: 1, y: 2.5, visible: false},
                        { id: "D", x: 5, y: 2.5, visible: false},
                        { id: "O", x: 3, y: 2.5, visible: false}
                    ],

                    lines: [
                        {
                            through: ["B", "A"],
                            label: "n"
                        },
                        {
                            through: ["C", "D"],
                            label: "m"
                        }
                    ],

                    angles: [
                        {
                            vertex: "O",
                            from: "A",
                            to: "C",
                            label: "90°"
                        }
                    ]
                }),

            explanation:
                "Lines n and m are perpendicular because they meet at a right angle."
        },

        {
            type: "text",
            text:
                "Perpendicular lines also appear in familiar shapes. The sides of a rectangle meet at right angles, so neighboring sides are perpendicular."
        },

        {
            type: "text",
            text:
                "Not every pair of lines is parallel or perpendicular. Two lines can meet at an angle that is not a right angle. Such lines are neither parallel nor perpendicular."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 220,
                    scale: 45,

                    points: [
                        { id: "A", x: 1, y: 1 },
                        { id: "B", x: 5, y: 3 },
                        { id: "C", x: 1, y: 4 },
                        { id: "D", x: 5, y: 2 }
                    ],

                    lines: [
                        {
                            through: ["A", "B"],
                            label: "n"
                        },
                        {
                            through: ["C", "D"],
                            label: "m"
                        }
                    ]
                }),

            explanation:
                "These lines meet, but they do not make a right angle. They are neither parallel nor perpendicular."
        },

        {
            type: "text",
            text:
                "Remember: parallel lines do not meet, perpendicular lines meet at a right angle, and other pairs of lines may be neither."
        }
    ]
},
{
    id: "parallel-and-perpendicular-lines-practice",

    title:
        "Parallel and Perpendicular Lines Practice",

    description:
        "Practice identifying parallel, perpendicular, and other pairs of lines.",

    type: "practice",

    practice: {
        generator: "parallelPerpendicularLines",
        interaction: "multiple-choice",
        problemCount: 10
    },

    difficultyMultiplier: 1
},
{
    id: "triangles",
    title:
        "Triangles",

    description:
        "Learn about triangles and how to classify them by their side lengths.",

    type: "explanation",

    content: [

        {
            type: "text",
            text:
                "A triangle is a shape with three sides. It also has three vertices and three angles."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 240,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1,
                            y: 4,
                            label: "A"
                        },
                        {
                            id: "B",
                            x: 5,
                            y: 4,
                            label: "B"
                        },
                        {
                            id: "C",
                            x: 3,
                            y: 1,
                            label: "C"
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "C",
                            to: "B",
                            label: "b"
                        },
                        {
                            from: "A",
                            to: "C",
                            label: "c"
                        }
                    ]
                }),

            explanation:
                "This triangle has three sides, three vertices, and three angles. Its vertices are A, B, and C."
        },

        {
            type: "text",
            text:
                "We can classify triangles by comparing the lengths of their sides. There are three types: equilateral, isosceles, and scalene."
        },

        {
            type: "text",
            text:
                "An equilateral triangle has three sides of equal length."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 240,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1,
                            y: 4,
                            label: "A"
                        },
                        {
                            id: "B",
                            x: 5,
                            y: 4,
                            label: "B"
                        },
                        {
                            id: "C",
                            x: 3,
                            y: 0.536,
                            label: "C"
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "C",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "A",
                            to: "C",
                            label: "a"
                        }
                    ]
                }),

            explanation:
                "All three sides have the same length, so this is an equilateral triangle."
        },

        {
            type: "text",
            text:
                "An isosceles triangle has two sides of equal length. The third side has a different length."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 240,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1,
                            y: 4,
                            label: "A"
                        },
                        {
                            id: "B",
                            x: 5,
                            y: 4,
                            label: "B"
                        },
                        {
                            id: "C",
                            x: 3,
                            y: 1.5,
                            label: "C"
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "b"
                        },
                        {
                            from: "C",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "A",
                            to: "C",
                            label: "a"
                        }
                    ]
                }),

            explanation:
                "The two sides marked a have the same length, while side b has a different length. This is an isosceles triangle."
        },

        {
            type: "text",
            text:
                "A scalene triangle has three sides of different lengths."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 240,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1,
                            y: 4,
                            label: "A"
                        },
                        {
                            id: "B",
                            x: 5,
                            y: 4,
                            label: "B"
                        },
                        {
                            id: "C",
                            x: 4,
                            y: 1,
                            label: "C"
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "C",
                            to: "B",
                            label: "b"
                        },
                        {
                            from: "A",
                            to: "C",
                            label: "c"
                        }
                    ]
                }),

            explanation:
                "The three sides have different lengths, so this is a scalene triangle."
        },

        {
            type: "text",
            text:
                "Remember: equilateral triangles have three equal sides, isosceles triangles have two equal sides, and scalene triangles have no equal sides."
        }
    ]
},
{
    id: "triangles-practice",

    title:
        "Triangles Practice",

    description:
        "Practice classifying triangles by their side lengths.",

    type: "practice",

    practice: {
        generator: "triangles",
        interaction: "multiple-choice",
        problemCount: 10
    },

    difficultyMultiplier: 1
},
{
    id: "common-quadrilaterals",

    title:
        "Common Quadrilaterals",

    description:
        "Learn about squares, rectangles, parallelograms, rhombuses, and trapezoids.",

    type: "explanation",

    content: [

        {
            type: "text",
            text:
                "A quadrilateral is a shape with four sides, four vertices, and four angles. There are several common types of quadrilaterals."
        },

        {
            type: "text",
            text:
                "A square has four equal sides and four right angles. Its opposite sides are parallel."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 260,
                    height: 260,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1,
                            y: 1
                        },
                        {
                            id: "B",
                            x: 5,
                            y: 1
                        },
                        {
                            id: "C",
                            x: 5,
                            y: 5
                        },
                        {
                            id: "D",
                            x: 1,
                            y: 5
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "B",
                            to: "C",
                            label: "a"
                        },
                        {
                            from: "C",
                            to: "D",
                            label: "a"
                        },
                        {
                            from: "D",
                            to: "A",
                            label: "a"
                        }
                    ],

                    angles: [
                        {
                            vertex: "A",
                            from: "D",
                            to: "B",
                            label: "90°"
                        }
                    ]
                }),

            explanation:
                "All four sides are equal, and every angle is a right angle. This is a square."
        },

        {
            type: "text",
            text:
                "A rectangle has four right angles. Its opposite sides are equal and parallel."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 220,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1,
                            y: 1
                        },
                        {
                            id: "B",
                            x: 5,
                            y: 1
                        },
                        {
                            id: "C",
                            x: 5,
                            y: 4
                        },
                        {
                            id: "D",
                            x: 1,
                            y: 4
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "B",
                            to: "C",
                            label: "b"
                        },
                        {
                            from: "C",
                            to: "D",
                            label: "a"
                        },
                        {
                            from: "D",
                            to: "A",
                            label: "b"
                        }
                    ],

                    angles: [
                        {
                            vertex: "A",
                            from: "D",
                            to: "B",
                            label: "90°"
                        }
                    ]
                }),

            explanation:
                "Opposite sides have equal lengths, and all four angles are right angles. This is a rectangle."
        },

        {
            type: "text",
            text:
                "A parallelogram has two pairs of opposite sides that are parallel. Each pair of opposite sides is also equal in length. Its angles do not have to be right angles."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 220,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1.5,
                            y: 1
                        },
                        {
                            id: "B",
                            x: 5.5,
                            y: 1
                        },
                        {
                            id: "C",
                            x: 4.5,
                            y: 4
                        },
                        {
                            id: "D",
                            x: 0.5,
                            y: 4
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "B",
                            to: "C",
                            label: "b"
                        },
                        {
                            from: "C",
                            to: "D",
                            label: "a"
                        },
                        {
                            from: "D",
                            to: "A",
                            label: "b"
                        }
                    ]
                }),

            explanation:
                "The opposite sides are equal and parallel. The angles are not right angles, so this is a parallelogram."
        },

        {
            type: "text",
            text:
                "A rhombus has four equal sides. Its opposite sides are parallel. Its angles do not have to be right angles."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
    width: 300,
    height: 260,
    scale: 50,

    points: [
        {
            id: "A",
            x: 1,
            y: 2
        },
        {
            id: "B",
            x: 4,
            y: 2
        },
        {
            id: "C",
            x: 5,
            y: 4
        },
        {
            id: "D",
            x: 2,
            y: 4
        }
    ],

    segments: [
        {
            from: "A",
            to: "B",
            label: "a"
        },
        {
            from: "B",
            to: "C",
            label: "a"
        },
        {
            from: "C",
            to: "D",
            label: "a"
        },
        {
            from: "D",
            to: "A",
            label: "a"
        }
    ]
}),

            explanation:
                "All four sides are equal, but the angles are not right angles. This is a rhombus."
        },

        {
            type: "text",
            text:
                "A trapezoid has one pair of parallel sides. The other two sides do not have to be parallel."
        },

        {
            type: "example",
            expression:
                createGeometrySvg({
                    width: 300,
                    height: 240,
                    scale: 50,

                    points: [
                        {
                            id: "A",
                            x: 1.5,
                            y: 1
                        },
                        {
                            id: "B",
                            x: 5.0,
                            y: 1
                        },
                        {
                            id: "C",
                            x: 5.5,
                            y: 4
                        },
                        {
                            id: "D",
                            x: 0.5,
                            y: 4
                        }
                    ],

                    segments: [
                        {
                            from: "A",
                            to: "B",
                            label: "a"
                        },
                        {
                            from: "B",
                            to: "C",
                            label: "b"
                        },
                        {
                            from: "C",
                            to: "D",
                            label: "c"
                        },
                        {
                            from: "D",
                            to: "A",
                            label: "d"
                        }
                    ]
                }),

            explanation:
                "The top and bottom sides are parallel. The other two sides are not parallel. This is a trapezoid."
        },

        {
            type: "text",
            text:
                "The properties of these shapes can overlap. For example, a square also has the properties of a rectangle, because it has four right angles and opposite sides that are equal and parallel. That is why one could say that squares are just rectangles that happen to have four equal sides."
        },

        {
            type: "text",
            text:
                "Remember: a square has four equal sides and four right angles; a rectangle has four right angles; a parallelogram has two pairs of parallel and equal opposite sides; a rhombus has four equal sides; and a trapezoid has one pair of parallel sides."
        }
    ]
},
{
    id: "common-quadrilaterals-practice",

    title:
        "Common Quadrilaterals Practice",

    description:
        "Practice identifying common quadrilaterals.",

    type: "practice",

    practice: {
        generator: "commonQuadrilaterals",
        interaction: "multiple-choice",
        problemCount: 10
    },

    difficultyMultiplier: 1
}
            
        ]
    },
"negative-numbers": {
    id: "negative-numbers",

    title: "Negative Numbers",

    description:
        "Learn how negative numbers work and how to use them in arithmetic.",

    icon: "−1",

    lessons: [

        {
            id: "negative-numbers-intro",

            title: "Understanding Negative Numbers",

            description:
                "Learn what negative numbers are and how they compare to other numbers.",

            type: "explanation",

            content: [

                {
                    type: "text",
                    text:
                        "Negative numbers are numbers that are less than zero. They are written with a minus sign in front of them, such as −1, −2, and −5."
                },

                {
                    type: "example",

                    expression:
                        createNumberLineSvg({
                            width: 500,
                            height: 140,

                            min: -5,
                            max: 5,

                            step: 1,

                            ticks: {
                                majorEvery: 1
                            },

                            numbers: {
                                every: 1
                            }
                        }),

                    explanation:
                        "Zero is between the negative and positive numbers. Negative numbers are less than zero, while positive numbers are greater than zero."
                },

                {
                    type: "text",
                    text:
                        "The further a number is below zero, the smaller it is. For example, −5 is smaller than −2 because −5 is further below zero."
                },

                {
                    type: "example",

                    expression:
                        createNumberLineSvg({
                            width: 500,
                            height: 140,

                            min: -5,
                            max: 5,

                            step: 1,

                            ticks: {
                                majorEvery: 1
                            },

                            numbers: {
                                every: 1
                            },

                            points: [
                                {
                                    value: -3,
                                    label: "A"
                                },

                                {
                                    value: 2,
                                    label: "B"
                                }
                            ]
                        }),

                    explanation:
                        "Point A represents −3 and point B represents 2. Since −3 is less than 2, −3 is the smaller number."
                },

                {
                    type: "text",
                    text:
                        "When comparing two negative numbers, the number closer to zero is larger. For example, −2 is greater than −6."
                },

                {
                    type: "example",

                    expression: "−2 > −6",

                    explanation:
                        "Both numbers are negative, but −2 is closer to zero. Therefore, −2 is greater than −6."
                },

                {
                    type: "text",
                    text:
                        "Every number has an opposite number. Opposite numbers are the same distance from zero but have different signs. For example, the opposite of 4 is −4, and the opposite of −7 is 7."
                },

                {
                    type: "example",

                    expression:
                        createNumberLineSvg({
                            width: 500,
                            height: 140,

                            min: -5,
                            max: 5,

                            step: 1,

                            ticks: {
                                majorEvery: 1
                            },

                            numbers: {
                                every: 1
                            },

                            points: [
                                {
                                    value: -4,
                                    label: "−4"
                                },

                                {
                                    value: 4,
                                    label: "4"
                                }
                            ]
                        }),

                    explanation:
                        "−4 and 4 are opposite numbers. They are the same distance from zero, but they are on opposite sides."
                },

                {
                    type: "text",
                    text:
                        "Negative numbers are useful whenever we need to represent a value below zero, such as a temperature below zero or an amount below a starting point."
                }

            ]
        },

        {
            id: "negative-numbers-addition",

            title: "Adding Negative Numbers",

            description:
                "Learn how to add positive and negative numbers.",

            type: "explanation",

            content: [

                {
                    type: "text",
                    text:
                        "Adding a positive number makes a value larger. Adding a negative number makes a value smaller."
                },

                {
                    type: "example",

                    expression: "−3 + 5 = 2",

                    explanation:
                        "Starting at −3 and adding 5 makes the value 5 larger, giving us 2."
                },

                {
                    type: "example",

                    expression: "4 + (−6) = −2",

                    explanation:
                        "Adding −6 makes 4 smaller by 6, so the result is −2."
                },

                {
                    type: "text",
                    text:
                        "When both numbers have the same sign, add their distances from zero and keep that sign."
                },

                {
                    type: "example",

                    expression: "−4 + (−3) = −7",

                    explanation:
                        "Both numbers are negative. Add 4 and 3 to get 7, then keep the negative sign."
                },

                {
                    type: "text",
                    text:
                        "When the numbers have different signs, subtract the smaller distance from zero from the larger one. The sign of the number with the larger distance from zero stays."
                },

                {
                    type: "example",

                    expression: "−8 + 3 = −5",

                    explanation:
                        "The distances from zero are 8 and 3. Subtract 3 from 8 to get 5. Since 8 came from the negative number, the result is −5."
                }

            ]
        },

        {
            id: "negative-numbers-addition-practice",

            title: "Adding Negative Numbers Practice",

            description:
                "Practice adding positive and negative numbers.",

            type: "practice",

            practice: {
                generator: "negativeAddition",
                interaction: "number-input",
                settings: {},
                problemCount: 10
            },

            difficultyMultiplier: 1
        },

        {
            id: "negative-numbers-subtraction",

            title: "Subtracting Negative Numbers",

            description:
                "Learn how to subtract positive and negative numbers.",

            type: "explanation",

            content: [

                {
                    type: "text",
                    text:
                        "Subtracting a positive number makes a value smaller. Subtracting a negative number makes a value larger."
                },

                {
                    type: "example",

                    expression: "5 − 2 = 3",

                    explanation:
                        "Subtracting 2 from 5 makes the value smaller by 2, giving us 3."
                },

                {
                    type: "example",

                    expression: "5 − (−2) = 7",

                    explanation:
                        "Subtracting −2 is the same as adding 2. Therefore, 5 − (−2) = 5 + 2 = 7."
                },

                {
                    type: "text",
                    text:
                        "A useful rule is that subtracting a number is the same as adding its opposite."
                },

                {
                    type: "example",

                    expression: "−4 − 3 = −4 + (−3) = −7",

                    explanation:
                        "The opposite of 3 is −3, so subtracting 3 is the same as adding −3."
                },

                {
                    type: "example",

                    expression: "−4 − (−3) = −4 + 3 = −1",

                    explanation:
                        "The opposite of −3 is 3, so subtracting −3 is the same as adding 3."
                },

                {
                    type: "text",
                    text:
                        "This lets us handle every subtraction problem using the same idea: change subtraction into addition and use the opposite of the number being subtracted."
                }

            ]
        },

        {
            id: "negative-numbers-subtraction-practice",

            title: "Subtracting Negative Numbers Practice",

            description:
                "Practice subtracting positive and negative numbers.",

            type: "practice",

            practice: {
                generator: "negativeSubtraction",
                interaction: "number-input",
                settings: {},
                problemCount: 10
            },

            difficultyMultiplier: 1
        },

        {
            id: "negative-numbers-multiplication",

            title: "Multiplying Negative Numbers",

            description:
                "Learn how the signs of numbers affect multiplication.",

            type: "explanation",

            content: [

                {
                    type: "text",
                    text:
                        "When multiplying numbers, the signs of the numbers determine whether the result is positive or negative."
                },

                {
                    type: "text",
                    text:
                        "When both numbers have the same sign, the result is positive. When the numbers have different signs, the result is negative."
                },

                {
                    type: "example",

                    expression: "4 × 3 = 12",

                    explanation:
                        "Both numbers are positive, so the result is positive."
                },

                {
                    type: "example",

                    expression: "−4 × −3 = 12",

                    explanation:
                        "Both numbers are negative, so the result is positive."
                },

                {
                    type: "example",

                    expression: "−4 × 3 = −12",

                    explanation:
                        "The numbers have different signs, so the result is negative."
                },

                {
                    type: "example",

                    expression: "4 × −3 = −12",

                    explanation:
                        "The numbers have different signs, so the result is negative."
                },

                {
                    type: "text",
                    text:
                        "The multiplication itself works just as it does with positive numbers. First multiply the distances from zero, then determine the sign from the two signs."
                },

                {
                    type: "example",

                    expression: "−6 × −5 = 30",

                    explanation:
                        "6 × 5 = 30. Both numbers are negative, so the result is positive."
                }

            ]
        },

        {
            id: "negative-numbers-multiplication-practice",

            title: "Multiplying Negative Numbers Practice",

            description:
                "Practice multiplying positive and negative numbers.",

            type: "practice",

            practice: {
                generator: "negativeMultiplication",
                interaction: "number-input",
                settings: {},
                problemCount: 10
            },

            difficultyMultiplier: 1
        },

        {
            id: "negative-numbers-division",

            title: "Dividing Negative Numbers",

            description:
                "Learn how the signs of numbers affect division.",

            type: "explanation",

            content: [

                {
                    type: "text",
                    text:
                        "Division follows the same sign rules as multiplication. When the two numbers have the same sign, the result is positive. When they have different signs, the result is negative."
                },

                {
                    type: "example",

                    expression: "24 ÷ 6 = 4",

                    explanation:
                        "Both numbers are positive, so the result is positive."
                },

                {
                    type: "example",

                    expression: "−24 ÷ −6 = 4",

                    explanation:
                        "Both numbers are negative, so the result is positive."
                },

                {
                    type: "example",

                    expression: "−24 ÷ 6 = −4",

                    explanation:
                        "The numbers have different signs, so the result is negative."
                },

                {
                    type: "example",

                    expression: "24 ÷ −6 = −4",

                    explanation:
                        "The numbers have different signs, so the result is negative."
                },

                {
                    type: "text",
                    text:
                        "You can use multiplication to help with division. For example, because 6 × 4 = 24, we know that 24 ÷ 6 = 4."
                },

                {
                    type: "example",

                    expression: "−35 ÷ −5 = 7",

                    explanation:
                        "Since 5 × 7 = 35 and both numbers are negative, the result is positive."
                }

            ]
        },

        {
            id: "negative-numbers-division-practice",

            title: "Dividing Negative Numbers Practice",

            description:
                "Practice dividing positive and negative numbers.",

            type: "practice",

            practice: {
                generator: "negativeDivision",
                interaction: "number-input",
                settings: {},
                problemCount: 10
            },

            difficultyMultiplier: 1
        },

        {
            id: "negative-numbers-mixed-practice",

            title: "Negative Numbers Mixed Practice",

            description:
                "Practice using all four arithmetic operations with negative numbers.",

            type: "practice",

            practice: {
                generator: "negativeMixed",
                interaction: "number-input",
                settings: {},
                problemCount: 10
            },

            difficultyMultiplier: 1
        }

    ]
}
};