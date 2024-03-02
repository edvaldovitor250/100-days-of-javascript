let count = 0;
let parar = null;

function cronograma(numero) {
    if (numero <= count) {
        console.log(`Bateu seu cronograma de ${numero}`);
        clearInterval(parar);
    } else {
        console.log(`Está cronograma passando o tempo ${count}`);
    }
}

parar = setInterval(() => {
    count++; 
    cronograma(5); 
}, 1000); 