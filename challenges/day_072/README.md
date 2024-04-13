# Day 72

## Desafio:

	Escreva uma classe que implementa um sistema de validação de números de Armstrong, aceitando um array de números como entrada e retornando um objeto contendo os números de Armstrong encontrados.
        
**Resultado:**

```javascript

class ValidacaoDeNumeros {
    constructor(numeros) {
        this.numeros = numeros;
    }

    validarNumero(numero) {
        const isArmstrong = (num) => {
            const strNum = String(num);
            const digits = strNum.length;
            let sum = 0;
            for (let digit of strNum) {
                sum += Math.pow(parseInt(digit), digits);
            }
            return sum === num;
        };

        const numerosDeArmstrong = this.numeros.filter(num => isArmstrong(num));

        return numerosDeArmstrong;
    }

    validarNumeros() {
        const numerosDeArmstrong = [];

        for (let numero of this.numeros) {
            if (this.validarNumero(numero)) {
                numerosDeArmstrong.push(numero);
            }
        }

        return {
            numerosTotais: this.numeros.length,
            numerosDeArmstrong: numerosDeArmstrong,
            totalNumerosDeArmstrong: numerosDeArmstrong.length
        };
    }
}

const numeros = [153, 370, 371, 407, 123, 456];
const validador = new ValidacaoDeNumeros(numeros);
const resultado = validador.validarNumeros();
console.log(resultado);
