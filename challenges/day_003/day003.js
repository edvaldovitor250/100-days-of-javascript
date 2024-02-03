const readline = require('readline');

const frutas = ["Banana", "Caju", "Limão", "Uva", "Maça"];

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a fruta: ", (novaFrutas) => {
  frutas.push(novaFrutas)
  frutas.forEach((element, index) => {
    console.log((index + 1) + ": " + element );
  });
  rl.close();
})