# Day 68

## Desafio:

				Crie uma função que recebe uma lista de URLs como parâmetro e retorna uma Promise que faz requisições HTTP GET para todas essas URLs e resolve com um array contendo os dados obtidos de todas as requisições, após 2 segundos.
        
**Resultado:**

```javascript

const axios = require('axios');

function fetchDataFromURLs(urls) {
    const requests = urls.map(url => axios.get(url).then(response => response.data));

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.all(requests)
                .then(data => resolve(data)) 
                .catch(error => reject(error)); 
        }, 2000);
    });
}

const urls = ['http://example.com/api/data1', 'http://example.com/api/data2', 'http://example.com/api/data3'];

fetchDataFromURLs(urls)
    .then(data => {
        console.log('Dados obtidos:', data);
    })
    .catch(error => {
        console.error('Erro ao obter dados:', error);
    });


