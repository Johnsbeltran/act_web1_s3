let a = 0, b = 1;
let contador = 0;
console.log("Serie de Fibonacci:");
while (contador < 10) {
    console.log(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
    contador++;
} 