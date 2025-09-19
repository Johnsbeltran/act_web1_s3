const numero = 1;
const sumaTotal = 0;
const cantidadNumeros = 0;

while (numero <= 100) {
    if (numero % 2 === 0) {
        sumaTotal += numero;
        cantidadNumeros++;
    }
}
    numero++;
}

console.log(`El total de la suma es: ${sumaTotal}`);
console.log(`Se sumaron un total de ${cantidadNumeros} números pares.`);
