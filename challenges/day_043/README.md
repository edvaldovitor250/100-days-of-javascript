# Day 43

## Desafio:

	Crie um aplicativo de previsão do tempo utilizando uma API de previsão e async/await.

**Resultado:**

```javascript

async function weather(localizcao) {
  let API_KEY = "9c31ccf1b2f16a6e8baa8e773bcb5ae4"
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizcao}&appid=${API_KEY}`);
  let result = await response.json();

  console.log(result);
  return result;
}

weather("Brasília").then(data => {
  console.log(data);
  return data;
})