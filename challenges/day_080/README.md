# Day 80

## Desafio:

	Desenvolva um aplicativo de previsão do tempo que permita ao usuário inserir o nome de uma cidade e exiba a previsão do tempo atual. Utilize uma API de previsão do tempo gratuita, manipulação de arrays e objetos em JavaScript puro e async e await com Promises para lidar com requisições assíncronas à API.
        
**Resultado:**

```javascript

async function getWeather(cityName) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=9c31ccf1b2f16a6e8baa8e773bcb5ae4&lang=pt`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const weatherData = await response.json();

        console.log(weatherData);
    } catch (error) {
        console.error(`Ocorreu um erro: ${error.message}`);
    }
}

getWeather("Recife");
