# Day 37


## Desafio:

		Criar um objeto Temporizador com métodos para iniciar, pausar e reiniciar usando setInterval	

**Resultado:**

```javascript
let temporizador = {
  tempo: 0,

  start: () => {
    temporizador.tempo = setInterval(() => {
      console.log("Incializando...");
      console.log(temporizador.tempo);
    }, 1000);
  },
  restart: () => {
    console.log("Restart...");
    temporizador.stop();
    temporizador.start();
  },

  stop: () => {
    console.log("Stop...");
    clearInterval(temporizador.tempo);

  }
}

temporizador.start();
temporizador.restart();
setTimeout(() => {
  temporizador.stop();
}, 3000)