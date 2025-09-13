let intentos = 0;
let numeroAleatorio;

while (numeroAleatorio !== 50) {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  intentos++;
}

console.log(`Número 50 generado después de ${intentos} intentos.`);
