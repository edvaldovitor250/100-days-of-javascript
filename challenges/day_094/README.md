# Day 94

## Desafio:

				Construa um sistema de gerenciamento de eventos com manipulação avançada de arrays e objetos em JavaScript.

**Resultado:**

```javascript

class Eventos {
  constructor() {
    this.eventos = [
      {
        nome: "Conferência de Tecnologia",
        data: "2024-06-15",
        local: "Centro de Convenções",
        participantes: ["João", "Maria", "Carlos"],
        descricao: "Uma conferência sobre as últimas tendências em tecnologia."
      },
      {
        nome: "Workshop de Marketing Digital",
        data: "2024-07-20",
        local: "Sala de Treinamento B",
        participantes: ["Ana", "Pedro", "Sandra"],
        descricao: "Um workshop prático sobre estratégias de marketing digital."
      },
      {
        nome: "Festa de Final de Ano",
        data: "2024-12-31",
        local: "Salão de Festas",
        participantes: ["Todos os funcionários"],
        descricao: "Celebração do sucesso do ano e boas-vindas ao próximo."
      }
    ];
  }


  addEvento(nome,data,local,participantes,descricao) {
   let add =  this.eventos.push({
      nome: nome,
      data: data,
      local: local,
      participantes: participantes,
      descricao: descricao
    });

    console.log(`${add} seu evento foi adicionado com sucesso`);
  }

  removeEvento(nome) {
    let remove = this.eventos.filter(evento => evento.nome === nome);
    if (remove.length > 0) {
      console.log("Evento removido com sucesso:", remove);
    } else {
      console.log("Nenhum evento encontrado com o nome:", nome);
    }
  }


  listarEventos() {
    console.log("Listando todos os eventos:");
    this.eventos.forEach(evento => {
      console.log(evento);
    });
  }

  filterEvento(nome){
    return this.eventos.filter(evento => evento.nome === nome);
  }

}


const eventos = new Eventos();

eventos.addEvento(
  "Palestra de Empreendedorismo",
  "2024-08-10",
  "Auditório Principal",
  ["Joana", "Paulo", "Luciana"],
  "Uma palestra inspiradora sobre como iniciar seu próprio negócio."
);

eventos.listarEventos();

const eventoFiltrado = eventos.filterEvento("Festa de Final de Ano");
console.log("Evento filtrado:", eventoFiltrado);

eventos.removeEvento("Workshop de Marketing Digital");

eventos.listarEventos();
