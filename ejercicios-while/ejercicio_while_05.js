function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    let contador = numero; 
    while (contador > 1) { 
        factorial *= contador; 
        contador--;         
    }
    return factorial;
}       
const numero = 5;
const resultado = calcularFactorial(numero);

console.log(`El factorial de ${numero} es ${resultado}.`);  // Ejercicio While 5: Factorial de un Número
--- IGNORE ---
-// Crea un programa que calcule el factorial de un número dado por el usuario          