/*
 * Calcula el factorial de un número usando un bucle while.
 * @param {number} n El número entero no negativo cuyo factorial se va a calcular.
 * @returns {number} El factorial de n.
 */
function calcularFactorial(n) {
  // Verificamos si el número es negativo, ya que el factorial no está definido para ellos.
  if (n < 0) {
    return 'El factorial no está definido para números negativos.';
  }

  // El factorial de 0 es 1.
  if (n === 0) {
    return 1;
  }

  const resultado = 1;
  const i = n;

  
  while (i > 0) {
    resultado *= i; 
    i--; 
  }

  return resultado;
}

const numero = parseInt(prompt('Ingresa un número para calcular su factorial:'));

if (isNaN(numero)) {
  console.log('Por favor, ingresa un número válido.');
} else {
  const factorial = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${factorial}`);
}
