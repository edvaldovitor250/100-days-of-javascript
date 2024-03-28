async function numeros(numero, numero1) {
  return new Promise((resolve) => {
    setTimeout(async () => {
     let calc = numero * numero1
    resolve =  console.log(calc)
    return resolve()
    }, 1000);
  });
}

numeros(23,2)