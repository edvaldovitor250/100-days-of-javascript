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