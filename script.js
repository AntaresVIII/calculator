const add = function(a, b) {
    return a + b;
}

const substract = function(a, b) {
    return a - b;
}

const divide = function(a, b) {
    return a > b ? a / b: b / a;
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