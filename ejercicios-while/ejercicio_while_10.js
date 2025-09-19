let sumaCalificaciones = 0;
let cantidadCalificaciones = 0;
let calificacionMasAlta = -Infinity;
let calificacionMasBaja = +Infinity;

let calificacion = 0;

console.log('Ingresa las calificaciones de los estudiantes (usa -1 para terminar).');

while (calificacion !== -1) {

    calificacion = parseFloat(prompt('Ingresa una calificación:'));


    if (calificacion !== -1) {
        if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 100) {
            sumaCalificaciones += calificacion;
            cantidadCalificaciones++;

            if (calificacion > calificacionMasAlta) {
                calificacionMasAlta = calificacion;
            }
            if (calificacion < calificacionMasBaja) {
                calificacionMasBaja = calificacion;
            }
        } else {
            console.log('Invalido.Ingresa un número entre 0 y 100.');
        }
    }
}

if (cantidadCalificaciones > 0) {
    const promedio = sumaCalificaciones / cantidadCalificaciones;
    console.log(`Promedio de calificaciones: ${promedio.toFixed(2)}`);
    console.log(`Calificación más alta: ${calificacionMasAlta}`);
    console.log(`Calificación más baja: ${calificacionMasBaja}`);
} else {
    console.log('No se ingresó ninguna calificación.');
}