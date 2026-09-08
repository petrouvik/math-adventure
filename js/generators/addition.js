const additionGenerator = {
    generate(settings) {
        const a = Math.floor(Math.random() * (settings.max + 1));

        const b = Math.floor(
            Math.random() * (settings.max - a + 1)
        );

        return {
            a,
            b,
            answer: a + b
        };
    },

    check(problem, answer) {
        return Number(answer) === problem.answer;
    },

    explain(problem, userAnswer) {
        const { a, b, answer } = problem;

        return {
            title: "Let's solve it together!",
            steps: [
                `Start with ${a}.`,
                `Count ${b} more.`,
                `${this.countFrom(a, b)}`,
                `So ${a} + ${b} = ${answer}.`
            ]
        };
    },

    countFrom(a, b) {
        const numbers = [];

        for (let i = 1; i <= b; i++) {
            numbers.push(a + i);
        }

        return numbers.join(" → ");
    }
};