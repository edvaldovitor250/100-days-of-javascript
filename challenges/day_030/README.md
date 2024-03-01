# Day 29

## Desafio:

Criar uma função que exibe uma mensagem após um intervalo de tempo usando setTimeout

**Resultado:**

```javascript
function mensagem(mensagem) {
    console.log("Sua messangem é " + mensagem);
}
mensagem("Meu aniversario é dia 20")

setTimeout(mensagem,2000)