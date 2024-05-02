class Comercio{
    constructor(){
        this.produtos = [];
    }

    addProduct(nome,valor){
        const novoProduto = {nome,valor};
        this.produtos.push(novoProduto);
        console.log("Seu cadastro está salvo:", novoProduto);
    }

    deleteProduct(nome,valor){
        const index = this.produtos.findIndex(produto => produto.nome === nome && produto.valor === valor);
        if (index!== -1) {
            const produtoRemovido = this.produtos.splice(index, 1);
            console.log("Seu cadastro está removido:", produtoRemovido);
        } else {
            console.log("Nenhum cadastro encontrado com o ID:", id);
        }
    }

    listProduct() {
        console.log("Listando todos os produtos:");
        this.produtos.forEach(produto => {
            console.log(produto);
        });
    }

    filterProduct(nome){
        return this.produtos.filter(prod => prod.nome === nome);

    }
}


const comercio = new Comercio();

comercio.addProduct("Camiseta", 25.99);
comercio.addProduct("Calça", 39.99);
comercio.addProduct("Tênis", 59.99);

comercio.listProduct();

const produtosFiltrados = comercio.filterProduct("Calça");
console.log("Produtos filtrados por nome:", produtosFiltrados);

comercio.deleteProduct("Camiseta", 25.99);

comercio.listProduct();
