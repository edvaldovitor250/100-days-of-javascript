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