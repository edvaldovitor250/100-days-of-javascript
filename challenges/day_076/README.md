# Day 76

## Desafio:

Construa uma aplicação de lista de tarefas (To-Do List) utilizando apenas JavaScript puro. A aplicação deve permitir adicionar, remover e marcar tarefas como concluídas, utilizando manipulação de arrays e objetos e async e await com Promises, se necessário.
        
**Resultado:**

```javascript

class toDoList{
    constructor(){
        this.list = []
    }

    addItem(item){
        this.list.push(item)
    }

    removeItem(item){
        this.list.splice(this.list.indexOf(item), 1)
    }

    listItems(){
        return this.list
    }

    clearList(){
        this.list = []
    }


}

const list = new toDoList();

list.addItem("Comprar pão")

console.log(list.listItems())