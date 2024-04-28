class Cronometro {
    constructor() {
        this.intervalo = null; 
    }

    iniciar(tempo) {
        let contador = tempo;
        this.intervalo = setInterval(() => {
            console.log(contador + " está diminuindo");
            contador--;

            if (contador < 0) {
                clearInterval(this.intervalo);
                console.log("Seu tempo está zerado");
            }
        }, 1000);
    }

    pausar() {
        clearInterval(this.intervalo);
        console.log("Seu tempo está pausado");
    }

    zerar() {
        clearInterval(this.intervalo);
        console.log("Seu tempo está zerado");
    }
}

const correr = new Cronometro();
correr.iniciar(20);

correr.pausar()