# Day 74

## Desafio:

Implemente um aplicativo de agenda pessoal utilizando classes em JavaScript para manipulação de arrays e objetos.
        
**Resultado:**

```javascript

class agendamento {

    constructor() {
        this.dados = [];
    }

    agendar() {

        let data = new Date();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();
        let horaFormatada = hora + ":" + minuto + ":" + segundo;
        let dataFormatada = dia + "/" + mes + "/" + ano;

        this.dados.push({ data: dataFormatada, hora: horaFormatada });

    }

    cancelar() {
        this.dados = [];
    }

}

const minhaAgenda = new agendamento()

minhaAgenda.agendar();

console.log(minhaAgenda.dados);

minhaAgenda.cancelar();

console.log(minhaAgenda.dados);