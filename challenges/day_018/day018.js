let list = [1, 2, 3, 5, 7,2,5,2000];

function calcularMedia() {
  let  soma = 0

  for (let i = 0; i < list.length; i++) {
   soma += list[i]
  }

  console.log(soma / list.length)
}

calcularMedia()