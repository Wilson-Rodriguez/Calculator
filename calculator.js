const symbolButtons = document.querySelectorAll(".symbolButtons, .operationButtons")
const displayText = document.querySelector("#display")
const clearButton = document.querySelector("#clearButton")
let number1, operator, number2, nextOperator

symbolButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.append(button.textContent)  

        const numberList = display.textContent.split(/[+\-*/=]/)
        if (numberList.length === 3 && !("+-*/=".includes(display.innerText[0]))) {      
            number1 = parseInt(numberList[0])
            number2 = parseInt(numberList[1])
            
            operator = display.textContent.split("").find((value) => "+-*/".includes(value))
            nextOperator = display.textContent[display.textContent.length -1]

            let result = operate(number1, number2, operator)

            display.innerText = ""
            nextOperator === "=" && display.append(`${result.toString()}`)
            nextOperator !== "=" && display.append(`${result.toString()}${nextOperator.toString()}`)
        }
        else if (numberList.length === 4 && display.innerText[0] === "-") {
                number1 = -parseInt(numberList[1])
            number2 = parseInt(numberList[2])

            operator = display.textContent.slice(1).split("").find((value) => "+-*/".includes(value))
            nextOperator = display.textContent[display.textContent.length -1]

            let result = operate(number1, number2, operator)

            display.innerText = ""
            nextOperator === "=" && display.append(`${result.toString()}`)
            nextOperator !== "=" && display.append(`${result.toString()}${nextOperator.toString()}`)
        }                  
        else {

        }     
    })
})

const add = (x, y) => x + y 
const subtract = (x, y) => x - y
const divide = (x, y) => x / y
const multiply = (x, y) => x * y

clearButton.addEventListener("click", () => {
    display.innerText = ""
})

function operate(x, y, operator) {
    switch(operator) {
        case "+":
            return add(x, y)
        case "-":
            return subtract(x, y)
        case "*":
            return multiply(x, y)
            break;
        case "/":
            return divide(x, y)
    }
    
}