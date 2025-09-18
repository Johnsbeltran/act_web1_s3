// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

function obtenerPotencia(numero, potencia) {
    let valor = 1;
  
    for (let contador = 0; contador < potencia; contador++) {
      valor *= numero;
    }
  
    return valor;
}
