// escribe la función bmi acá
function bmi(peso, altura) {
    const indiceBMI = peso / (altura * altura);
    if (indiceBMI < 18.5) {
        return "Bajo de peso";
    } else if (indiceBMI >= 18.5 && indiceBMI < 25) {
        return "Normal";
    } else if (indiceBMI >= 25 && indiceBMI < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"