function generateAdditionProblem(settings) {
    const max = settings.max;

    const left = Math.floor(
        Math.random() * (max - 1)
    ) + 1;

    const right = Math.floor(
        Math.random() * (max - left)
    ) + 1;

    return {
        left,
        right,
        operator: "+",
        prompt: `${left} + ${right}`,
        answer: left + right,

        explanation: {
            type: "counting",
            start: left,
            amount: right
        }
    };
}


function generateAdditionProblems(settings, count) {
    const problems = [];

    for (let i = 0; i < count; i++) {
        problems.push(
            generateAdditionProblem(settings)
        );
    }

    return problems;
}


const GENERATORS = {
    addition: {
        generate(settings, count) {
            return generateAdditionProblems(
                settings,
                count
            );
        }
    }
};