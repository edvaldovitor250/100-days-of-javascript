# Day 54

## Desafio:

		Escreva uma função que recebe um array de números como parâmetro e retorna uma Promise que resolve com a soma desses números, após 1 segundo.

**Resultado:**

```javascript

async function numeros(numbers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      resolve(sum);
    }, 1000);
  });
}

numeros([1, 2, 3, 4, 5])
  .then(sum => {
    console.log('A soma dos números é:', sum);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
