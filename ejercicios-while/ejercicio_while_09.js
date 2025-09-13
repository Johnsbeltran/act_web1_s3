const numeroSecreto = Math.floor(Math.random() * 100) + 1;  
let intento;
let intentos = 0;
const maxIntentos = 10;

while (intentos < maxIntentos) {
    intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    intentos++;
    console.log(`Intento ${intentos}: ${intento}`);

    if (intento === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        break;
    } else if (intento < numeroSecreto) {
        console.log("El número es mayor.");
    } else {
        console.log("El número es menor.");
    }