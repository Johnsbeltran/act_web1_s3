// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.

const ALTURA_MAXIMA = 5;

// --- Bucle para la parte creciente de la pirámide ---
console.log("Parte creciente:");

// Usamos 'numeroDeFila' en lugar de 'i' para que sea más claro.
for (let numeroDeFila = 1; numeroDeFila <= ALTURA_MAXIMA; numeroDeFila++) {
    
    // El método .repeat() es una forma más simple y moderna
    // de crear una cadena de texto repetida, en lugar de usar un segundo bucle.
    const filaDeAsteriscos = "*".repeat(numeroDeFila);
    console.log(filaDeAsteriscos);
}

console.log("\nParte decreciente:");

// --- Bucle para la parte decreciente de la pirámide ---
// Empezamos desde uno menos que la altura máxima para no repetir la línea más larga.
for (let numeroDeFila = ALTURA_MAXIMA - 1; numeroDeFila >= 1; numeroDeFila--) {
    const filaDeAsteriscos = "*".repeat(numeroDeFila);
    console.log(filaDeAsteriscos);
}