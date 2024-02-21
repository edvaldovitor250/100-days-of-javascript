# Day 21

## Desafio:

		Criar um objeto Pessoa com métodos para calcular a idade

**Resultado:**

```javascript
let Pessoa = {
    nome: 'Edvaldo',
    idade: 25,
    cidade: 'Rio de Janeiro',
    peso: 70,
    altura: 1.80,
    
    aniversario(){
        let somaDoAniversario = this.idade + 1
        let printIdade = (" Minha idade é " + somaDoAniversario)
        return console.log(printIdade)
    }
}

Pessoa.aniversario()