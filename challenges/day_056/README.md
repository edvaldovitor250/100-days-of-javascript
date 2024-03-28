# Day 56

## Desafio:

			Crie uma função que recebe dois números como parâmetros e retorna uma Promise que resolve com o resultado da multiplicação desses números, após 1 segundo.

**Resultado:**

```javascript

async function numeros(numero, numero1) {
  return new Promise((resolve) => {
    setTimeout(async () => {
     let calc = numero * numero1
    resolve =  console.log(calc)
    return resolve()
    }, 1000);
  });
}

numeros(23,2)
