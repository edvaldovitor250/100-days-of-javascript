# Day 4

## Desafio:
Crie uma função que aceite dois parâmetros, verifique se são números, e retorne a soma se ambos forem válidos. Caso contrário, imprima uma mensagem de erro.

**Resultado:**

```javascript
function soma(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        throw new Error('Devem ser numeros!');
    }
    return numero1 + numero2;
}

try {
    console.log(soma(2, 3));
    console.log(soma("dfas", 2))
    console.log(soma("dfas", 2))
} catch (error) {
    console.error(error.message)
}
