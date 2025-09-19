// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

let texto = "PROGRAMAR";
let conteoLetras = {};

for (let indice = 0; indice < texto.length; indice++) {
  let simbolo = texto[indice];

  conteoLetras[simbolo] = (conteoLetras[simbolo] || 0) + 1;
}
let letrasOrdenadas = Object.keys(conteoLetras).sort();

console.log("Frecuencia de caracteres en la cadena:");

for (const simbolo of letrasOrdenadas) {
  console.log(`'${simbolo}': ${conteoLetras[simbolo]}`);
}
