# Day 55

## Desafio:

		Implemente uma função que recebe uma URL como parâmetro e retorna uma Promise que faz uma requisição HTTP GET para essa URL e resolve com os dados obtidos, após 2 segundos.

**Resultado:**

```javascript

async function getApi(url) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      let result = await fetch(url)
      let data = await result.json();
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

getApi('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')