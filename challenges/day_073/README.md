# Day 73

## Desafio:

	Construa um sistema de busca com sugestões utilizando um array de objetos como fonte de dados.
        
**Resultado:**

```javascript

async function buscaDeDados(id, name) {
    const data = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Grapes' },
        { id: 5, name: 'Pineapple' },
        { id: 6, name: 'Strawberry' }
    ];

    let found = false;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id && data[i].name.toLowerCase() === name.toLowerCase()) {
            found = true;
            console.log(`Sua busca está presente para o ID: ${id} e nome: ${name}`);
            break; 
        }
    }

    if (!found) {
        console.log('Sua busca não está presente.');
        console.log('Sugestão: Verifique o que você cadastrou ou ajuste a busca.');
    }
}

buscaDeDados(1, 'Apple');
