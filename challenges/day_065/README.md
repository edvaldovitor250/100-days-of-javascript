# Day 65

## Desafio:

				Crie uma função que recebe um array de objetos como parâmetro e retorna uma Promise que resolve com a média das idades desses objetos, após 1 segundo.
        
**Resultado:**

```javascript

async function mediaDeIdades(...idades) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const soma = idades.reduce((acc,idades) => acc + idades,0)
      const media = soma / idades.length
      resolve(media);
    }, 1000);
  });
}

mediaDeIdades(2, 3, 4, 5, 6, 7, 8, 9, 10).then((data) => {
  console.log(data);
});
