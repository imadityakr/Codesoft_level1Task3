let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator === '') {
        previousInput = currentInput;
        currentInput = '';
        operator = op;
    }
    updateDisplay();
}

function calculateResult() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}
// function clearResult(){
//     currentInput = '';
//     operator = '';
//     previousInput = '';
//     updateDisplay();
// }

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}
