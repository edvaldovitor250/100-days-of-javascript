# Day 60

## Desafio:

				Escreva uma função que recebe um array de strings como parâmetro e retorna uma Promise que resolve com a concatenação dessas strings, após 1 segundo.

**Resultado:**

```javascript

function concatenaStrings(arrayDeStrings) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const concatenacao = arrayDeStrings.join('');
      resolve(concatenacao);
    }, 1000);
  });
}

const arrayDeStrings = ['Olá, ', 'mundo', '!'];
concatenaStrings(arrayDeStrings)
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
