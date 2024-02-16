# Day 16


## Desafio:

		Escreva uma função que realiza a operação de potência.

**Resultado:**

```javascript
let array = []

function pontenciaArray(valor) {
  
  let pontencia = Math.pow(valor,2)

   array.push(pontencia)

  console.log(array)

}

pontenciaArray(2)
pontenciaArray(20)
pontenciaArray(3)