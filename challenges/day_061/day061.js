async function quadradoPerfeito(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let raiz = Math.sqrt(numero);
      if (raiz % 1 === 0) {
        resolve(true);
        console.log(`numero é ${numero}, já sua raiz ${raiz}`);
        console.log("Ela é perfeita!") ;
      } else {
        console.log(`Seu numero ${numero}, já sua raiz ${raiz}`);
        console.log("Ela não é perfeita!") ;
        reject(false);
        
      }
    }, 1000);
  });
}

quadradoPerfeito(19)
  .then(resultado => {
    console.log(resultado); 
  })
  .catch(error => {
    console.error(error); 
  });
