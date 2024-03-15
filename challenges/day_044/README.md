# Day 44

## Desafio:

		Implemente um sistema de busca que retorna resultados em tempo real usando async/await.

**Resultado:**

```javascript

async function news(quantidade) {
  let response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${quantidade}`);
  let result = await response.json();

  console.log(result);
  return result;
}

news(3)
.then(data => {
  console.log(data);
  return data;
}).catch(err => {
  console.log(err);
})