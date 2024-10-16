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

const inputNumber = document.querySelector('.input-number span');
let collectNumber = '';

const buttonDigit = document.querySelectorAll('.digit button');
// When user click the button number
buttonDigit.forEach((digit) => {
    digit.addEventListener('click', (number) => {
        //update display with number was clicked
        let getNumber = number.target.innerText;
        collectNumber += getNumber;

        inputNumber.textContent = collectNumber;
    });
});


const buttonClear = document.querySelector('.clear');
buttonClear.addEventListener('click', () => {
    collectNumber = '';

    inputNumber.textContent = collectNumber;
})