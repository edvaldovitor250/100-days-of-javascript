# Day 67

## Desafio:

				Implemente uma função que simule um processo assíncrono de atualização de dados de um usuário. Esta função deve receber um objeto representando os novos dados do usuário e retornar uma Promise que simula a atualização desses dados, resolvendo após 3 segundos.
        
**Resultado:**

```javascript

function atualizarDados(novosDados) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(novosDados)
    }, 3000);
  });
}

const novosDadosUsuarios ={
  nome: 'edvaldo',
  idade: 23,
  email: 'edvaldo@gmail.com'
}

atualizarDados(novosDadosUsuarios).then((data) => console.log(data))
.catch((err) => console.error(err))

