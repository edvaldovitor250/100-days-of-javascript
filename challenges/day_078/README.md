# Day 78

## Desafio:

	Crie um aplicativo de calculadora simples utilizando apenas JavaScript puro. A calculadora deve ser capaz de realizar operações básicas (adição, subtração, multiplicação, divisão) e mostrar o resultado na tela. Utilize manipulação de arrays e objetos e async e await com Promises, se necessário, para operações assíncronas, como a obtenção de dados do usuário.
        
**Resultado:**

```javascript

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1, num2;

rl.question("Digite o primeiro numero: ", (inputNum1) => {
    num1 = parseFloat(inputNum1);

    rl.question("Digite o segundo numero para calcular: ", (inputNum2) => {
        num2 = parseFloat(inputNum2);

        rl.question('Qual operação deseja? (+, -, *, /): ', (op) => {
            switch (op) {
                case "+":
                    console.log("Resultado:", num1 + num2);
                    break;
                case "-":
                    console.log("Resultado:", num1 - num2);
                    break;
                case "*":
                    console.log("Resultado:", num1 * num2);
                    break;
                case "/":
                    if (num2 !== 0) {
                        console.log("Resultado:", num1 / num2);
                    } else {
                        console.log("Impossível dividir por zero.");
                    }
                    break;
                default:
                    console.log("Digite uma operação válida (+, -, *, /)");
                    break;
            }
            rl.close();
        });
    });
});
