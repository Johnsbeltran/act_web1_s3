// Ejercicio For 1: Tabla de Multiplicar Completa
// Usa ciclos for anidados para crear las tablas de multiplicar del 1 al 12. 
// Presenta los resultados en formato de tabla organizada.

const LIMITE = 10;


for (let numeroTabla = 1; numeroTabla <= LIMITE; numeroTabla++) {
  

    console.log(`\n--- Tabla del ${numeroTabla} ---`);


    for (let multiplicador = 1; multiplicador <= LIMITE; multiplicador++) {
        

        const resultado = numeroTabla * multiplicador;
        console.log(`${numeroTabla} x ${multiplicador} = ${resultado}`);
    }
}
