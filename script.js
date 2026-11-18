const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.key'); 
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const value = button.dataset.value;
        
        if (value === 'AC') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            screen.textContent = '0';
        } 
        else if (digits.includes(value)) {
            currentNumber = currentNumber + value;
            screen.textContent = currentNumber;
        }
        else if (value=== '+' || value === '-' || value === '*' || value === '/') {
            previousNumber = currentNumber;
            currentNumber = '';
            operator = value;
        }
        else if (value === '=') {
            const num1 = Number(previousNumber);
            const num2 = Number(currentNumber);
            let result = 0;

            if (operator === "+") {
                result = num1 + num2;
            }

            else if (operator === "-") {
                result = num1 - num2;
            }

            else if (operator === "*") {
                result = num1 * num2;
            }

            else if (operator === "/") {
                result = num1 / num2;
            }

            screen.textContent = result;

        }
    })
})