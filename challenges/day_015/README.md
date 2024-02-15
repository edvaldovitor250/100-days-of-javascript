# Day 15


## Desafio:

	Crie uma função para encontrar o maior elemento e o menor numero do elemento em um array.

**Resultado:**

```javascript
let array = [1,32,5,2,123,2000]

function maiornumero() {

  let maiorNumero = Math.max(...array)
  console.log("Maior numero é " + maiorNumero)
}

function menorNumero() {
  let menorNumero = Math.min(...array)
  console.log("Menor numero é " + menorNumero)
}

maiornumero();
menorNumero(); 