# Day 41


## Desafio:

Faça uma requisição HTTP usando a função fetch com async/await.

**Resultado:**

```javascript
async function getDate(){
  let response = await fetch('https://api.adviceslip.com/advice');
  let result = await response.json();

  console.log(result);
}

getDate();
