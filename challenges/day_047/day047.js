let carrinho = {
  items: [],

  async adicionar(item) {
    this.items.push(item); 
    console.log("Item adicionado:", item);
    console.log("Itens no carrinho:", this.items);
  },

  async remover() {
    if (this.items.length === 0) {
      console.log("O carrinho está vazio. Não há itens para remover.");
    } else {
      const itemRemovido = this.items.pop(); 
      console.log("Item removido:", itemRemovido);
      console.log("Itens no carrinho:", this.items);
    }
  }
};

carrinho.adicionar("Produto 1");
carrinho.adicionar("Produto 2");
carrinho.remover();
