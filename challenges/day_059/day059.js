function verificaNumero(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 0) {
        resolve("O número é positivo.");
      } else if (numero < 0) {
        resolve("O número é negativo.");
      } else {
        resolve("O número é zero.");
      }
    }, 1000); 
  });
}

verificaNumero(5)
  .then(resultado => {
    console.log(resultado); 
  })
  .catch(error => {
    console.error("Ocorreu um erro:", error);
  });
