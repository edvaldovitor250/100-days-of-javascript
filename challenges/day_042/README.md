# Day 42


## Desafio:

	Manipule dados JSON obtidos de uma API usando async/await.

**Resultado:**

```javascript
function getCep(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados. Código de status: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => console.log('Ocorreu um erro:', error))
    .finally(() => "Fim!");
}

getCep(23812310);
