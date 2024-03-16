# Day 45

## Desafio:

			Utilize a API do Google Maps para mostrar um mapa em uma página web de forma assíncrona.

**Resultado:**

```javascript

async function maps(dados){

  let api_key = "Coloque aqui a API do MAPS"
  let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${dados.latitude},${dados.longitude}&radius=500&type=restaurant&key=${api_key}`
  let response = await fetch(url)

  if (!response.ok) {
    throw new Error('Erro ao buscar locais próximos: ' + response.status);
  }

  console.log(response);
}

maps({latitude: -23.540, longitude: -46.630})
  .then(() => {
    console.log("Consulta de locais próximos concluída com sucesso.");
  })
  .catch(error => {
    console.error(error);
  });
