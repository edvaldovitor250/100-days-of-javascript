async function maiorNumero(...numeros) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numeros.length === 0) {
        reject(new Error('Nenhum número foi fornecido.'));
      } else {
        const maior = Math.max(...numeros);
        resolve(maior);
      }
    }, 1000);
  });
}

// Exemplo de uso
maiorNumero(12, 4, 2, 6, 8)
  .then(maior => {
    console.log('O maior número é:', maior);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });
