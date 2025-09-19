let numeroSecreto;
let entradaValida = false;

while (!entradaValida) {
    const entrada = prompt('Jugador 1: Ingresa un número secreto entre 1 y 100:');
    numeroSecreto = parseInt(entrada);

    if (isNaN(numeroSecreto) || numeroSecreto < 1 || numeroSecreto > 100) {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
    } else {
        entradaValida = true;
    }
}
console.log('¡El número secreto ha sido establecido!');
console.log('Jugador 2: Tienes 7 intentos para adivinar el número.');

const intentos = 0;
const maxIntentos = 7;
const adivinado = false;

while (!adivinado && intentos < maxIntentos) {
    const suposicion = parseInt(prompt(`Intento ${intentos + 1}/${maxIntentos}. Adivina el número:`));


    if (isNaN(suposicion) || suposicion < 1 || suposicion > 100) {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
        continue;
    }

    intentos++;
    if (suposicion < numeroSecreto) {
        console.log('El número secreto es MAYOR. Intenta de nuevo.');
    } else if (suposicion > numeroSecreto) {
        console.log('El número secreto es MENOR. Intenta de nuevo.');
    } else {
        adivinado = true;
        console.log(`Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
    }
}

if (!adivinado) {
    console.log(`¡Lo siento, te quedaste sin intentos!  El número secreto era ${numeroSecreto}.`);
}
