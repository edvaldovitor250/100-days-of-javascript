# Day 59

## Desafio:

				Crie uma função que recebe um número como parâmetro e retorna uma Promise que verifica se o número é positivo, negativo ou zero, resolvendo com uma string indicando o resultado, após 1 segundo.

**Resultado:**

```javascript

function verificaNumero(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 0) {
        resolve("O número é positivo.");
      } else if (numero < 0) {
        resolve("O número é negativo.");
      } else {
        resolve("O número é zero.");
      }
    }, 1000); 
  });
}

verificaNumero(5)
  .then(resultado => {
    console.log(resultado); 
  })
  .catch(error => {
    console.error("Ocorreu um erro:", error);
  });
