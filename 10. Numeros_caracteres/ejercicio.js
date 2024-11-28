function numeroDeCaracteres(str, char) {
    // Usamos split() para dividir el string cada vez que encontramos el caracter
    // Luego restamos 1 a la longitud del array para obtener el número de ocurrencias
    return str.split(char).length - 1;
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4
