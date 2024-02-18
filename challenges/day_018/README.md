# Day 18

## Desafio:

	Crie uma função para calcular a média de um array de números.

**Resultado:**

```javascript
let list = [1, 2, 3, 5, 7,2,5,2000];

function calcularMedia() {
  let  soma = 0

  for (let i = 0; i < list.length; i++) {
   soma += list[i]
  }

  console.log(soma / list.length)
}

calcularMedia()