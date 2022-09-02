const add = function(a, b) {
    return a + b;
}

const substract = function(a, b) {
    return a - b;
}

const divide = function(a, b) {
    return a / b;
}

const multiply = function(a, b) {
    return a * b;
}

const operate = function(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return substract(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else return "error";
}

let displayValue = [0];

const displayHandle = document.getElementById('display');

const displaySelection = function(value) {
    if (displayHandle.innerHTML.length >= 18) {
        return;
    } else {
    displayHandle.innerHTML += value;
    }
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

// const clearDigit = document.getElementById("clear").addEventListener("click", () => displaySelection('back'));