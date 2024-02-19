# Day 19

## Desafio:

	Implemente um algoritmo de ordenação rápida (quicksort).

**Resultado:**

```javascript
function ordenacaoRapida(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...ordenacaoRapida(left), pivot, ...ordenacaoRapida(right)];
}

const arr = [1, 2, 3, 6, 5,4, 6, 7, 8, 9, 10];
const ordenado = ordenacaoRapida(arr);
console.log(ordenado);
