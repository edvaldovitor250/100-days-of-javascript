# Day 34


## Desafio:

	Implementar um debouncer usando setTimeout

**Resultado:**

```javascript
function debounce(func, delay) {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function minhaFuncao() {
    console.log("Executando função debounced...");
}

const debouncedFunction = debounce(minhaFuncao, 1000); 
debouncedFunction();
