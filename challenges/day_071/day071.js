async function tamanhoDoArray(dato) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tamanho = []
            tamanho.push(dato)

            console.log(tamanho.length)
            resolve(tamanho)

            reject("Não contem nada")

            
        }, 1000);
    });
}

tamanhoDoArray("vitor")
.then((date) => {console.log(date)})
.catch((err) => {console.log(err)})