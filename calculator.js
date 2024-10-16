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
const displayNumber = document.querySelector('#input-number');
let collectNumber = '';

// get the button number in html
const buttonDigit = document.querySelectorAll('.digit button');
// get the dot button in html
let dotButton = document.querySelector('.digit .dot');
// When user click the button number
buttonDigit.forEach((digit) => {
    digit.addEventListener('click', (number) => {
        //add class to give effect when button click
        document.querySelector('.addEffectClicked')?.classList.remove('addEffectClicked');
        number.target.classList.add('addEffectClicked');

        let getNumber = number.target.innerText;
        // check if the dot is clicked or not
        if(number.target.className !== 'dot') {
            collectNumber += getNumber;
            resultDisplay.textContent = '';
        } else {
            collectNumber += getNumber;
            resultDisplay.textContent = '';
            dotButton.disabled = true;
        }
        //update display with number was clicked
        displayNumber.textContent = collectNumber;
    });
});

// get display h2 operator in html
// let displayOperator = document.querySelector('.input-operator span');
// get the operator button in html
const buttonOperators = document.querySelectorAll('.operators button');
let inputOperator = '';
//assign first number when user click operate button
let firstNumber = '';
//save old operator
let oldOperator = '';
// when user click one of the operator button
buttonOperators.forEach((operator) => {
    operator.addEventListener('click', (oper) => {
        //add class to give effect when button click
        document.querySelector('.addEffectClicked')?.classList.remove('addEffectClicked');
        oper.target.classList.add('addEffectClicked');

        inputOperator = oper.target.innerText;
        //displayOperator.textContent = inputOperator;

        //check if the firstNumber is empty
        if(firstNumber !== ''){
            secondNumber = Number(collectNumber);
            let firstN = Number(firstNumber);
            //check first if user try to devided number with zero
            if(oldOperator === '/' && secondNumber === 0) {
                alert('Calculator Error, dont enter 0 in division!');
                //clear all and start again
                clearAll();
            } else {
                firstNumber = operate(firstN, oldOperator, secondNumber);
                oldOperator = inputOperator;
                collectNumber = '';
                // displayNumber.textContent = '';
                resultDisplay.textContent = firstNumber;
                dotButton.disabled = false;
            }
        } else {
            firstNumber = collectNumber;
            collectNumber = '';
            oldOperator = inputOperator;
            // displayNumber.textContent = '';
            dotButton.disabled = false;
        }

        // console.log('first ' + firstNumber);
        // console.log('second ' + secondNumber);
        //remove the inner text for remove number in display
        
    });
});


//get equal or solution button element in HTML
const buttonEqual = document.querySelector('.equals');
//assing the number when user click the equal button
let secondNumber = '';
//get the result element in HTML
const resultDisplay = document.querySelector('#result-calculator');
//assign the result from function
let resultTotal = '';
buttonEqual.addEventListener('click', function() {
    //add class to give effect when button click
    document.querySelector('.addEffectClicked')?.classList.remove('addEffectClicked');
    this.classList.add('addEffectClicked');

    // check when user tap = button berfore anything else 
    if(firstNumber === '') {
        return false;
    } else {
        secondNumber = collectNumber;
        //remove all display input and operator
        displayNumber.textContent = '';
        //displayOperator.textContent = '';
    
        //console.log(typeof firstNumber)
        // console.log(inputOperator)
        // console.log(secondNumber)
        
        //make the value of each number to type number before throw as arguments
        let firstN = Number(firstNumber);
        let secondN = Number(secondNumber);
    
        //invoke the calculator function
        resultTotal = operate(firstN, inputOperator, secondN);
        
        //check if there is a decimal in result number
        if(resultTotal % 1 !== 0) {
            //show the result to the html
            resultDisplay.textContent = resultTotal.toFixed(3);
        } else {
            //show the result to the html
            resultDisplay.textContent = resultTotal;
        }
    }
});

//When user clik clear button
const buttonClear = document.querySelector('.clear');

function clearAll() {
    collectNumber = '';
    resultTotal = '';
    inputOperator = '';
    firstNumber = '';
    secondNumber = '';
    oldOperator = '';
    dotButton.disabled = false;
    displayNumber.textContent = '';
    resultDisplay.textContent = '';
    //displayOperator.textContent = '';
}

buttonClear.addEventListener('click', function() {
     //add class to give effect when button click
     document.querySelector('.addEffectClicked')?.classList.remove('addEffectClicked');
     this.classList.add('addEffectClicked');
     
    clearAll();
});

