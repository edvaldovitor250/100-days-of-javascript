# Day 51

## Desafio:

Implemente uma função assíncrona que faz uma chamada de API
**Resultado:**

```javascript

async function addApi() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await response.json();
  console.log(data);
  return data;
}

addApi();
