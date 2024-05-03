# Day 92

## Desafio:

		Implemente um jogo de adivinhação utilizando inteligência artificial básica com manipulação avançada de arrays e objetos em JavaScript.

**Resultado:**

```javascript
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function guessNumber(min, max) {
    let guess;
    let attempts = 1;
  
    while (true) {
      guess = randomNumber(min, max);
      let response = prompt(`É o número ${guess}? (sim, mais, menos)`);
  
      if (response.toLowerCase() === 'sim') {
        alert(`Adivinhei em ${attempts} tentativas! O número é ${guess}.`);
        break;
      } else if (response.toLowerCase() === 'mais') {
        min = guess + 1;
      } else if (response.toLowerCase() === 'menos') {
        max = guess - 1;
      } else {
        alert('Por favor, responda com "sim", "mais" ou "menos".');
      }
  
      attempts++;
    }
  }
  
  function startGame() {
    alert("Pense em um número entre 1 e 100 e vou tentar adivinhar!");
    guessNumber(1, 100);
  }
  
  startGame();
  