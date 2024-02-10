function contarLetrasEVogais(string) {
    let totalLetras = 0;
    let vogais = "";

    for (let index = 0; index < string.length; index++) {
        let caractere = string[index].toLowerCase();
        if (caractere >= 'a' && caractere <= 'z') {
            totalLetras++;
            if ("aeiou".includes(caractere)) {
                vogais += caractere;
            }
        }
    }

    return { totalLetras, vogais };
}

console.log(contarLetrasEVogais("pneumoultramicroscopicossilicovulcanoconiose "));
