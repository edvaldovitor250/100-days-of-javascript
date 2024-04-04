async function getNumber(numero) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (numero % 5 == 0) {
        console.log("É multiplico de 5")
        resolve()
      } else {
        console.log("Não é multiplico de 5")
        reject()
      }


    })

  }, 2000)
}

getNumber(22)