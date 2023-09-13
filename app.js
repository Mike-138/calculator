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