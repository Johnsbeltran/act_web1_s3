const numeros = [];
for (const i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array de números:", numeros);

const numeroBuscado = Math.floor(Math.random() * 100) + 1;
console.log(`Buscando el número: ${numeroBuscado}`);

const indice = 0;
const encontrado = false;

while (indice < numeros.length && !encontrado) {
    if (numeros[indice] === numeroBuscado) {
        encontrado = true;
    } else {
        indice++;
    }
}
if (encontrado) {
    console.log(`¡Éxito! El número ${numeroBuscado} se encontró en la posición ${indice}.`);
} else {
    console.log(`Lo siento, el número ${numeroBuscado} no se encontró en el array.`);
}
