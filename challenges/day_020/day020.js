function anagramas(palavra1, palavra2) {
    palavra1 = palavra1.replace(/\s/g, '').toLowerCase();
    palavra2 = palavra2.replace(/\s/g, '').toLowerCase();

    if (palavra1.length !== palavra2.length) {
        return false;
    }

    const sortedString1 = palavra1.split('').sort().join('');
    const sortedString2 = palavra2.split('').sort().join('');

    return sortedString1 === sortedString2;
}

const palavra1 = 'roma';
const palavra2 = 'amor';

if (anagramas(palavra1, palavra2)) {
    console.log(`As palavras são anagramas: ${palavra1} e ${palavra2}`);
} else {
    console.log(`As palavras não são anagramas: ${palavra1} e ${palavra2}`);
}
