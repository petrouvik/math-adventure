const EXPLANATIONS = {
    counting: {
        render(container, explanation, problem) {
            renderCountingExplanation(
                container,
                explanation,
                problem
            );
        }
    }
};
function renderCountingExplanation(
    container,
    explanation,
    problem
) {
    const start = explanation.start;
    const amount = explanation.amount;

    const numbers = [];

    for (let i = 0; i <= amount; i++) {
        numbers.push(start + i);
    }

    container.innerHTML = `
        <div class="explanation-card">
            <h3>Let's see how! 💡</h3>

            <p>
                Start at ${start} and count
                ${amount} more:
            </p>

            <p class="counting-example">
                ${numbers.join(" → ")}
            </p>

            <p>
                So
                <strong>${problem.prompt}</strong>
                equals
                <strong>${problem.answer}</strong>.
            </p>
        </div>
    `;
}