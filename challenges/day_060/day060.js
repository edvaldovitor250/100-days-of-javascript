function concatenaStrings(arrayDeStrings) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const concatenacao = arrayDeStrings.join('');
      resolve(concatenacao);
    }, 1000);
  });
}

const arrayDeStrings = ['Olá, ', 'mundo', '!'];
concatenaStrings(arrayDeStrings)
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
