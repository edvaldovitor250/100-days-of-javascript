# Day 77

## Desafio:

Desenvolva um jogo da forca em JavaScript puro. Utilize manipulação de arrays e objetos para armazenar as palavras, e async e await com Promises, se necessário, para interações assíncronas.
        
**Resultado:**

```javascript

const prompt = require('prompt');


class JogoDaForca {
    constructor() {
        this.palavra = "";
        this.tentativasRestantes = 6;
        this.letrasCorretas = new Set();
    }

    adicionarPalavra(palavra) {
        this.palavra = palavra.toLowerCase();
    }

    verificarLetra(letra) {
        return this.palavra.includes(letra);
    }

    tentativas() {
        while (this.tentativasRestantes > 0) {
            let letra = prompt("Digite uma letra").toLowerCase();
            if (this.letrasCorretas.has(letra)) {
                console.log("Você já tentou esta letra.");
                continue;
            }
            if (this.verificarLetra(letra)) {
                this.letrasCorretas.add(letra);
                console.log(`Letra ${letra} encontrada!`);
                if (this.palavraCompleta()) {
                    console.log("Parabéns! Você acertou a palavra!");
                    return true;
                }
            } else {
                console.log("Letra não encontrada.");
                this.tentativasRestantes--;
                console.log(`Tentativas restantes: ${this.tentativasRestantes}`);
            }
        }
        console.log("Suas tentativas acabaram. A palavra era: " + this.palavra);
        return false;
    }

    palavraCompleta() {
        for (const letra of this.palavra) {
            if (!this.letrasCorretas.has(letra)) {
                return false;
            }
        }
        return true;
    }
}

const jogo = new JogoDaForca();
jogo.adicionarPalavra("javascript");
jogo.tentativas();
