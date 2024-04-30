class Financeiro {
    constructor() {
        this.notas = [];
    }
    
    addNota(nota) {
        this.notas.push(nota);
        console.log("Nota adicionada:", nota);
        console.log("Todas as notas:", this.notas);
    }

    removeNota(nota) {
        const index = this.notas.indexOf(nota);
        if (index !== -1) {
            this.notas.splice(index, 1);
            console.log("Nota removida:", nota);
            console.log("Todas as notas:", this.notas);
        } else {
            console.log("Nota não encontrada:", nota);
        }
    }

    pesquisarNota(nota) {
        const notasEncontradas = this.notas.filter(n => n === nota);
        console.log("Notas encontradas:", notasEncontradas);
    }

    pegarTodasAsNotas() {
        console.log("Todas as notas:", this.notas);
    }
}


const financeiro = new Financeiro();

financeiro.addNota(100); 
financeiro.addNota(50);  
financeiro.addNota(20);  
financeiro.addNota(10);  

financeiro.removeNota(50); 
financeiro.pesquisarNota(20); 

financeiro.pegarTodasAsNotas(); 
