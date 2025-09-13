const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número entero: ", (input) => {
  let n = Math.abs(parseInt(input));
  let digitos = 0;

  if (n === 0) {
    digitos = 1;
  } else {
    while (n > 0) {
      n = Math.floor(n / 10);
      digitos++;
    }
  }

  console.log("Cantidad de dígitos:", digitos);
  rl.close();
});
