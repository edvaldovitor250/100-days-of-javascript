# Day 52

## Desafio:

	Crie uma função que recebe um objeto com propriedades nome, idade e profissao, e retorne uma Promise que resolve após 1 segundo, exibindo essas informações formatadas.
**Resultado:**

```javascript

async function getUser() {
  let obj = {
    nome: "edvaldo",
    idade: 23,
    profissao: "Médico",

    getDate() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Meu nome " + this.nome + ", Minha idade " + this.idade + ", Minha profissão " + this.profissao);
        }, 1000);
      });
    }
  };

  const data = await obj.getDate();
  console.log(data);
}

getUser();
