// Values & Operator //

let firstValue = '';
let secondValue = '';
let operatorSelected = '';
let previousCalc = '';
let currentDisplay = '';

// Functions //

const displayHandle = document.getElementById('mainDisplay');
const sndDisplayHandle = document.getElementById('sndDisplay');

const displaySelection = function(value) { // Displays and stores input value //
    if (value === '+' || value === '-' || value === '÷' || value === 'x' || value === '^' || value === '%') {
        if (firstValue.toString().length === 0) { return }
        else if (secondValue.toString().length === 0 && !operatorSelected) {
            operatorSelected = value;
            sndDisplayHandle.innerHTML = firstValue;
            displayHandle.innerHTML = value + ' ';  
        }
        else if (secondValue.toString().length === 0 && operatorSelected) {
            operatorSelected = value;
            displayHandle.innerHTML = value + ' ';
        }
        else if (secondValue && operatorSelected) {
            operate(operatorSelected, firstValue, secondValue);
            operatorSelected = value;
            sndDisplayHandle.innerHTML = previousCalc;
            displayHandle.innerHTML = value + ' ';
        }
        else return;
    }
    else if (value === '.') {
        if (firstValue && !secondValue && !firstValue.includes('.')) {
            firstValue += value;
            displayHandle.innerHTML += value;
        }
        else if (secondValue && !secondValue.includes('.')) {
            secondValue += value;
            displayHandle.innerHTML += value;
        }
        else return;

    }
    else {
        if (sndDisplayHandle.innerHTML.length >= 1 && displayHandle.innerHTML.length === 0) {
            firstValue = '';
            sndDisplayHandle.innerHTML = '';
            previousCalc = '';
            firstValue = firstValue += value;
            displayHandle.innerHTML += value;
        }
        else if (firstValue.toString().length === 0) {
            firstValue = '';
            previousCalc = '';
            firstValue = firstValue += value;
            sndDisplayHandle.innerHTML = '';
            displayHandle.innerHTML += value;
        }
        else if (firstValue && !operatorSelected) {
                firstValue = firstValue += value;
                displayHandle.innerHTML += value;
        }
        else {
            secondValue = secondValue += value; 
            displayHandle.innerHTML += value; }
    }

}

const clearLastDigit = function() { // Deletes last input when backspace is pressed //
    if (displayHandle.innerHTML.length >= 1) {
        if (secondValue) {
            secondValue = secondValue.slice(0, -1);
            displayHandle.innerHTML = displayHandle.textContent.slice(0, -1);
        }
        else if (secondValue.toString().length === 0 && operatorSelected) {
            operatorSelected = '';
            displayHandle.innerHTML = displayHandle.textContent.slice(0, -2);
            }
        else {
            firstValue = firstValue.slice(0, -1);
            previousCalc = firstValue;
            displayHandle.innerHTML = displayHandle.textContent.slice(0, -1);
        }
    } else clearAll();
}

const clearAll = function() { // Clears display and all values //
    firstValue = '';
    secondValue = '';
    previousCalc = '';
    operatorSelected = '';
    displayHandle.innerHTML = '';
    sndDisplayHandle.innerHTML = '';
}

const operate = function(operator, a, b) { // Gets 2 values and operates them according to a selected operator //
    if (!operatorSelected) { return }
    else {
    a = Number(a);
    b = Number(b);
    if (operator === '+') {
        displayHandle.innerHTML = a + b;
        previousCalc = a + b;
    }
    else if (operator === '-') {
        displayHandle.innerHTML = a - b;
        previousCalc = a - b;
    }
    else if (operator === '÷') {
        displayHandle.innerHTML = a / b;
        previousCalc = a / b;
        
    }
    else if (operator === 'x') {
        displayHandle.innerHTML = a * b;
        previousCalc = a * b;
    }
    else if (operator === '^') {
        displayHandle.innerHTML = Math.pow(a, b);
        previousCalc = Math.pow(a, b);
    }
    else if (operator === '%') {
        displayHandle.innerHTML = ( a / 100 ) * b;
        previousCalc = ( a / 100 ) * b;
    }
    else;
    firstValue = String(previousCalc);
    secondValue = '';
    operatorSelected = '';
    sndDisplayHandle.innerHTML = '';
    displayHandle.innerHTML = previousCalc;
}}

// Buttons with Event Listeners //

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

const decimalDigit = document.getElementById("decimal").addEventListener("click", () => displaySelection('.'));
const clearDigit = document.getElementById("clear").addEventListener("click", () => clearLastDigit());
const clearAllDigit = document.getElementById("allclear").addEventListener("click", () => clearAll());
const powerDigit = document.getElementById("power").addEventListener("click", () => displaySelection('^'));
const percentDigit = document.getElementById("percentage").addEventListener("click", () => displaySelection('%'));
const plusDigit = document.getElementById("plus").addEventListener("click", () => displaySelection('+'));
const minusDigit = document.getElementById("minus").addEventListener("click", () => displaySelection('-'));
const dividerDigit = document.getElementById("divider").addEventListener("click", () => displaySelection('÷'));
const multiplierDigit = document.getElementById("multiplier").addEventListener("click", () => displaySelection('x'));

const result = document.getElementById("equal").addEventListener("click", () => 
    operate(operatorSelected, firstValue, secondValue));

// Keyboard Support //

document.addEventListener('keydown', (event) => {
    if (event.key == "0") {displaySelection('0')}
    else if (event.key == "1") {displaySelection('1')}
    else if (event.key == "2") {displaySelection('2')}
    else if (event.key == "3") {displaySelection('3')}
    else if (event.key == "4") {displaySelection('4')}
    else if (event.key == "5") {displaySelection('5')}
    else if (event.key == "6") {displaySelection('6')}
    else if (event.key == "7") {displaySelection('7')}
    else if (event.key == "8") {displaySelection('8')}
    else if (event.key == "9") {displaySelection('9')}
    else if (event.key == "+") {displaySelection('+')}
    else if (event.key == "-") {displaySelection('-')}
    else if (event.key == "*" || event.key == "x") {displaySelection('x')}
    else if (event.key == "/") {displaySelection('÷')}
    else if (event.shiftKey && event.key == "Dead") {displaySelection('^')}
    else if (event.shiftKey && event.key == "%") {displaySelection('%')}
    else if (event.key == ".") {displaySelection('.')}
    else if (event.key == "Backspace") {clearLastDigit()}
    else if (event.key == " ") {clearAll()}
    else if (event.key == "Enter") {operate(operatorSelected, firstValue, secondValue)}
    else '';
});