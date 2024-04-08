function atualizarDados(novosDados) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(novosDados)
    }, 3000);
  });
}

const novosDadosUsuarios ={
  nome: 'edvaldo',
  idade: 23,
  email: 'edvaldo@gmail.com'
}

atualizarDados(novosDadosUsuarios).then((data) => console.log(data))
.catch((err) => console.error(err))

