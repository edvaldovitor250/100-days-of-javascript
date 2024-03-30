async function sendEmail(email) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if (email == email) {
        console.log("Enviando email para", email)
        resolve()

      } else{
        reject("Email inválido")
      }
    }, 1000);
  })
  
}

sendEmail("victor2323@gmail.com")