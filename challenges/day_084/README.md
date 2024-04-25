# Day 84

## Desafio:

	Implemente um algoritmo de busca em um array utilizando JavaScript puro. O algoritmo deve receber como entrada um array e um elemento a ser buscado, e deve retornar a posição do elemento no array, se encontrado, ou -1 caso contrário. Utilize apenas JavaScript puro, sem utilizar métodos de array como indexOf, find ou includes. Se necessário, você pode utilizar estruturas de controle como for ou while. Certifique-se de testar seu algoritmo com diferentes arrays e elementos de busca para garantir sua precisão e eficiência.

**Resultado:**

```javascript

async function ordem(array) {
    let length = [2, 4, 56, 21, 42, 32, 1, 5];
    length.push(array);
    
    for (let index = 0; index < length.length; index++) {
        console.log(length[index]);
    }
}

ordem(10);
