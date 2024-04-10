# Day 69

## Desafio:

			Escreva uma função que recebe um número como parâmetro e retorna uma Promise que verifica se o número é um número primo de Mersenne, resolvendo com true se for e false se não for, após 1 segundo.
        
**Resultado:**

```javascript

async function isMersennePrime(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            function isPrime(num) {
                for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
                    if (num % i === 0) return false;
                }
                return num > 1;
            }

            function isMersenne(num) {
                let i = 0;
                while (Math.pow(2, i) - 1 < num) {
                    if (Math.pow(2, i) - 1 === num) return true;
                    i++;
                }
                return false;
            }

            if (isPrime(number) && isMersenne(number)) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
}

const number = 31;

isMersennePrime(number)
    .then(result => {
        console.log(`O número ${number} é um número primo de Mersenne? ${result}`);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
