# Day 90


## Desafio:

		Construa um sistema de reserva de hotéis online com manipulação avançada de arrays e objetos em JavaScript.

**Resultado:**

```javascript

class Hoteis {
    constructor() {
        this.cadastros = [];
    }

    cadastroHotel(id, nome, email, telefone) {
        const novoCadastro = { id, nome, email, telefone };
        this.cadastros.push(novoCadastro);
        console.log("Seu cadastro está salvo:", novoCadastro);
    }

    removerCadastro(id) {
        const index = this.cadastros.findIndex(cadastro => cadastro.id === id);
        if (index !== -1) {
            const cadastroRemovido = this.cadastros.splice(index, 1);
            console.log("Seu cadastro está removido:", cadastroRemovido);
        } else {
            console.log("Nenhum cadastro encontrado com o ID:", id);
        }
    }

    listarCadastros() {
        console.log("Listando todos os cadastros:");
        this.cadastros.forEach(cadastro => {
            console.log(cadastro);
        });
    }

    buscarCadastroPorId(id) {
        const cadastro = this.cadastros.find(cadastro => cadastro.id === id);
        if (cadastro) {
            console.log("Cadastro encontrado:", cadastro);
        } else {
            console.log("Nenhum cadastro encontrado com o ID:", id);
        }
    }

    buscarCadastroPorNome(nome) {
        const cadastrosEncontrados = this.cadastros.filter(cadastro => cadastro.nome === nome);
        if (cadastrosEncontrados.length > 0) {
            console.log("Cadastros encontrados com o nome", nome + ":", cadastrosEncontrados);
        } else {
            console.log("Nenhum cadastro encontrado com o nome:", nome);
        }
    }
}


const hoteis = new Hoteis();

hoteis.cadastroHotel(1, "Hotel A", "contato@hotela.com", "+55 123456789");
hoteis.cadastroHotel(2, "Hotel B", "contato@hotelb.com", "+55 987654321");
hoteis.cadastroHotel(3, "Hotel C", "contato@hotelc.com", "+55 111111111");

hoteis.removerCadastro(2);

hoteis.listarCadastros();

hoteis.buscarCadastroPorId(1);

hoteis.buscarCadastroPorNome("Hotel C");

