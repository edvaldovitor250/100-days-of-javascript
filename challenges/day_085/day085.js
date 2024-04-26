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

