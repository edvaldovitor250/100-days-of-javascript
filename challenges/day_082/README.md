# Day 82

## Desafio:

Crie um sistema de gerenciamento de contatos que permita ao usuário adicionar, remover e visualizar contatos utilizando apenas JavaScript puro. Utilize manipulação de arrays e objetos e async e await com Promises, se necessário, para lidar com operações assíncronas, como a persistência de dados.
        
**Resultado:**

```javascript

class Contato {

    constructor() {

        this.numeros = []
    }

    adicionar(numero) {
        if (this.numeros.length < 11) {
            this.numeros.push(numero);
        } else {
            console.log("Já foram digitados 11 números. Não é possível adicionar mais.");
        }
    }

    remover(numero) {
        this.numeros.pop(numero)
    }

    visualizar() {
        console.log(...this.numeros)
    }
}

let contato = new Contato()

contato.adicionar(81923)
contato.visualizar()