function fatorial(novoNumero) {
    if (novoNumero === 0 || novoNumero === 1) {
        return 1;
    } else {
        return novoNumero * fatorial(novoNumero - 1);
    }
}

let numero = 5
console.log("O fatorial de " + numero + " é " + fatorial(numero))