# Day 50

## Desafio:

	Implemente uma função assíncrona que faz uma chamada de API

**Resultado:**

```javascript

async function addApi(api){
  let response = await fetch(api)
  let result = await response.json()
  console.log(result)

}

addApi()
