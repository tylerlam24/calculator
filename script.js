let firstOperand = '';
let secondOperand = '';
let operator = null;
let previousEq = null;
let resetScreen = true;

const currentScreen = document.querySelector('.displayCurrent');
const previousScreen = document.querySelector('.displayPast');
const numBtns = document.querySelectorAll('.numBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const equalsBtn = document.querySelector('#equalsBtn');
const clearBtn = document.querySelector('#clearBtn');
const backBtn = document.querySelector('#backBtn');

numBtns.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorBtns.forEach(button => button.addEventListener('click', () => appendOperator(button.textContent)));
equalsBtn.addEventListener('click', () => evaluate());
clearBtn.addEventListener('click', () => clear());
backBtn.addEventListener('click', () => back());

function appendNumber(num) {
    if (currentScreen.textContent === '0' || resetScreen) reset();
    currentScreen.textContent += num;
}

function appendOperator(op) {
    currentScreen.textContent += op;
}

function evaluate() {
    previousEq = currentScreen.textContent.toString();
    firstOperand = Number(currentScreen.textContent[0]);
    operator = currentScreen.textContent[1];
    secondOperand = Number(currentScreen.textContent[2]);
    currentScreen.textContent = operate(firstOperand, secondOperand, operator);
    previousScreen.textContent = previousEq;
}

function clear() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    currentScreen.textContent = '0';
    previousScreen.textContent = '';
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