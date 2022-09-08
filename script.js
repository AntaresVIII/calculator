/*     function endsWithNumber(str) {
        return /[0-9]+$/.test(str);
    } */

// Values & Operator //

let firstValue = '';
let secondValue = '';
let operatorSelected = '';
let previousCalc = '';
let currentDisplay = '';
let isOffLimits = false;

// Functions //

const displayHandle = document.getElementById('mainDisplay');
const sndDisplayHandle = document.getElementById('sndDisplay');

const charLimit = function() { // Checks whether the character limit on the display (17) has been reached
    if (displayHandle.innerHTML.length >= 18) {
        firstValue = '';
        previousCalc = '';
        displayHandle.innerHTML = 'Limit exceeded!';
        isOffLimits = true;
    } else '';
}

const displaySelection = function(value) {
    if (isOffLimits === true) { displayHandle.innerHTML = ''; isOffLimits = false; } else;
    if (value === '+' || value === '-' || value === '÷' || value === 'x') {
        if (firstValue.toString().length === 0) { return }
        else if (secondValue.toString().length === 0 && !operatorSelected) {
            operatorSelected = value;
            displayHandle.innerHTML += value;  
        }
        else { return }
    }
    else {
        if (firstValue.toString().length === 0) {
            firstValue = firstValue += value;
            displayHandle.innerHTML += value;
        }
        else if (firstValue && !operatorSelected) {
            firstValue = firstValue += value; displayHandle.innerHTML += value;
        }
        else {
            secondValue = secondValue += value; 
            displayHandle.innerHTML += value; }
    }
    charLimit()
}
/*     if (displayHandle.innerHTML.length >= 17) {  // Character limit on display set to 17
        return;
    } else if (value === '+' || value === '-' || value === '÷' || value === 'x') {
        if (displayHandle.innerHTML.length <= 0) {
            return
        } else if (endsWithNumber(displayHandle.textContent)) { // Checks wether an operator has been set
            displayHandle.innerHTML += value;
            operatorSelected.push(value);

         } else { return }
    }
     else {
    displayHandle.innerHTML += value;
    firstValue.push(value);
    }
} */

const clearLastDigit = function() { // WORK IN PROGRESS //
    if (displayHandle.innerHTML.length >= 1) {
        if ( secondValue.toString().length === 0) {}
        displayHandle.innerHTML = displayHandle.textContent.slice(0, -1);
    }
    else return;
}

const operate = function(operator, a, b) {
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
    else;
    firstValue = previousCalc;
    secondValue = '';
    operatorSelected = '';
    sndDisplayHandle.innerHTML = previousCalc;
    charLimit();
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

const clearDigit = document.getElementById("clear").addEventListener("click", () => clearLastDigit());
const plusDigit = document.getElementById("plus").addEventListener("click", () => displaySelection('+'));
const minusDigit = document.getElementById("minus").addEventListener("click", () => displaySelection('-'));
const dividerDigit = document.getElementById("divider").addEventListener("click", () => displaySelection('÷'));
const multiplierDigit = document.getElementById("multiplier").addEventListener("click", () => displaySelection('x'));

const result = document.getElementById("equal").addEventListener("click", () => 
    operate(operatorSelected, firstValue, secondValue));