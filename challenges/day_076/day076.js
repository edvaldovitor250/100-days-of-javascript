class toDoList {
    constructor() {
        this.list = []
    }

    async addItem(item) {
        await this.list.push(item)
    }

    async removeItem(item) {
        await this.list.splice(this.list.indexOf(item), 1)
    }

     listItems() {
        return  this.list
    }

     clearList() {
         this.list =[]
    }


}

const list = new toDoList();

list.addItem("Comprar pão")

console.log(list.listItems())