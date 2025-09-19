const numero = parseInt(prompt("Ingrese un número entero para contar sus dígitos:"));


const contador = 0;

if (isNaN(numero)) {
  console.log("Entrada no válida. Por favor, ingrese un número entero.");
} else if (numero === 0) {
  contador = 1;
  console.log(`El número ${numero} tiene ${contador} dígito.`);
} else {
  const numTemp = Math.abs(numero);


  while (numTemp > 0) {
    numTemp = Math.floor(numTemp / 10);
    contador++;
  }
  console.log(`El número ${numero} tiene ${contador} dígitos.`);
}