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