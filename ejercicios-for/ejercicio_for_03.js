// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

const numeros = Array.from(
    { length: 20 }, 
    () => Math.floor(Math.random() * 100) + 1
);
console.log("Array de números:", numeros);

const mayor = Math.max(...numeros);
const menor = Math.min(...numeros);
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
const promedio = suma / numeros.length;
const cantidadPares = numeros.filter(num => num % 2 === 0).length;
const cantidadImpares = numeros.length - cantidadPares;

console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio.toFixed(2));
console.log("Números pares:", cantidadPares);
console.log("Números impares:", cantidadImpares);
