async function mensagem(msg) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(msg);
  } catch (error) {
    console.error("Ocorreu um erro: ", error.message);
  }
}

mensagem("Day 40 of 100 days in JS");
