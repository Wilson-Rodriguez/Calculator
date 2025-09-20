const symbolButtons = document.querySelectorAll(".symbolButtons, .operationButtons")
const display = document.querySelector("#display")
const operation = []


symbolButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.append(button.textContent)        
    })
})
