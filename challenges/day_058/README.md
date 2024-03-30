# Day 58

## Desafio:

			Implemente uma função que simule um processo assíncrono de envio de e-mail. Esta função deve receber um endereço de e-mail como parâmetro e retornar uma Promise que simule o envio de e-mail para esse endereço, resolvendo após 3 segundos.

**Resultado:**

```javascript

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
