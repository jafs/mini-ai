const { AndNeuron } = require("./neurons/and/andNeuron");

console.log("AND Neuron Activation Test");
console.log("=====================================");
let value = AndNeuron.activate([0, 0]);
console.log(`Inputs: [0, 0] - Output: ${value}`);
value = AndNeuron.activate([0, 1]);
console.log(`Inputs: [0, 1] - Output: ${value}`);
value = AndNeuron.activate([1, 0]);
console.log(`Inputs: [1, 0] - Output: ${value}`);
value = AndNeuron.activate([1, 1]);
console.log(`Inputs: [1, 1] - Output: ${value}`);
