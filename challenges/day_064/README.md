# Day 64

## Desafio:

				Implemente uma função que simule um processo assíncrono de validação de usuário. Esta função deve receber um nome de usuário como parâmetro e retornar uma Promise que verifica se o nome de usuário já está em uso, resolvendo com true se estiver em uso e false se não estiver, após 2 segundos.
        
**Resultado:**

```javascript

async function validorDeNome(nome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let nomes = []

      if (nomes.includes(nome)) {
        console.log('Nome já em uso')
        reject('Nome já em uso')
      } else {
        nomes.push(nome)
        console.log('Nome cadastrado com sucesso: ' + nomes)
        resolve('Nome cadastrado com sucesso')
      }
    }, 2000)
  })
}

validorDeNome('vitor')
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
