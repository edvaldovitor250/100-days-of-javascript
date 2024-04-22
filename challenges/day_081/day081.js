async function searchPhotos(query) {
    const apiKey = 'bmoCQZc3piL3YLP8xtrTl6gHsncL7heYW2YgT5B2WbJ4BLxvayOjNJ5p';
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

