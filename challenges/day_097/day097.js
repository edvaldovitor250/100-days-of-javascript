class Exercicios {
  constructor() {
    this.registro = [];
    this.alongamentosLista = ['Alongamento de pescoço', 'Alongamento de braços', 'Alongamento de pernas', 'Alongamento de costas'];
    this.peitoLista = ['Peito de frango', 'Peito de peru', 'Peito de frango grelhado', 'Peito de camarão'];
    this.costasLista = ['Costas de frango', 'Costas de peru', 'Costas de frango grelhado', 'Costas de camarão'];
    this.pernasLista = ['Pernas de frango', 'Pernas de peru', 'Pernas de frango grelhado', 'Pernas de camarão'];
  }

  adicionarExercicio(tipo, exercicio) {
    switch (tipo) {
      case 'alongamentos':
        this.alongamentosLista.push(exercicio);
        break;
      case 'peito':
        this.peitoLista.push(exercicio);
        break;
      case 'costas':
        this.costasLista.push(exercicio);
        break;
      case 'pernas':
        this.pernasLista.push(exercicio);
        break;
      default:
        console.log('Tipo de exercício inválido.');
    }
  }

  marcarConcluido(tipo, exercicio) {
    switch (tipo) {
      case 'alongamentos':
        this.marcarExercicioConcluido(this.alongamentosLista, exercicio);
        break;
      case 'peito':
        this.marcarExercicioConcluido(this.peitoLista, exercicio);
        break;
      case 'costas':
        this.marcarExercicioConcluido(this.costasLista, exercicio);
        break;
      case 'pernas':
        this.marcarExercicioConcluido(this.pernasLista, exercicio);
        break;
      default:
        console.log('Tipo de exercício inválido.');
    }
  }

  marcarExercicioConcluido(lista, exercicio) {
    const index = lista.indexOf(exercicio);
    if (index !== -1) {
      lista[index] = `[✓] ${exercicio}`;
    } else {
      console.log('Exercício não encontrado.');
    }
  }

  visualizarProgresso() {
    console.log('--- Progresso ---');
    console.log('Alongamentos:', this.alongamentosLista.join(', '));
    console.log('Peito:', this.peitoLista.join(', '));
    console.log('Costas:', this.costasLista.join(', '));
    console.log('Pernas:', this.pernasLista.join(', '));
  }
}

const exercicios = new Exercicios();
exercicios.adicionarExercicio('alongamentos', 'Alongamento de tríceps');
exercicios.marcarConcluido('peito', 'Peito de frango');
exercicios.visualizarProgresso();
