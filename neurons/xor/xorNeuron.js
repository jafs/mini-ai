const { derivateSigmoid, activationSigmoid } = require("../activationFunctions");
const { NeuralNetwork } = require("../neuralNetwork");
const { xorData } = require("./xorData");

class XorNeuron {
    #neuron;

    constructor() {
        this.#neuron = new NeuralNetwork(2, activationSigmoid, derivateSigmoid, 2, 0.1);
        this.#neuron.training(xorData, 50000);
    }
    
    activate(inputs) {
        return Math.round(this.#neuron.activate(inputs));
    }
}

exports.XorNeuron = new XorNeuron();
