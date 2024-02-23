# Day 23

## Desafio:

	Criar um objeto Carro com métodos para acelerar e frear

**Resultado:**

```javascript
let Carro = {
    marca: "Ford",
    modelo: "Mustang",
    ano: 2020,
    velocidade: 100,
    acelerar: function() {
        console.log(this.velocidade += 10);
    },
    frear: function() {
      console.log(  this.velocidade -= 10);
    }

}
Carro.frear();