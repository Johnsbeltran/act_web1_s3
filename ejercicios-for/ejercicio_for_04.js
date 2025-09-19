// Ejercicio For 4: Generador de Números Primos
// Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.
let cantidadPrimos = 0;

for (let numero = 2; numero <= 100; numero++) {
  let esNumeroPrimo = true;
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      esNumeroPrimo = false;
      break;
    }
  }

  if (esNumeroPrimo) {
    console.log(numero + " es un número primo.");
    cantidadPrimos++;
  }
}

console.log("---");
console.log("Total de números primos encontrados entre 1 y 100:", cantidadPrimos);
