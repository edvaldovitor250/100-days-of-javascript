let intervalo = {

  tempo: null,

  iniciar: () =>{
    intervalo.tempo = setInterval(() => {
      console.log('Seu objeto está sendo iniciado....');
    }, 1000);
  },

  parar: () =>{
    clearInterval(intervalo.tempo);
    console.log('Seu objeto está parado....');
  }
}

intervalo.iniciar();
setTimeout(() => {
  intervalo.parar();
}, 3000);