# Day 22

## Desafio:

		Implementar uma função que resolve equações quadráticas

**Resultado:**

```javascript
function quadratica (a,b,c) {

    let delta = Math.pow(b, 2) - 4 * a * c;
    console.log(delta)
    
}

quadratica(1,2,3)