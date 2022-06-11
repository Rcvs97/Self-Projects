// Calling Classes from data attributes created in index.html
// Query Selectall selects all from the same data value while Selector slectors the indiviual data value
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


//Holds all functions for calculator
class Calculator{

    constructor(previousOperandTextElement, currentOperandTextElement){ // Sets location for the current and previous operands
            this.previousOperandTextElement = previousOperandTextElement
            this.currentOperandTextElement = currentOperandTextElement
            this.clear() // Clears calculator when opened
    }





    // Function to clear calculator
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined // Sets the operation to Undefined if a operation is clicked and the calculator is cleared
    }

    // Funcition to delete last input of number each time the delete button is clicked
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    // Function to add a number to Screen
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    // Function to choose mathematical operation
    chooseOperation(operation){
        if (this.currentOperand === '') return // If a number isnt selected a operation cannot be selected
        if (this.previousOperand !== ''){ // If the previous operand is inputed the calculator will compute
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''


    }


    // Function to calculate the inputted numbers with the slected operation
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand) // Setting the first number inputted to prev
        const current = parseFloat(this.currentOperand) // Setting the second number inputted to current
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){

            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break

            case '÷':
                computation = prev / current
                break


            default:
                return
        }
    
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }


    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    
    




    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`

        
        } else {
            this.previousOperandTextElement.innerText = ''


        }
        

    }


}






const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })


})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })


})


equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})









