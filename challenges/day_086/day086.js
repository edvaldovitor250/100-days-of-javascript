class list{
    constructor(){
        this.list = []
    }

    adicionar(texto){
        this.list.push(texto)
        console.log(texto)
        console.log(this.list)
    }

    remover(texto){
        this.list.splice(this.list.indexOf(texto), 1)
        console.log(texto)
        console.log(this.list)
    }

    editarTexto(){
        this.list.splice(this.list.indexOf(texto), 1)
        console.log(texto)
        console.log(this.list)
    }


}

const texto = new list()

texto.adicionar("nweotwontowinertniowniotr")