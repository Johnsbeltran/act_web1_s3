// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.

let matriz = [];
let filas = 5;
let columnas = 5;

for (let i = 0; i < filas; i++) {
  const filaActual = [];

  for (let j = 0; j < columnas; j++) {
    const suma = i + j;
    filaActual.push(suma);
  }

  matriz.push(filaActual);
}

for (let i = 0; i < filas; i++) {
  console.log(matriz[i].join("  "));
}
