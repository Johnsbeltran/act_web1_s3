// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.

let registroSuma = new Array(13).fill(0);

let totalTiros = 1000;

for (let intento = 0; intento < totalTiros; intento++) {
    const primerDado = Math.floor(Math.random() * 6) + 1;
    const segundoDado = Math.floor(Math.random() * 6) + 1;

    const resultado = primerDado + segundoDado;

    registroSuma[resultado]++;
}

console.log('--- Frecuencia de las Sumas ---');
for (let valor = 2; valor <= 12; valor++) {
    let porcentajeActual = ((registroSuma[valor] / totalTiros) * 100).toFixed(2);
    console.log(`Suma ${valor}: ${registroSuma[valor]} veces (${porcentajeActual}%)`);
}
let sumaPredominante = 0;
let maxRepeticiones = 0;

for (let valor = 2; valor <= 12; valor++) {
    if (registroSuma[valor] > maxRepeticiones) {
        maxRepeticiones = registroSuma[valor];
        sumaPredominante = valor;
    }
}

console.log('------------------------------');
console.log(`La suma más común es: ${sumaPredominante}, con un total de ${maxRepeticiones} veces.`);
