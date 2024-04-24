async function cotacao(moeda, moedaParaConverter) {
    try {
        let response = await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}-${moedaParaConverter}`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        let result = await response.json();
        console.log(result);

        if (result[`${moeda}-${moedaParaConverter}`]) {
            return result[`${moeda}-${moedaParaConverter}`].bid;
        } else {
            throw new Error(`A moeda ${moedaParaConverter} não foi encontrada.`);
        }
    } catch (error) {
        console.error(`Ocorreu um erro: ${error.message}`);
        return null;
    }
}

cotacao("USD", "BRL").then(rate => {
    if (rate !== null) {
        console.log(`A taxa de conversão de USD para BRL é: ${rate}`);
    } else {
        console.log("Não foi possível obter a taxa de conversão.");
    }
});
