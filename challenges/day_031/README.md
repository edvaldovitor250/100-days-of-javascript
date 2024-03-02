# Day 31

## Desafio:

	Criar um cronômetro usando setInterval

**Resultado:**

```javascript
let count = 1;

function verificarCronograma(numero) {
    if (numero <= count) {
        console.log(`Bateu seu cronograma de ${numero}`);
    } else {
        console.log(`Está cronograma passando o tempo ${count}`);
        setTimeout(verificarCronograma, 1000, numero);
        count++;
    }
}

verificarCronograma(5);
