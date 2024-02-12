# Day 12

## Desafio:

	Escreva uma função que retorna os N primeiros números da sequência de Fibonacci.

**Resultado:**

```javascript
function fibonacciLoop(n) {
   let fib = [0, 1];
   for (let i = 2; i <= n; i++) {
     fib[i] = fib[i - 1] + fib[i - 2];
   }
   return fib.slice(0, n + 1);
 }
 

 console.log(fibonacciLoop(2)); 