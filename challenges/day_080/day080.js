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
