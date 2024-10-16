// Math function
function add(a,b) {
    return a + b;
}
function substract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

let numFirst;
let operator;
let numSecond;

function operate(numOne, operator, numTwo) {
    switch(operator) {
        case '+':
            return add(numOne, numTwo);
        case '-':
            return substract(numOne, numTwo);
        case '*':
            return multiply(numOne, numTwo);
        case '/':
            return divide(numOne, numTwo);
        default:
            return 'Please enter the operator Math (+,-,*,/)';
    }
}