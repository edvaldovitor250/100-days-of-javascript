# Day 75

## Desafio:

Desenvolva um sistema de busca de informações em uma API pública de sua escolha utilizando apenas JavaScript puro, manipulando arrays e objetos. Utilize async e await com Promises para lidar com requisições assíncronas.
        
**Resultado:**

```javascript

async function getApi(){
    try {
        const urls = [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/3"
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)))
        const data = await Promise.all(responses.map(response =>response.json()))

        console.log(data);

    } catch (error) {
        console.log(`Seu error é ${error.message}`)
    }

}

getApi()