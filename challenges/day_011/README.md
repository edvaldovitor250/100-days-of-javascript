# Day 11

## Desafio:

Implemente uma função que verifica se uma palavra é um palíndromo.

**Resultado:**

```javascript
function palindromo(string) {
    
   string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
   let stringInvertido = string.split('').reverse().join('')

   console.log(stringInvertido)
}

palindromo("A man, a plan, a canal: Panama")
