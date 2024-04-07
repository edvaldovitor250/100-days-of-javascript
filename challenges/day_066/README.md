# Day 66

## Desafio:

				Escreva uma função que recebe um número como parâmetro e retorna uma Promise que verifica se o número é um número de Fibonacci, resolvendo com true se for e false se não for, após 1 segundo.
        
**Resultado:**

```javascript

function isFibonacci(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = 0;
      let b = 1;
      while (b < number) {
        const temp = b;
        b = a + b;
        a = temp;
      }
      resolve(b === number);
    }, 1000);
  });
}

isFibonacci(8).then((isFibonacciNumber) => {
  console.log(isFibonacciNumber); 
});
