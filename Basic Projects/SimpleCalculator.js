const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter first number: ", (firstInput) => {
    r1.question("Enter operator (+, -, *, /): ", (operator) => {
        r1.question("Enter second number: ", (secondInput) => {
            const firstNumber = Number(firstInput);
            const secondNumber = Number(secondInput);
            let result;

            if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
                console.log("Please enter valid numbers.");
                r1.close();
                return;
            }

            switch (operator) {
                case "+":
                    result = firstNumber + secondNumber;
                    break;
                case "-":
                    result = firstNumber - secondNumber;
                    break;
                case "*":
                    result = firstNumber * secondNumber;
                    break;
                case "/":
                    if (secondNumber === 0) {
                        console.log("Cannot devide by zero");
                        r1.close();
                        return;
                    }
                    result = firstNumber / secondNumber;
                    break;
                default:
                    console.log("Invalid Operator");
                    break;
            }

            console.log(`Result: ${result}`);
            r1.close();
        })
    })
})