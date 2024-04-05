async function validorDeNome(nome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let nomes = []

      if (nomes.includes(nome)) {
        console.log('Nome já em uso')
        reject('Nome já em uso')
      } else {
        nomes.push(nome)
        console.log('Nome cadastrado com sucesso: ' + nomes)
        resolve('Nome cadastrado com sucesso')
      }
    }, 2000)
  })
}

validorDeNome('vitor')
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
