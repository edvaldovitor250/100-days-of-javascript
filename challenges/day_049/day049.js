async function getMusic(qtnd) {
  try {
    if (qtnd <= 0) {
      throw new Error('A quantidade deve ser um número positivo');
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${qtnd}`);

    if (!response.ok) {
      throw new Error(`Erro ao obter os dados. Código de status: ${response.status}`);
    }

    const result = await response.json();
    
    return result;
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
    return null; 
  }
}

getMusic(10).then(data => {
  if (data) {
    console.log(data);
  } else {
    console.log('Não foi possível obter os dados');
  }
});
