class Saude{
  constructor() {
    this.febre = ["Gripe", "Dengue", "COVID-19", "Infecção Urinária"],
    this.tosse = ["Resfriado", "Bronquite", "Asma", "Pneumonia"],
    this.dorDeGarganta = ["Amigdalite", "Faringite", "COVID-19", "Mononucleose"],
    this.diarreia = ["Gastroenterite", "Intoxicação Alimentar", "Doença de Crohn", "Síndrome do Intestino Irritável"],
    this.dificuldadeDeRespirar = ["Asma", "Pneumonia", "Insuficiência Cardíaca", "Embolia Pulmonar"],
    this.doresNoCorpo = ["Gripe", "Dengue", "COVID-19", "Fibromialgia"]
  }

  TipoDeSitomas(tipo){

    switch (tipo) {
      case "febre":
        this.febre.forEach(element => {
          console.log(element)
        });
        
        break;

        case "tosse":
        this.tosse.forEach(element => {
          console.log(element)
        });
        
        break;

        case "dorDeGarganta":
        this.dorDeGarganta.forEach(element => {
          console.log(element)
        });
        
        break;

        case "diarreia":
        this.diarreia.forEach(element => {
          console.log(element)
        });
        
        break;

        case "dificuldadeDeRespirar":
        this.dificuldadeDeRespirar.forEach(element => {
          console.log(element)
        });
        
        break;

        case "doresNoCorpo":
        this.doresNoCorpo.forEach(element => {
          console.log(element)
        });
        
        break;

        case "todos":
    
      default:
        console.log("Coloque um sitoma válido.")
        break;
    }
  }

}

const saude = new Saude();

saude.TipoDeSitomas("febre");