# Day 2

## Desafio:
Declare uma variável, atribua um número a ela, e imprima no console tanto o número quanto o seu quadrado.

**Resultado:**

```javascript
let numero = 2

function pontecia() {
    console.log("Numero normal: " + numero)

    numero = numero ** 2
    console.log("Numero com pontecia: " + numero)
}

pontecia()