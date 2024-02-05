# Day 5

## Desafio:
Escreva uma função que verifica se um número é par ou ímpar, e aceite um parâmetro adicional para personalizar a mensagem de saída.

**Resultado:**

```javascript
function parOuImpar(numero) {
    if (numero % 2) {
        console.log(numero + " é impar")
    } else {
        console.log("É par " + numero)
    }
    
}

parOuImpar(4)
parOuImpar(6)
parOuImpar(5)
parOuImpar(3)
parOuImpar(1)
parOuImpar(9)