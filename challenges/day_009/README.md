# Day 9

## Desafio:
Crie uma função em JavaScript que receba uma lista de nomes como entrada e retorne um novo array contendo apenas os nomes que começam com a letra "A".

**Resultado:**

```javascript
function filterNames(names) {
    let filteredNames = names.filter(name => name.startsWith("A"));
    console.log(filteredNames);
}

let nameList = ["Ana", "Carlos", "Edvaldo", "Victor"];

filterNames(nameList);
