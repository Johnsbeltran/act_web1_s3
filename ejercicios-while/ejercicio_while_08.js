const a = 0;
const b = 1;

const contador = 0;

while (contador < 20) {
    console.log(a);

    const c = a + b;
    a = b;
    b = c;

    contador++;
}

console.log(b);
