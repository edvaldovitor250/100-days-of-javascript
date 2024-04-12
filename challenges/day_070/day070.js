async function deleteUsuar(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (id === id) {
                console.log("Deletando usuário com ID", id);
                resolve("Usuário deletado com sucesso");
            } else {
                reject("ID inválido, usuário não pode ser deletado");
            }
        }, 1000);
    });
}

deleteUsuar(12)
.then((date) => {console.log(date)})
.catch((err) => {console.log(err)})