# Day 71

## Desafio:

				Crie uma função que recebe um array de strings como parâmetro e retorna uma Promise que resolve com um array contendo o comprimento de cada string, após 1 segundo.
        
**Resultado:**

```javascript

async function tamanhoDoArray(dato) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tamanho = []
            tamanho.push(dato)

            console.log(tamanho.length)
            resolve(tamanho)

            reject("Não contem nada")

            
        }, 1000);
    });
}

tamanhoDoArray("vitor")
.then((date) => {console.log(date)})
.catch((err) => {console.log(err)})