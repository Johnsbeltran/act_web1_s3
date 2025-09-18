// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.
function verificarPalindromo(texto) {
  const tamaño = textoFiltrado.length;
  
  for (let indice = 0; indice < tamaño / 2; indice++) {
    if (textoFiltrado[indice] !== textoFiltrado[tamaño - 1 - indice]) {
      return false;
    }
  }

  return true;
}

let ejemplo1 = "reconocer";
let ejemplo2 = "Ana lleva al oso la avellana";
let ejemplo3 = "Hola mundo";
let ejemplo4 = "A man, a plan, a canal: Panama";

console.log(`'${ejemplo1}' es un palíndromo? ${verificarPalindromo(ejemplo1)}`);
console.log(`'${ejemplo2}' es un palíndromo? ${verificarPalindromo(ejemplo2)}`);
console.log(`'${ejemplo3}' es un palíndromo? ${verificarPalindromo(ejemplo3)}`);
console.log(`'${ejemplo4}' es un palíndromo? ${verificarPalindromo(ejemplo4)}`);
