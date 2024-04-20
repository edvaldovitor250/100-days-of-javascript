# Day 79

## Desafio:

	Crie um aplicativo de calculadora simples utilizando apenas JavaScript puro. A calculadora deve ser capaz de realizar operações básicas (adição, subtração, multiplicação, divisão) e mostrar o resultado na tela. Utilize manipulação de arrays e objetos e async e await com Promises, se necessário, para operações assíncronas, como a obtenção de dados do usuário.
        
**Resultado:**

```javascript

class Implementations{
    constructor(){
        this.implementations = ["vitor", "castro", "Luiz"];
        this.implementationsPassWords = [12443,3213,5435];
    }

    getImplementations(){
        return [this.implementations, this.implementationsPassWords];
    }

    async getLogin(nome, senha){
        const [implementations, implementationsPassWords] = this.getImplementations();
        const indexNome = implementations.indexOf(nome);
        const indexSenha = implementationsPassWords.indexOf(senha);

        if(indexNome !== -1 && indexSenha !== -1){
            console.log("Login efetuado com sucesso");            
        } else {
             console.log("Nome incorreto ou senha incorreta");
        }
    }
}

const user1 = new Implementations();

user1.getImplementations();

user1.getLogin("vitor", 124423);