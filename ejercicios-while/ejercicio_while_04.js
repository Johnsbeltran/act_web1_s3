let numeroAleatorio = 0;
let intentos = 0;

while (numeroAleatorio !== 50) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    intentos++;
    console.log(`Intento ${intentos}: El número es ${numeroAleatorio}`);
}

console.log(`¡Encontrado! El número 50 salió después de ${intentos} intentos.`);