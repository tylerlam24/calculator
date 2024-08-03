let firstOperand = '';
let secondOperand = '';
let operator = null;
let resetScreen = true;

const currentScreen = document.querySelector('.displayCurrent');
const numBtns = document.querySelectorAll('.numBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const clearBtn = document.querySelector('#clearBtn');
const backBtn = document.querySelector('#backBtn');

numBtns.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorBtns.forEach(button => button.addEventListener('click', () => appendOperator(button.textContent)));
clearBtn.addEventListener('click', () => clear());
backBtn.addEventListener('click', () => back());

function appendNumber(num) {
    if (currentScreen.textContent === '0' || resetScreen) reset();
    currentScreen.textContent += num;
}

function appendOperator(op) {
    if (operator !== null) evaluate();
    firstOperand = currentScreen.textContent
    operator = op;
    currentScreen.textContent += op;
}

function evaluate() {

}

function clear() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    currentScreen.textContent = '0';
}

function back() {
    if (currentScreen.textContent.toString().length == 1) {
        currentScreen.textContent = 0;
    } else {
        currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
    }
}

function reset() {
    currentScreen.textContent = '';
    resetScreen = false;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function modulo(x, y) {
    return x % y;
}

function operate(x, y, operator) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case '+':
            return add(x, y);
        case '−':
            return subtract(x, y);
        case '×':
            return multiply(x, y);
        case '÷':
            if (y == 0) return null;
            return divide(x, y);
        case '%':
            if (y == 0) return null;
            return modulo(x, y);
        default:
            return null;
    }
}