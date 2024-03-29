async function primo(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let primo = true;
      if (numero <= 1) {
        primo = false;
      } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
            primo = false;
            break;
          }
        }
      }
      if (primo) {
        console.log(`${numero} é primo`);
      } else {
        console.log(`${numero} não é primo`);
      }
      resolve();
    }, 1000);
  });
}

primo(22);
