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
                        expression: `3 ${op("multiply")} 4 = 12`,
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
                        expression: `6 ${op("divide")} 2 = 3`,
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
                        expression: formatNumber(1234),
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
                        expression: formatNumber(42305),
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
                        expression: formatNumber(507021),
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
                            formatNumber(3215),
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
                            formatNumber(42005),
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
                        expression: `${formatNumber(9999)} < ${formatNumber(10000)}`,
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
                        expression: `${formatNumber(42315)} > ${formatNumber(41999)}`,
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
                        expression: formatNumber(5432),
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
                        expression: formatNumber(325407),
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
                        expression: formatNumber(4052),
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
                            `${formatNumber(3527)} = ${formatNumber(3000)} + ${formatNumber(500)} + ${formatNumber(20)} + ${formatNumber(7)}`,
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
                            `${formatNumber(4052)} = ${formatNumber(4000)} + ${formatNumber(50)} + ${formatNumber(2)}`,
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
                            "${formatNumber(20000)} + ${formatNumber(3000)} + ${formatNumber(400)} + ${formatNumber(6)} = ${formatNumber(23406)}",
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
                            `1–${formatNumber(1000)}`,
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

                    problemCount: 10,
                    solveOnPaper: true
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

                    problemCount: 10,
                    solveOnPaper: true
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

                    problemCount: 10,
                    solveOnPaper: true
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

                    problemCount: 10,
                    solveOnPaper: true
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

    "negative-numbers": {
        id: "negative-numbers",

        title: "courses.negativeNumbers.title",
        description: "courses.negativeNumbers.description",

        icon: "−1",

        lessons: [

            {
                id: "negative-numbers-intro",

                title: "courses.negativeNumbers.intro.title",
                description: "courses.negativeNumbers.intro.description",

                type: "explanation",

                content: [

                    {
                        type: "text",
                        text: "courses.negativeNumbers.intro.content.text1"
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
                            "courses.negativeNumbers.intro.content.example1"
                    },

                    {
                        type: "text",
                        text: "courses.negativeNumbers.intro.content.text2"
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
                            "courses.negativeNumbers.intro.content.example2"
                    },

                    {
                        type: "text",
                        text: "courses.negativeNumbers.intro.content.text3"
                    },

                    {
                        type: "example",

                        expression: "−2 > −6",

                        explanation:
                            "courses.negativeNumbers.intro.content.example3"
                    },

                    {
                        type: "text",
                        text: "courses.negativeNumbers.intro.content.text4"
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
                            "courses.negativeNumbers.intro.content.example4"
                    },

                    {
                        type: "text",
                        text: "courses.negativeNumbers.intro.content.text5"
                    }

                ]
            },

            {
                id: "negative-numbers-addition",

                title: "courses.negativeNumbers.addition.title",
                description:
                    "courses.negativeNumbers.addition.description",

                type: "explanation",

                content: [

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.addition.content.text1"
                    },

                    {
                        type: "example",

                        expression: "−3 + 5 = 2",

                        explanation:
                            "courses.negativeNumbers.addition.content.example1"
                    },

                    {
                        type: "example",

                        expression: "4 + (−6) = −2",

                        explanation:
                            "courses.negativeNumbers.addition.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.addition.content.text2"
                    },

                    {
                        type: "example",

                        expression: "−4 + (−3) = −7",

                        explanation:
                            "courses.negativeNumbers.addition.content.example3"
                    },

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.addition.content.text3"
                    },

                    {
                        type: "example",

                        expression: "−8 + 3 = −5",

                        explanation:
                            "courses.negativeNumbers.addition.content.example4"
                    }

                ]
            },

            {
                id: "negative-numbers-addition-practice",

                title:
                    "courses.negativeNumbers.additionPractice.title",

                description:
                    "courses.negativeNumbers.additionPractice.description",

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

                title:
                    "courses.negativeNumbers.subtraction.title",

                description:
                    "courses.negativeNumbers.subtraction.description",

                type: "explanation",

                content: [

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.subtraction.content.text1"
                    },

                    {
                        type: "example",

                        expression: "5 − 2 = 3",

                        explanation:
                            "courses.negativeNumbers.subtraction.content.example1"
                    },

                    {
                        type: "example",

                        expression: "5 − (−2) = 7",

                        explanation:
                            "courses.negativeNumbers.subtraction.content.example2"
                    },

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.subtraction.content.text2"
                    },

                    {
                        type: "example",

                        expression:
                            "−4 − 3 = −4 + (−3) = −7",

                        explanation:
                            "courses.negativeNumbers.subtraction.content.example3"
                    },

                    {
                        type: "example",

                        expression:
                            "−4 − (−3) = −4 + 3 = −1",

                        explanation:
                            "courses.negativeNumbers.subtraction.content.example4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.subtraction.content.text3"
                    }

                ]
            },

            {
                id: "negative-numbers-subtraction-practice",

                title:
                    "courses.negativeNumbers.subtractionPractice.title",

                description:
                    "courses.negativeNumbers.subtractionPractice.description",

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

                title:
                    "courses.negativeNumbers.multiplication.title",

                description:
                    "courses.negativeNumbers.multiplication.description",

                type: "explanation",

                content: [

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.multiplication.content.text1"
                    },

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.multiplication.content.text2"
                    },

                    {
                        type: "example",

                        expression: `4 ${op("multiply")} 3 = 12`,

                        explanation:
                            "courses.negativeNumbers.multiplication.content.example1"
                    },

                    {
                        type: "example",

                        expression: `−4 ${op("multiply")} −3 = 12`,

                        explanation:
                            "courses.negativeNumbers.multiplication.content.example2"
                    },

                    {
                        type: "example",

                        expression: `−4 ${op("multiply")} 3 = −12`,

                        explanation:
                            "courses.negativeNumbers.multiplication.content.example3"
                    },

                    {
                        type: "example",

                        expression: `4 ${op("multiply")} −3 = −12`,

                        explanation:
                            "courses.negativeNumbers.multiplication.content.example4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.multiplication.content.text3"
                    },

                    {
                        type: "example",

                        expression: `−6 ${op("multiply")} −5 = 30`,

                        explanation:
                            "courses.negativeNumbers.multiplication.content.example5"
                    }

                ]
            },

            {
                id: "negative-numbers-multiplication-practice",

                title:
                    "courses.negativeNumbers.multiplicationPractice.title",

                description:
                    "courses.negativeNumbers.multiplicationPractice.description",

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

                title:
                    "courses.negativeNumbers.division.title",

                description:
                    "courses.negativeNumbers.division.description",

                type: "explanation",

                content: [

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.division.content.text1"
                    },

                    {
                        type: "example",

                        expression: `24 ${op("divide")} 6 = 4`,

                        explanation:
                            "courses.negativeNumbers.division.content.example1"
                    },

                    {
                        type: "example",

                        expression: `−24 ${op("divide")} −6 = 4`,

                        explanation:
                            "courses.negativeNumbers.division.content.example2"
                    },

                    {
                        type: "example",

                        expression: `−24 ${op("divide")} 6 = −4`,

                        explanation:
                            "courses.negativeNumbers.division.content.example3"
                    },

                    {
                        type: "example",

                        expression: `24 ${op("divide")} −6 = −4`,

                        explanation:
                            "courses.negativeNumbers.division.content.example4"
                    },

                    {
                        type: "text",
                        text:
                            "courses.negativeNumbers.division.content.text2"
                    },

                    {
                        type: "example",

                        expression: `−35 ${op("divide")} −5 = 7`,

                        explanation:
                            "courses.negativeNumbers.division.content.example5"
                    }

                ]
            },

            {
                id: "negative-numbers-division-practice",

                title:
                    "courses.negativeNumbers.divisionPractice.title",

                description:
                    "courses.negativeNumbers.divisionPractice.description",

                type: "practice",

                practice: {
                    generator: "negativeDivision",
                    interaction: "number-input",

                    settings: {},

                    problemCount: 10
                },

                difficultyMultiplier: 1
            }

        ]
    },

    geometry: {
        id: "geometry",

        title: "courses.geometry.title",
        description: "courses.geometry.description",

        icon: "π",

        lessons: [

            {
                id: "geometry-basics",
                title: "courses.geometry.geometryBasics.title",
                description: "courses.geometry.geometryBasics.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.geometryBasics.content.text1" },
                    { type: "text", text: "courses.geometry.geometryBasics.content.text2" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 200, height: 100, scale: 50,
                            points: [{ id: "A", x: 2, y: 1, label: "A" }]
                        }),
                        explanation: "courses.geometry.geometryBasics.content.example1"
                    },
                    { type: "text", text: "courses.geometry.geometryBasics.content.text3" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 100, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 1, label: "A" },
                                { id: "B", x: 4, y: 1, label: "B" }
                            ],
                            lines: [{ through: ["A", "B"], label: "l" }]
                        }),
                        explanation: "courses.geometry.geometryBasics.content.example2"
                    },
                    { type: "text", text: "courses.geometry.geometryBasics.content.text4" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 100, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 1, label: "A" },
                                { id: "B", x: 5, y: 1, label: "B" }
                            ],
                            segments: [{ from: "A", to: "B", label: "AB" }]
                        }),
                        explanation: "courses.geometry.geometryBasics.content.example3"
                    },
                    { type: "text", text: "courses.geometry.geometryBasics.content.text5" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 100, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 1, label: "A" },
                                { id: "B", x: 3, y: 1, visible: false }
                            ],
                            rays: [{ from: "A", through: "B", label: "r" }]
                        }),
                        explanation: "courses.geometry.geometryBasics.content.example4"
                    },
                    { type: "text", text: "courses.geometry.geometryBasics.content.text6" }
                ]
            },

            {
                id: "geometry-basics-practice",
                title: "courses.geometry.geometryBasicsPractice.title",
                description: "courses.geometry.geometryBasicsPractice.description",
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
                title: "courses.geometry.partsOfAShape.title",
                description: "courses.geometry.partsOfAShape.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text1" },
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text2" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 40,
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
                        explanation: "courses.geometry.partsOfAShape.content.example1"
                    },
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text3" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 40,
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
                        explanation: "courses.geometry.partsOfAShape.content.example2"
                    },
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text4" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 40,
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
                            angles: [{ vertex: "B", from: "A", to: "C", label: "ABC" }]
                        }),
                        explanation: "courses.geometry.partsOfAShape.content.example3"
                    },
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text5" },
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text6" },
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text7" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 360, height: 260, scale: 45,
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
                                { vertex: "A", from: "E", to: "B", label: "EAB" },
                                { vertex: "B", from: "A", to: "C", label: "ABC" },
                                { vertex: "C", from: "B", to: "D", label: "BCD" },
                                { vertex: "D", from: "C", to: "E", label: "CDE" },
                                { vertex: "E", from: "D", to: "A", label: "DEA" }
                            ]
                        }),
                        explanation: "courses.geometry.partsOfAShape.content.example4"
                    },
                    { type: "text", text: "courses.geometry.partsOfAShape.content.text8" }
                ]
            },

            {
                id: "parts-of-a-shape-practice",
                title: "courses.geometry.partsOfAShapePractice.title",
                description: "courses.geometry.partsOfAShapePractice.description",
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
                title: "courses.geometry.angles.title",
                description: "courses.geometry.angles.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.angles.content.text1" },
                    { type: "text", text: "courses.geometry.angles.content.text2" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 200, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 3 },
                                { id: "B", x: 3, y: 3 },
                                { id: "C", x: 1, y: 1 }
                            ],
                            rays: [
                                { from: "B", through: "A" },
                                { from: "B", through: "C" }
                            ],
                            angles: [{ vertex: "B", from: "A", to: "C", label: "45°" }]
                        }),
                        explanation: "courses.geometry.angles.content.example1"
                    },
                    { type: "text", text: "courses.geometry.angles.content.text3" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 200, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 3 },
                                { id: "B", x: 3, y: 3 },
                                { id: "C", x: 3, y: 1 }
                            ],
                            rays: [
                                { from: "B", through: "A" },
                                { from: "B", through: "C" }
                            ],
                            angles: [{ vertex: "B", from: "A", to: "C", label: "90°" }]
                        }),
                        explanation: "courses.geometry.angles.content.example2"
                    },
                    { type: "text", text: "courses.geometry.angles.content.text4" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 200, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 2 },
                                { id: "B", x: 3, y: 3 },
                                { id: "C", x: 5, y: 1 }
                            ],
                            rays: [
                                { from: "B", through: "A" },
                                { from: "B", through: "C" }
                            ],
                            angles: [{ vertex: "B", from: "A", to: "C", label: "120°" }]
                        }),
                        explanation: "courses.geometry.angles.content.example3"
                    },
                    { type: "text", text: "courses.geometry.angles.content.text5" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 200, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 2, label: "A" },
                                { id: "B", x: 3, y: 2, label: "B" },
                                { id: "C", x: 5, y: 2, label: "C" }
                            ],
                            rays: [
                                { from: "B", through: "A" },
                                { from: "B", through: "C" }
                            ],
                            angles: [{ vertex: "B", from: "A", to: "C", label: "180°" }]
                        }),
                        explanation: "courses.geometry.angles.content.example4"
                    },
                    { type: "text", text: "courses.geometry.angles.content.text6" }
                ]
            },

            {
                id: "angles-practice",
                title: "courses.geometry.anglesPractice.title",
                description: "courses.geometry.anglesPractice.description",
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
                title: "courses.geometry.adjacentAndOppositeSides.title",
                description: "courses.geometry.adjacentAndOppositeSides.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.adjacentAndOppositeSides.content.text1" },
                    { type: "text", text: "courses.geometry.adjacentAndOppositeSides.content.text2" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 360, height: 260, scale: 45,
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
                        explanation: "courses.geometry.adjacentAndOppositeSides.content.example1"
                    },
                    { type: "text", text: "courses.geometry.adjacentAndOppositeSides.content.text3" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 360, height: 260, scale: 45,
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
                        explanation: "courses.geometry.adjacentAndOppositeSides.content.example2"
                    },
                    { type: "text", text: "courses.geometry.adjacentAndOppositeSides.content.text4" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 240, scale: 45,
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
                        explanation: "courses.geometry.adjacentAndOppositeSides.content.example3"
                    },
                    { type: "text", text: "courses.geometry.adjacentAndOppositeSides.content.text5" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 360, height: 260, scale: 45,
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
                        explanation: "courses.geometry.adjacentAndOppositeSides.content.example4"
                    },
                    { type: "text", text: "courses.geometry.adjacentAndOppositeSides.content.text6" }
                ]
            },

            {
                id: "adjacent-and-opposite-sides-practice",
                title: "courses.geometry.adjacentAndOppositeSidesPractice.title",
                description: "courses.geometry.adjacentAndOppositeSidesPractice.description",
                type: "practice",
                practice: {
                    generator: "adjacentOppositeSides",
                    interaction: "multiple-choice",
                    problemCount: 10
                },
                difficultyMultiplier: 1
            },

            {
                id: "parallel-and-perpendicular-lines",
                title: "courses.geometry.parallelAndPerpendicularLines.title",
                description: "courses.geometry.parallelAndPerpendicularLines.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.parallelAndPerpendicularLines.content.text1" },
                    { type: "text", text: "courses.geometry.parallelAndPerpendicularLines.content.text2" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 140, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 1, visible: false },
                                { id: "B", x: 5, y: 1, visible: false },
                                { id: "C", x: 1, y: 2, visible: false },
                                { id: "D", x: 5, y: 2, visible: false }
                            ],
                            lines: [
                                { through: ["A", "B"], label: "n" },
                                { through: ["C", "D"], label: "m" }
                            ]
                        }),
                        explanation: "courses.geometry.parallelAndPerpendicularLines.content.example1"
                    },
                    { type: "text", text: "courses.geometry.parallelAndPerpendicularLines.content.text3" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 45,
                            points: [
                                { id: "A", x: 1, y: 1, visible: false },
                                { id: "B", x: 5, y: 1, visible: false },
                                { id: "C", x: 5, y: 4, visible: false },
                                { id: "D", x: 1, y: 4, visible: false }
                            ],
                            segments: [
                                { from: "A", to: "B" },
                                { from: "B", to: "C" },
                                { from: "C", to: "D" },
                                { from: "D", to: "A" }
                            ]
                        }),
                        explanation: "courses.geometry.parallelAndPerpendicularLines.content.example2"
                    },
                    { type: "text", text: "courses.geometry.parallelAndPerpendicularLines.content.text4" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 45,
                            points: [
                                { id: "A", x: 3, y: 1, visible: false },
                                { id: "B", x: 3, y: 4, visible: false },
                                { id: "C", x: 1, y: 2.5, visible: false },
                                { id: "D", x: 5, y: 2.5, visible: false },
                                { id: "O", x: 3, y: 2.5, visible: false }
                            ],
                            lines: [
                                { through: ["B", "A"], label: "n" },
                                { through: ["C", "D"], label: "m" }
                            ],
                            angles: [{ vertex: "O", from: "A", to: "C", label: "90°" }]
                        }),
                        explanation: "courses.geometry.parallelAndPerpendicularLines.content.example3"
                    },
                    { type: "text", text: "courses.geometry.parallelAndPerpendicularLines.content.text5" },
                    { type: "text", text: "courses.geometry.parallelAndPerpendicularLines.content.text6" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 45,
                            points: [
                                { id: "A", x: 1, y: 1 },
                                { id: "B", x: 5, y: 3 },
                                { id: "C", x: 1, y: 4 },
                                { id: "D", x: 5, y: 2 }
                            ],
                            lines: [
                                { through: ["A", "B"], label: "n" },
                                { through: ["C", "D"], label: "m" }
                            ]
                        }),
                        explanation: "courses.geometry.parallelAndPerpendicularLines.content.example4"
                    },
                    { type: "text", text: "courses.geometry.parallelAndPerpendicularLines.content.text7" }
                ]
            },

            {
                id: "parallel-and-perpendicular-lines-practice",
                title: "courses.geometry.parallelAndPerpendicularLinesPractice.title",
                description: "courses.geometry.parallelAndPerpendicularLinesPractice.description",
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
                title: "courses.geometry.triangles.title",
                description: "courses.geometry.triangles.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.triangles.content.text1" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 240, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 4, label: "A" },
                                { id: "B", x: 5, y: 4, label: "B" },
                                { id: "C", x: 3, y: 1, label: "C" }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "C", to: "B", label: "b" },
                                { from: "A", to: "C", label: "c" }
                            ]
                        }),
                        explanation: "courses.geometry.triangles.content.example1"
                    },
                    { type: "text", text: "courses.geometry.triangles.content.text2" },
                    { type: "text", text: "courses.geometry.triangles.content.text3" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 240, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 4, label: "A" },
                                { id: "B", x: 5, y: 4, label: "B" },
                                { id: "C", x: 3, y: 0.536, label: "C" }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "C", to: "B", label: "a" },
                                { from: "A", to: "C", label: "a" }
                            ]
                        }),
                        explanation: "courses.geometry.triangles.content.example2"
                    },
                    { type: "text", text: "courses.geometry.triangles.content.text4" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 240, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 4, label: "A" },
                                { id: "B", x: 5, y: 4, label: "B" },
                                { id: "C", x: 3, y: 1.5, label: "C" }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "b" },
                                { from: "C", to: "B", label: "a" },
                                { from: "A", to: "C", label: "a" }
                            ]
                        }),
                        explanation: "courses.geometry.triangles.content.example3"
                    },
                    { type: "text", text: "courses.geometry.triangles.content.text5" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 240, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 4, label: "A" },
                                { id: "B", x: 5, y: 4, label: "B" },
                                { id: "C", x: 4, y: 1, label: "C" }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "C", to: "B", label: "b" },
                                { from: "A", to: "C", label: "c" }
                            ]
                        }),
                        explanation: "courses.geometry.triangles.content.example4"
                    },
                    { type: "text", text: "courses.geometry.triangles.content.text6" }
                ]
            },

            {
                id: "triangles-practice",
                title: "courses.geometry.trianglesPractice.title",
                description: "courses.geometry.trianglesPractice.description",
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
                title: "courses.geometry.commonQuadrilaterals.title",
                description: "courses.geometry.commonQuadrilaterals.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text1" },
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text2" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 260, height: 260, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 1 },
                                { id: "B", x: 5, y: 1 },
                                { id: "C", x: 5, y: 5 },
                                { id: "D", x: 1, y: 5 }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "B", to: "C", label: "a" },
                                { from: "C", to: "D", label: "a" },
                                { from: "D", to: "A", label: "a" }
                            ],
                            angles: [{ vertex: "A", from: "D", to: "B", label: "90°" }]
                        }),
                        explanation: "courses.geometry.commonQuadrilaterals.content.example1"
                    },
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text3" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 1 },
                                { id: "B", x: 5, y: 1 },
                                { id: "C", x: 5, y: 4 },
                                { id: "D", x: 1, y: 4 }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "B", to: "C", label: "b" },
                                { from: "C", to: "D", label: "a" },
                                { from: "D", to: "A", label: "b" }
                            ],
                            angles: [{ vertex: "A", from: "D", to: "B", label: "90°" }]
                        }),
                        explanation: "courses.geometry.commonQuadrilaterals.content.example2"
                    },
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text4" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 220, scale: 50,
                            points: [
                                { id: "A", x: 1.5, y: 1 },
                                { id: "B", x: 5.5, y: 1 },
                                { id: "C", x: 4.5, y: 4 },
                                { id: "D", x: 0.5, y: 4 }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "B", to: "C", label: "b" },
                                { from: "C", to: "D", label: "a" },
                                { from: "D", to: "A", label: "b" }
                            ]
                        }),
                        explanation: "courses.geometry.commonQuadrilaterals.content.example3"
                    },
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text5" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 260, scale: 50,
                            points: [
                                { id: "A", x: 1, y: 2 },
                                { id: "B", x: 4, y: 2 },
                                { id: "C", x: 5, y: 4 },
                                { id: "D", x: 2, y: 4 }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "B", to: "C", label: "a" },
                                { from: "C", to: "D", label: "a" },
                                { from: "D", to: "A", label: "a" }
                            ]
                        }),
                        explanation: "courses.geometry.commonQuadrilaterals.content.example4"
                    },
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text6" },
                    {
                        type: "example",
                        expression: createGeometrySvg({
                            width: 300, height: 240, scale: 50,
                            points: [
                                { id: "A", x: 1.5, y: 1 },
                                { id: "B", x: 5.0, y: 1 },
                                { id: "C", x: 5.5, y: 4 },
                                { id: "D", x: 0.5, y: 4 }
                            ],
                            segments: [
                                { from: "A", to: "B", label: "a" },
                                { from: "B", to: "C", label: "b" },
                                { from: "C", to: "D", label: "c" },
                                { from: "D", to: "A", label: "d" }
                            ]
                        }),
                        explanation: "courses.geometry.commonQuadrilaterals.content.example5"
                    },
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text7" },
                    { type: "text", text: "courses.geometry.commonQuadrilaterals.content.text8" }
                ]
            },

            {
                id: "common-quadrilaterals-practice",
                title: "courses.geometry.commonQuadrilateralsPractice.title",
                description: "courses.geometry.commonQuadrilateralsPractice.description",
                type: "practice",
                practice: {
                    generator: "commonQuadrilaterals",
                    interaction: "multiple-choice",
                    problemCount: 10
                },
                difficultyMultiplier: 1
            },
            {
                id: "length-and-units",
                title: "courses.geometry.lengthAndUnits.title",
                description: "courses.geometry.lengthAndUnits.description",
                type: "explanation",
                content: [
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text1" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text2" },
                    { type: "example", expression: "1 mm", explanation: "courses.geometry.lengthAndUnits.content.example1" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text3" },
                    { type: "example", expression: "1 cm = 10 mm", explanation: "courses.geometry.lengthAndUnits.content.example2" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text4" },
                    { type: "example", expression: "1 dm = 10 cm", explanation: "courses.geometry.lengthAndUnits.content.example3" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text5" },
                    { type: "example", expression: "1 m = 10 dm", explanation: "courses.geometry.lengthAndUnits.content.example4" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text6" },
                    { type: "example", expression: "1 km = 1000 m", explanation: "courses.geometry.lengthAndUnits.content.example5" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text7" },
                    { type: "example", expression: "2 m = 20 dm = 200 cm = 2000 mm", explanation: "courses.geometry.lengthAndUnits.content.example6" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text8" },
                    { type: "text", text: "courses.geometry.lengthAndUnits.content.text9" }
                ]
            },

            {
                id: "length-and-units-practice",
                title: "courses.geometry.lengthAndUnitsPractice.title",
                description: "courses.geometry.lengthAndUnitsPractice.description",
                type: "practice",
                practice: {
                    generator: "lengthUnits",
                    interaction: "multiple-choice",
                    problemCount: 10
                },
                difficultyMultiplier: 1
            },

        ]
    },


};