// Ejercicio For 1: Tabla de Multiplicar Completa
// Usa ciclos for anidados para crear las tablas de multiplicar del 1 al 12. 
// Presenta los resultados en formato de tabla organizada.

const LIMITE = 10;

// Usamos nombres de variables más descriptivos como 'numeroTabla' en lugar de 'i'.
for (let numeroTabla = 1; numeroTabla <= LIMITE; numeroTabla++) {
  
    // Imprimimos un título para cada tabla.
    console.log(`\n--- Tabla del ${numeroTabla} ---`);

    // Hacemos lo mismo para el bucle interior, usando 'multiplicador' en vez de 'j'.
    for (let multiplicador = 1; multiplicador <= LIMITE; multiplicador++) {
        
        // Guardamos el resultado en su propia constante para mayor claridad.
        const resultado = numeroTabla * multiplicador;
        console.log(`${numeroTabla} x ${multiplicador} = ${resultado}`);
    }
}
