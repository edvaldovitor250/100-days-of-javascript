# Day 53

## Desafio:

	Crie uma função que aceite um número como parâmetro e retorne uma Promise que resolva se o número for par e rejeite se for ímpar, após 1 segundo.

**Resultado:**

```javascript

async function ParOuImpar(number) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve("Par")
      } else {
        reject("Impar")
      }
    }, 1000);
  })
}
ParOuImpar(13)
.then(result =>{
  console.log(result)
})
.catch(err =>{
  console.log(err)
})