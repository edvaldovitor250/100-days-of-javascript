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