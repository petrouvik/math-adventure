const COURSES = {
    numbers: {
        id: "numbers",
        title: "Numbers",
        description: "Learn about numbers and how they work.",
        icon: "#",

        lessons: [
            
        ]
    },

    addition: {
        id: "addition",
        title: "Addition",
        description: "Learn how to put numbers together and solve addition problems.",
        icon: "➕",

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
        description: "Learn how to subtract numbers.",
        icon: "➖",

        lessons: [
            {
                id: "subtraction-intro",
                title: "What is Subtraction?",
                description: "Learn what subtraction means.",
                type: "explanation"
            },
            {
                id: "subtraction-10",
                title: "Subtracting to 10",
                description: "Practice subtracting numbers up to 10.",
                type: "practice",
                settings: {
                    max: 10
                },
                problems: 10
            }
        ]
    },

    multiplication: {
        id: "multiplication",
        title: "Multiplication",
        description: "Learn multiplication and times tables.",
        icon: "✖️",

        lessons: [
            {
                id: "multiplication-intro",
                title: "What is Multiplication?",
                description: "Learn what multiplication means.",
                type: "explanation"
            }
        ]
    },

    division: {
        id: "division",
        title: "Division",
        description: "Learn how to divide numbers.",
        icon: "➗",

        lessons: [
            {
                id: "division-intro",
                title: "What is Division?",
                description: "Learn what division means.",
                type: "explanation"
            }
        ]
    },

    romanNumerals: {
        id: "roman-numerals",
        title: "Roman Numerals",
        description: "Discover numbers used by the ancient Romans.",
        icon: "🏛️",

        lessons: [
            {
                id: "roman-numerals-intro",
                title: "What are Roman Numerals?",
                description: "Learn how Roman numerals work.",
                type: "explanation"
            }
        ]
    },

    geometry: {
        id: "geometry",
        title: "Geometry",
        description: "Explore shapes, angles, and measurements.",
        icon: "📐",

        lessons: [
            {
                id: "geometry-intro",
                title: "Introduction to Geometry",
                description: "Learn the basics of geometry.",
                type: "explanation"
            }
        ]
    }
};