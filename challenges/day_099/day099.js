class PassagemAereas {
  constructor() {
    this.voos = [];
  }

  adicionarVoo(ida, volta) {
    const novoVoo = { ida, volta };
    this.voos.push(novoVoo);
    console.log("Seu voo foi cadastrado:", novoVoo);
  }

  cancelarVoo(ida, volta) {
    const index = this.voos.findIndex(voo => voo.ida === ida && voo.volta === volta);
    if (index !== -1) {
      const vooRemovido = this.voos.splice(index, 1);
      console.log("Seu voo foi cancelado:", vooRemovido);
    } else {
      console.log("Nenhum voo encontrado com os IDs informados.");
    }
  }

  listarVoos() {
    console.log("Listando todos os voos:");
    this.voos.forEach(voo => {
      console.log(voo);
    });
  }
}

const passagem = new PassagemAereas();

passagem.adicionarVoo(1, 2);
passagem.listarVoos();
passagem.cancelarVoo(1, 2);
passagem.listarVoos();
