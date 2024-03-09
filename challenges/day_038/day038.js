function executar(tempo) {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Tempo para inicar foi " + tempo);
      }, tempo);
    });
  }

executar(0).then((mensagem) => {
console.log(mensagem);
}) .catch((err) => {
  console.log(err);
})
