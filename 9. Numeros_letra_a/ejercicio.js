function numeroDeAes(str) {
    // Usamos split() para dividir la cadena en un array de caracteres, 
    // luego usamos filter() para contar cuántas veces aparece 'a'
    return str.split('a').length - 1;
}

// Código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
