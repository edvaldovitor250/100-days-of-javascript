# Day 33


## Desafio:

	Criar um objeto Animacao com métodos para iniciar e parar uma animação usando setInterval

**Resultado:**

```javascript
let animacao = {
    iniciar: () => {
        setInterval(() => {
            console.log('Seu objeto está sendo iniciado....');
        }, 1000);
    }
};

animacao.iniciar();
