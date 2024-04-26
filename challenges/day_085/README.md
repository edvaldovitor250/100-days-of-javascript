# Day 85

## Desafio:

Implemente um sistema de cadastro de usuários que permita ao usuário inserir seu nome, e-mail e senha utilizando apenas JavaScript puro. Utilize manipulação de arrays e objetos e async e await com Promises, se necessário, para lidar com operações assíncronas, como a validação dos dados.

**Resultado:**

```javascript

function getImplementations() {
    const implementations = ["vitor", "edvaldo1243@gmail.com"];
    const implementationsPasswords = ["senha1", "9092123"];

    return [implementations, implementationsPasswords];
}

async function login(nome, email, senha) {
    const [implementations, implementationsPasswords] = getImplementations();
    const indexNome = implementations.indexOf(nome);
    const indexEmail = implementations.indexOf(email);
    const indexSenha = implementationsPasswords.indexOf(senha.toString());

    console.log(indexNome, indexEmail, indexSenha);
}

login("vitor", "edvaldo1243@gmail.com", "9092123"); 

