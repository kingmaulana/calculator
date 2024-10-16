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

// get the input element in html
const displayNumber = document.querySelector('.input-number span');
let collectNumber = '';

// get the button number in html
const buttonDigit = document.querySelectorAll('.digit button');

// When user click the button number
buttonDigit.forEach((digit) => {
    digit.addEventListener('click', (number) => {
        //update display with number was clicked
        let getNumber = number.target.innerText;
        collectNumber += getNumber;

        displayNumber.textContent = collectNumber;
    });
});


// get display h2 operator in html
let displayOperator = document.querySelector('.input-operator span');
// get the operator button in html
const buttonOperators = document.querySelectorAll('.operators button');
let inputOperator = '';
//assign first number when user click operate button
let firstNumber = '';
// when user click one of the operator button
buttonOperators.forEach((operator) => {
    operator.addEventListener('click', (oper) => {
        inputOperator = oper.target.innerText;
        displayOperator.textContent = inputOperator;
        //assign value number first 
        firstNumber = collectNumber;
        //reset to the zero or empty
        collectNumber ='';
        //remove the inner text for remove number in display
        displayNumber.textContent = '';
    });
});


//get equal or solution button element in HTML
const buttonEqual = document.querySelector('.equals');
//assing the number when user click the equal button
let secondNumber = '';
//get the result element in HTML
const resultDisplay = document.querySelector('.result-calculator span');
//assign the result from function
let resultTotal = '';
buttonEqual.addEventListener('click', () => {
    secondNumber = collectNumber;

    //remove all display input and operator
    displayNumber.textContent = '';
    displayOperator.textContent = '';

    //console.log(typeof firstNumber)
    // console.log(inputOperator)
    // console.log(secondNumber)
    
    //make the value of each number to type number before throw as arguments
    let firstN = Number(firstNumber);
    let secondN = Number(secondNumber);

    //invoke the calculator function
    resultTotal = operate(firstN, inputOperator, secondN);
    //show the result to the html
    resultDisplay.textContent = resultTotal;
});






//When user clik clear button
const buttonClear = document.querySelector('.clear');
buttonClear.addEventListener('click', () => {
    collectNumber = '';
    resultTotal = '';
    inputOperator = '';
    firstNumber = '';
    secondNumber = '';
    displayNumber.textContent = '';
    resultDisplay.textContent = '';
    displayOperator.textContent = '';
});