const calculatorResult = document.querySelector(".calculator-result");
const calculatorOperations = document.querySelectorAll(".operation-container > .operation");
const calculatorEval = document.querySelector(".calculator-contents > .operation");
const calculatorDigits = document.querySelectorAll(".digit");
const calculatorClear = document.querySelector(".clear");

calculatorDigits.forEach((digit) => {
    digit.addEventListener("click", () => {
        calculatorResult.textContent += digit.textContent;
    });
});

calculatorOperations.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (calculatorResult.textContent) {
            if (calculatorResult.textContent.search(" ") !== -1) {
                operate();
            }
            if (calculatorResult.textContent !== "Error") {
                calculatorResult.textContent += " " + operation.textContent + " ";
            }
        }
    });
});

calculatorClear.addEventListener("click", () => {
    calculatorResult.textContent = "";
});

calculatorEval.addEventListener("click", () => {
    operate();
})

function operate() {
    let expression = calculatorResult.textContent.split(" ");
    console.log(expression);
    if (expression.includes("")) {
        calculatorResult.textContent = "Error";
    } else {
        switch (expression[1]) {
            case "+":
                calculatorResult.textContent = Number(expression[0]) + Number(expression[2]);
                break;
            case "−":
                calculatorResult.textContent = Number(expression[0]) - Number(expression[2]);
                break;
            case "×":
                calculatorResult.textContent = Number(expression[0]) * Number(expression[2]);
                break;
            case "÷":
                calculatorResult.textContent = Math.round((Number(expression[0]) / Number(expression[2]) + Number.EPSILON) * 1_000_000) / 1_000_000;
                break;
            default:
                calculatorResult.textContent = "Error";
        }
    }
}