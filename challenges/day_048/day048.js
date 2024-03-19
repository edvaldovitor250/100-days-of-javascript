async function getMusic(){
  let response = await fetch('https://jsonplaceholder.typicode.com/albums');

  if(response.ok){
    let result = await response.json();
    console.log(result);
  } else{
    throw new Error('Erro ao obter os dados. Código de status:'+ result.status);
  }
}

getMusic();