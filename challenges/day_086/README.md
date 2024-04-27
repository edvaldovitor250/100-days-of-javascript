# Day 86

## Desafio:

Desenvolva um aplicativo de notas simples que permita ao usuário adicionar, remover e editar notas utilizando apenas JavaScript puro. Utilize manipulação de arrays e objetos e async e await com Promises, se necessário, para lidar com operações assíncronas, como a persistência de dados.

**Resultado:**

```javascript
class list{
    constructor(){
        this.list = []
    }

    adicionar(texto){
        this.list.push(texto)
        console.log(texto)
        console.log(this.list)
    }

    remover(texto){
        this.list.splice(this.list.indexOf(texto), 1)
        console.log(texto)
        console.log(this.list)
    }

    editarTexto(){
        this.list.splice(this.list.indexOf(texto), 1)
        console.log(texto)
        console.log(this.list)
    }


}

const texto = new list()

texto.adicionar("nweotwontowinertniowniotr")