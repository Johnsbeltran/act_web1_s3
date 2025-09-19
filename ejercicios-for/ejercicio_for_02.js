// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.

const ALTURA_MAXIMA = 5;


console.log("Parte creciente:");


for (let numeroDeFila = 1; numeroDeFila <= ALTURA_MAXIMA; numeroDeFila++) {
    
    
    const filaDeAsteriscos = "*".repeat(numeroDeFila);
    console.log(filaDeAsteriscos);
}

console.log("\nParte decreciente:");

for (let numeroDeFila = ALTURA_MAXIMA - 1; numeroDeFila >= 1; numeroDeFila--) {
    const filaDeAsteriscos = "*".repeat(numeroDeFila);
    console.log(filaDeAsteriscos);
}