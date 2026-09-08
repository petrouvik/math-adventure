const lessons = {
    "addition-intro": {
        course: "addition",
        title: "What is Addition?",
        type: "explanation",

        content: [
            {
                type: "text",
                text: "Addition means putting numbers together."
            },
            {
                type: "example",
                expression: "3 + 2 = 5"
            }
        ]
    },

    "addition-10": {
        course: "addition",
        title: "Adding to 10",
        type: "practice",

        generator: "addition",

        settings: {
            max: 10
        },

        problems: 10
    },

    "addition-20": {
        course: "addition",
        title: "Adding to 20",
        type: "practice",

        generator: "addition",

        settings: {
            max: 20
        },

        problems: 10
    }
};