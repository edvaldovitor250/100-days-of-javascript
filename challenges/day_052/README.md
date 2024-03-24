# Day 52

## Desafio:

	Implemente uma função que simule um processo assíncrono de consulta a um banco de dados. Esta função deve receber um ID como parâmetro e retornar uma Promise que simule a busca de dados associados a esse ID, resolvendo após 2 segundos.

**Resultado:**

```javascript

async function getDate(id){
  return new Promise((resolve , reject) =>{
    setTimeout(() =>{
      console.log("Buscando dados associados ao ID",id)

      const dados ={
        id: id,
        nome: "Vitor",
        idade: 21

      }
      resolve(dados)
    },2000)
  })

}

const id = 1
console.log("Iniciando consulta ao banco de dados...")
getDate(id)
.then(dados =>{
    console.log("Dados recuperados:",dados)
  })
.catch(error =>{
    console.error("Ocorreu um erro durante a consulta",error)
  })
