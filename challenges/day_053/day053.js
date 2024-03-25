async function ParOuImpar(number) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve("Par")
      } else {
        reject("Impar")
      }
    }, 1000);
  })
}
ParOuImpar(13)
.then(result =>{
  console.log(result)
})
.catch(err =>{
  console.log(err)
})