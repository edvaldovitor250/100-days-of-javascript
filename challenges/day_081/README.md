# Day 81

## Desafio:

	Construa uma aplicação de galeria de fotos simples utilizando apenas JavaScript puro. A aplicação deve exibir uma grade de imagens que podem ser ampliadas ao clicar nelas. Utilize manipulação de arrays e objetos para armazenar as imagens e async e await com Promises, se necessário, para carregar as imagens de forma assíncrona.
        
**Resultado:**

```javascript
async function searchPhotos(query) {
    const apiKey = 'SUA_CHAVE_DA_API';
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        return data.photos;
    } catch (error) {
        console.error(`Ocorreu um erro: ${error.message}`);
        return null;
    }
}

searchPhotos('nature').then(photos => {
    if (photos) {
        console.log(photos);
    } else {
        console.log('Não foi possível obter as fotos.');
    }
});

