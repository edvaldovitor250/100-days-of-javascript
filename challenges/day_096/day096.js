class Habito{

  Estressado(){
    console.log("A pessoa reconhece que está estressada por alguns indícios emocionais, como o sofrimento por antecipação, os pensamentos negativos, não ter flexibilidade para nada ou não saber sair de situações simples. ")
  }

  Feliz(){
    console.log("A pessoa reconhece que está feliz por alguns indícios emocionais, como o sofrimento por antecipação, os pensamentos negativos, não ter flexibilidade para nada ou não saber sair de situações simples. ")
  }

  Triste(){
    console.log("A pessoa reconhece que está triste por alguns indícios emocionais, como o sofrimento por antecipação, os pensamentos negativos, não ter flexibilidade para nada ou não saber sair de situações simples. ")
  }
  
  escolha(Habito){
    if(Habito == "Estressado"){
      this.Estressado()
    }else if(Habito == "Feliz"){
      this.Feliz()
    }else if(Habito == "Triste"){
      this.Triste()
    }else{
      console.log("Habito não encontrado")
    }
  }

}

const feliz = new Habito();

feliz.escolha("Estressado")
