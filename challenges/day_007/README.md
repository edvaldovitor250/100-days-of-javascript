# Day 7

## Desafio:
Implemente uma função que calcula o fatorial de um número e aceite um parâmetro adicional para definir se o resultado deve ser impresso no console.

**Resultado:**

```javascript
function fatorial(novoNumero) {
    if (novoNumero === 0 || novoNumero === 1) {
        return 1;
    } else {
        return novoNumero * fatorial(novoNumero - 1);
    }
}

let numero = 5
console.log("O fatorial de " + numero + " é " + fatorial(numero))