# Day 36


## Desafio:

		Implementar um throttler usando setTimeout	

**Resultado:**

```javascript
function throttler(funcao, intervalo) {
    let ultimoExecutado = 0;
    let timeoutId = null;
  
    return function (...args) {
      const agora = Date.now();
      const tempoRestante = Math.max(0, ultimoExecutado + intervalo - agora);
  
      clearTimeout(timeoutId);
  
      if (tempoRestante === 0) {
        funcao(...args);
        ultimoExecutado = agora;
      } else {
        timeoutId = setTimeout(() => {
          funcao(...args);
          ultimoExecutado = Date.now();
        }, tempoRestante);
      }
    };
  }
  
  const funcaoThrottled = throttler(() => {
    console.log("Função executada");
  }, 1000);
  
  funcaoThrottled();
  funcaoThrottled();
  funcaoThrottled();
  