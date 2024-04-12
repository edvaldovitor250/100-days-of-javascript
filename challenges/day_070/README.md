# Day 70

## Desafio:

				Implemente uma função que simule um processo assíncrono de exclusão de usuário. Esta função deve receber um ID de usuário como parâmetro e retornar uma Promise que simula a exclusão desse usuário, resolvendo após 2 segundos..
        
**Resultado:**

```javascript

async function deleteUsuar(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (id === id) {
                console.log("Deletando usuário com ID", id);
                resolve("Usuário deletado com sucesso");
            } else {
                reject("ID inválido, usuário não pode ser deletado");
            }
        }, 1000);
    });
}

deleteUsuar(12)
.then((date) => {console.log(date)})
.catch((err) => {console.log(err)})