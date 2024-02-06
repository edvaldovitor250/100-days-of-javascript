# Day 6

## Desafio:
Crie uma função que inverte uma string e aceite um parâmetro adicional para indicar se a string deve ser invertida de trás para frente.

**Resultado:**

```javascript
function inversao(mensagem) {
    console.log(mensagem.split('').reverse().join(''));
}
inversao("Meu nome")