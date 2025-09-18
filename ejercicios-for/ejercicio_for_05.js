// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.

let textoInicial = "Hola, mundo!";
let textoReverso = "";

for (let indice = textoInicial.length - 1; indice >= 0; indice--) {
  textoReverso += textoInicial[indice];
}

console.log("Cadena original:", textoInicial);
console.log("Cadena invertida:", textoReverso);
