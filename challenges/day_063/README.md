# Day 63 

## Desafio:

				Escreva uma função que recebe um número como parâmetro e retorna uma Promise que verifica se o número é um múltiplo de 5, resolvendo com true se for e false se não for, após 1 segundo.
        
**Resultado:**

```javascript

async function getNumber(numero) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (numero % 5 == 0) {
        console.log("É multiplico de 5")
        resolve()
      } else {
        console.log("Não é multiplico de 5")
        reject()
      }


    })

  }, 2000)
}

getNumber(22)