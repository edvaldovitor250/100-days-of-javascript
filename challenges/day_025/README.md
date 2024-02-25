# Day 25
## Desafio:

	Criar um objeto Árvore com métodos para adicionar e remover nós

**Resultado:**

```javascript
let arvore = {
    let: array = [],
    
    inserir: (valor) => {
        array.push(valor)

        console.log(array)
    },

    remover:() =>{
        array.pop()

        console.log(array)
    }
}

arvore.inserir(1)
arvore.remover()
arvore.inserir(1)
arvore.inserir(1)
arvore.inserir(1)
