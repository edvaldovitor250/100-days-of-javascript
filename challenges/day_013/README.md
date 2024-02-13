# Day 13

## Desafio:

	Crie uma função para ordenar um array

**Resultado:**

```javascript
function ordenar(string, string1) {
  let array = [1, 2, 5, 4, 3, 5, 6];

  let tet = array.push(string1)


  array.sort((a, b) => a - b);

  console.log(array);
}

ordenar("1234567890",0);
