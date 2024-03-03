# Day 32


## Desafio:

	Criar uma função que executa uma função callback após um intervalo de tempo

**Resultado:**

```javascript
function callBack(call,delay) {
    setTimeout(call,delay);
}

function call() {
    console.log("A função de callback foi executada após o intervalo de tempo.");

}

callBack(call,1000);