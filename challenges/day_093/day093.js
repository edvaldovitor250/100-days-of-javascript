class ReceitaCulinaria {
  constructor() {
    this.receitas = [
      {
        nome: "Bolo de Chocolate",
        ingredientes: ["farinha de trigo", "açúcar", "cacau em pó", "fermento em pó", "ovos", "leite", "óleo", "chocolate"],
        modoPreparo: "Misture os ingredientes secos, adicione os líquidos e o chocolate derretido. Asse em forno pré-aquecido a 180°C por 40 minutos."
      },
      {
        nome: "Lasanha de Frango",
        ingredientes: ["massa para lasanha", "peito de frango", "molho de tomate", "queijo muçarela", "queijo parmesão", "cebola", "alho", "sal", "pimenta"],
        modoPreparo: "Cozinhe o peito de frango e desfie. Refogue a cebola e o alho, adicione o frango desfiado e o molho de tomate. Em um refratário, alterne camadas de massa, frango e queijo. Asse em forno pré-aquecido a 180°C por 30 minutos."
      },
      {
        nome: "Salada Caesar",
        ingredientes: ["alface romana", "croutons", "queijo parmesão", "peito de frango grelhado", "molho Caesar"],
        modoPreparo: "Misture a alface com os croutons, queijo parmesão ralado e o peito de frango grelhado cortado em tiras. Adicione o molho Caesar e sirva."
      }
    ];
  }

  addReceita(nome, ingredientes, modoPreparo) {
    this.receitas.push({
      nome: nome,
      ingredientes: ingredientes,
      modoPreparo: modoPreparo
    });
  }

  deleteReceita(nome) {
    this.receitas = this.receitas.filter(receita => receita.nome !== nome);
  }

  listReceitas() {
    console.log("Lista de Receitas:");
    this.receitas.forEach(receita => {
      console.log("- " + receita.nome);
    });
  }

  filterReceita(nome) {
    const receitaEncontrada = this.receitas.find(receita => receita.nome === nome);
    if (receitaEncontrada) {
      console.log("Nome:", receitaEncontrada.nome);
      console.log("Ingredientes:", receitaEncontrada.ingredientes.join(", "));
      console.log("Modo de Preparo:", receitaEncontrada.modoPreparo);
    } else {
      console.log("Receita não encontrada.");
    }
  }
}

const receitas = new ReceitaCulinaria();

receitas.addReceita("Pudim de Leite", ["leite condensado", "leite", "ovos", "açúcar"], "Misture os ingredientes, caramelize a forma, asse em banho-maria por 1 hora.");

receitas.listReceitas();

receitas.filterReceita("Bolo de Chocolate");

receitas.deleteReceita("Lasanha de Frango");

receitas.listReceitas();
