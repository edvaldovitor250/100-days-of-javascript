async function numeros(numbers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      resolve(sum);
    }, 1000);
  });
}

numeros([1, 2, 3, 4, 5])
  .then(sum => {
    console.log('A soma dos números é:', sum);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
