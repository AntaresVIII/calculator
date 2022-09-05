let displayValue = [];
let operatorSelection = [];

const displayHandle = document.getElementById('display');

const displaySelection = function(value) {
    function endsWithNumber(str) {
        return /[0-9]+$/.test(str);
    }
    if (displayHandle.innerHTML.length >= 17) {
        return;
    } else if (value === '+' || value === '-' || value === '÷' || value === 'x') {
        if (displayHandle.innerHTML.length <= 0) {
            return
        } else if (endsWithNumber(displayHandle.textContent)) {
            displayHandle.innerHTML += value;
            operatorSelection.push(value);

         } else { return }
    }
     else {
    displayHandle.innerHTML += value;
    displayValue.push(value);
    }
}

const clearLastDigit = function() {
    if (displayHandle.innerHTML.length >= 1) {
        displayHandle.innerHTML = displayHandle.textContent.slice(0, -1);
    }
    else return;
}

const add = function(a, b) {
    displayHandle.innerHTML = a + b;
    console.log(add);
}

const substract = function(a, b) {
    displayHandle.innerHTML = a - b;
}

const divide = function(a, b) {
    displayHandle.innerHTML = a / b;
}

const multiply = function(a, b) {
    displayHandle.innerHTML = a * b;
}

const operate = function(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return substract(a, b);
    }
    else if (operator === '÷') {
        return divide(a, b);
    }
    else if (operator === 'x') {
        return multiply(a, b);
    }
    else return "error";
}

const oneDigit = document.getElementById("one").addEventListener("click", () => displaySelection('1'));
const twoDigit = document.getElementById("two").addEventListener("click", () => displaySelection('2'));
const threeDigit = document.getElementById("three").addEventListener("click", () => displaySelection('3'));
const fourDigit = document.getElementById("four").addEventListener("click", () => displaySelection('4'));
const fiveDigit = document.getElementById("five").addEventListener("click", () => displaySelection('5'));
const sixDigit = document.getElementById("six").addEventListener("click", () => displaySelection('6'));
const sevenDigit = document.getElementById("seven").addEventListener("click", () => displaySelection('7'));
const eightDigit = document.getElementById("eight").addEventListener("click", () => displaySelection('8'));
const nineDigit = document.getElementById("nine").addEventListener("click", () => displaySelection('9'));
const zeroDigit = document.getElementById("zero").addEventListener("click", () => displaySelection('0'));

const clearDigit = document.getElementById("clear").addEventListener("click", () => clearLastDigit());
const plusDigit = document.getElementById("plus").addEventListener("click", () => displaySelection('+'));
const minusDigit = document.getElementById("minus").addEventListener("click", () => displaySelection('-'));
const dividerDigit = document.getElementById("divider").addEventListener("click", () => displaySelection('÷'));
const multiplierDigit = document.getElementById("multiplier").addEventListener("click", () => displaySelection('x'));

const result = document.getElementById("equal").addEventListener("click", () => operate(operatorSelection, displayValue[0], displayValue[1]));