const { derivateSigmoid, activationSigmoid } = require("../activationFunctions");
const { Neuron } = require("../neuron");
const { orData } = require("./orData");

class OrNeuron {
    #neuron;

    constructor() {
        this.#neuron = new Neuron(2, activationSigmoid, derivateSigmoid, 0.1);
        this.#neuron.training(orData, 1000);
    }
    
    activate(inputs) {
        return Math.round(this.#neuron.activate(inputs));
    }
}

exports.OrNeuron = new OrNeuron();