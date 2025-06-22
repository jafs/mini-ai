const { derivateSigmoid, activationSigmoid } = require("../activationFunctions");
const { Neuron } = require("../neuron");
const { andData } = require("./andData");

class AndNeuron {
	#neuron;

	/**
	 * The constructor initializes a neuron with 2 inputs, using the sigmoid activation and its derivative.
	 * It then trains the neuron using the AND dataset for 1000 epochs, so that it learns the AND logic gate
	 * behavior.
	 */
	constructor() {
		this.#neuron = new Neuron(2, activationSigmoid, derivateSigmoid, 0.1);
		this.#neuron.training(andData, 1000);
	}

	/**
	 * The output of the neuron is a value between 0 and 1 (due to the sigmoid activation function).
	 * Math.round is used to convert this output to either 0 or 1, matching the binary output of the AND
	 * logic gate.
	 */
	activate(inputs) {
		return Math.round(this.#neuron.activate(inputs));
	}
}

exports.AndNeuron = new AndNeuron();
