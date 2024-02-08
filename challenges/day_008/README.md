# Day 8

## Desafio:
Crie um objeto com pelo menos 3 propriedades, permita a atualização de uma delas e imprima o objeto atualizado no console.

**Resultado:**

```javascript

let pessoa = {
    name: "vitor",
    idade: 12,
    dataDeAniversario: "19/01/2000",

    trocar(idade){
        this.idade = idade;
        console.log("Minha idade é " + idade)
    }
}
console.log(pessoa)
pessoa.trocar(18)