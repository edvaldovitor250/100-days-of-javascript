# Day 95

## Desafio:

			Implemente um aplicativo de chatbot com manipulação avançada de arrays e objetos em JavaScript..

**Resultado:**

```javascript

const respostas = {
  "Olá": "Olá! Como posso ajudá-lo?",
  "Qual é a linguagem de programação mais popular?": "Atualmente, JavaScript é uma das linguagens de programação mais populares.",
  "O que é um array em JavaScript?": "Um array em JavaScript é uma estrutura de dados que armazena uma coleção de elementos, sendo acessíveis por meio de índices.",
  "O que é um objeto em JavaScript?": "Um objeto em JavaScript é uma estrutura de dados que armazena pares de chave e valor, permitindo o armazenamento de informações estruturadas."
};

function processarPergunta(pergunta) {
  if (respostas[pergunta]) {
    return respostas[pergunta];
  } else {
    return "Desculpe, não entendi sua pergunta. Posso te ajudar com algo mais?";
  }
}

function chatbot() {
  let pergunta = prompt("Olá! Como posso ajudá-lo?");

  while (pergunta !== "sair") {
    let resposta = processarPergunta(pergunta);
    console.log(resposta);
    pergunta = prompt("Posso te ajudar com mais alguma coisa? (Digite 'sair' para encerrar)");
  }

  console.log("Obrigado por conversar comigo. Até mais!");
}

chatbot();
