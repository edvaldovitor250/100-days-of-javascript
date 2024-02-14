# Day 14

## Desafio:

	Implemente um algoritmo de pesquisa binária.

**Resultado:**

```javascript
let  array = [1,3,56,7,6,4,20]

let busca_binaria = (array,left, right, valor)=>{
  let mid = Math.floor((left + right) / 2);
  if(array[mid] === valor){
    return mid;
  }else if(array[mid] < valor){
    return busca_binaria(array, mid + 1, right, valor);
  }else{
    return busca_binaria(array, left, mid - 1, valor);
  }


}

console.log(busca_binaria(array, 0, array.length - 1, 20));