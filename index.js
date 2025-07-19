console.log("AND Neuron Activation Test");
console.log("=====================================");

const { AndNeuron } = require("./neurons/and/andNeuron");
let value = AndNeuron.activate([0, 0]);
console.log(`Inputs: [0, 0] - Output: ${value}`);
value = AndNeuron.activate([0, 1]);
console.log(`Inputs: [0, 1] - Output: ${value}`);
value = AndNeuron.activate([1, 0]);
console.log(`Inputs: [1, 0] - Output: ${value}`);
value = AndNeuron.activate([1, 1]);
console.log(`Inputs: [1, 1] - Output: ${value}`);


console.log("\nOR Neuron Activation Test");
console.log("=====================================");

const { OrNeuron } = require("./neurons/or/orNeuron");
value = OrNeuron.activate([0, 0]);
console.log(`Entrada: [0, 0] - Salida: ${value}`);
value = OrNeuron.activate([0, 1]);
console.log(`Entrada: [0, 1] - Salida: ${value}`);
value = OrNeuron.activate([1, 0]);
console.log(`Entrada: [1, 0] - Salida: ${value}`);
value = OrNeuron.activate([1, 1]);
console.log(`Entrada: [1, 1] - Salida: ${value}`);


console.log("\nXOR Neuron Activation Test");
console.log("=====================================");

const { XorNeuron } = require("./neurons/xor/xorNeuron");
value = XorNeuron.activate([0, 0]);
console.log(`Entrada: [0, 0] - Salida: ${value}`);
value = XorNeuron.activate([0, 1]);
console.log(`Entrada: [0, 1] - Salida: ${value}`);
value = XorNeuron.activate([1, 0]);
console.log(`Entrada: [1, 0] - Salida: ${value}`);
value = XorNeuron.activate([1, 1]);
console.log(`Entrada: [1, 1] - Salida: ${value}`);