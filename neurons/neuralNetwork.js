const { Neuron } = require("./neuron");
const { calculateAdjust } = require("./utils");

/**
 * Represents a simple feedforward neural network with one hidden layer.
 * @implements {IActivable}
 */
class NeuralNetwork {
	/**
	 * Array of hidden layer neurons.
	 * @type {Neuron[]}
	 */
	#hiddenNeurons;

	/**
	 * Output neuron of the network.
	 * @type {Neuron}
	 */
	#outputNeuron;

	/**
	 * Derivative of the activation function, used for backpropagation.
	 * @type {function}
	 */
	#derivateFunction;

	/**
	 * Initializes the neural network structure and neurons.
	 * @param {number} inputsNumber - Number of inputs to the network.
	 * @param {function} activationFunction - Activation function for all neurons.
	 * @param {function} derivateFunction - Derivative of the activation function.
	 * @param {number} neuronsNumber - Number of hidden neurons.
	 * @param {number} [learningRate=0.1] - Learning rate for weight updates.
	 */
	constructor(inputsNumber, activationFunction, derivateFunction, neuronsNumber, learningRate = 0.1) {
		this.#derivateFunction = derivateFunction;
		this.#hiddenNeurons = [];

		// Create hidden layer neurons
		for (let i = 0; i < neuronsNumber; i++) {
			this.#hiddenNeurons.push(new Neuron(inputsNumber, activationFunction, this.#derivateFunction, learningRate, "hidden"));
		}

		// Create output neuron, which takes hidden neuron outputs as inputs
		this.#outputNeuron = new Neuron(neuronsNumber, activationFunction, this.#derivateFunction, learningRate, "output");
	}

	/**
	 * Feeds inputs through the network and returns the final output.
	 * @param {Array} inputs - Input values for the network.
	 * @returns {number} - Output value after forward propagation.
	 */
	activate(inputs) {
		// Get outputs from hidden layer and send them to output neuron. This way the method activates
		// the neural network with the provided inputs.
		const hiddenOutputs = this.#hiddenNeurons.map(neuron => neuron.activate(inputs));
		return this.#outputNeuron.activate(hiddenOutputs);
	}

	/**
	 * Trains the network using the provided dataset for a number of epochs.
	 * @param {{ inputs: any[], output: number }[]} dataset - Array of training samples with 'inputs' and 'output'.
	 * @param {number} epochs - Number of training iterations over the dataset.
	 */
	training(dataset, epochs) {
		for (let i = 0; i < epochs; ++i) {
			for (const data of dataset) {
				this.#train(data.inputs, data.output);
			}
		}
	}

	/**
	 * Performs a single training step for one sample (forward and backward pass).
	 * @param {Array} inputs - Input values for the network.
	 * @param {number} expectedOutput - Target output value.
	 * @private
	 */
	#train(inputs, expectedOutput) {
		// Forward pass: get hidden and output values
		const hiddenOutputs = this.#hiddenNeurons.map(n => n.activate(inputs));
		const computedOutput = this.#outputNeuron.activate(hiddenOutputs);

		// Calculate adjustment for output neuron using loss derivative
		const adjustValue = calculateAdjust(expectedOutput, computedOutput, this.#derivateFunction);

		// Backpropagation: update weights in output and hidden neurons
		this.#adjustWeights(hiddenOutputs, inputs, adjustValue);
	}

	/**
	 * Updates the weights of the output and hidden neurons using backpropagation.
	 * @param {Array} hiddenOutputs - Outputs from hidden layer neurons.
	 * @param {Array} inputs - Original input values.
	 * @param {number} adjust - Adjustment value for output neuron.
	 * @private
	 */
	#adjustWeights(hiddenOutputs, inputs, adjust) {
		// Adjust output neuron weights
		this.#outputNeuron.adjust(hiddenOutputs, adjust);

		// Adjust hidden neuron weights using gradients from output neuron
		for (let index = 0; index < this.#hiddenNeurons.length; ++index) {
			const hiddenNeuron = this.#hiddenNeurons[index];
			// Gradient for hidden neuron is based on its output, the output neuron's weight, and the adjustment
			const gradient = this.#computeGradient(hiddenNeuron.Output, this.#outputNeuron.Weights[index], adjust);
			hiddenNeuron.adjust(inputs, gradient);
		}
	}

	/**
	 * Computes the gradient for a hidden neuron during backpropagation.
	 * @param {number} output - Output value of the hidden neuron.
	 * @param {number} weight - Weight connecting hidden neuron to output neuron.
	 * @param {number} adjust - Adjustment value from output neuron.
	 * @returns {number} - Gradient for hidden neuron weight update.
	 * @private
	 */
	#computeGradient(output, weight, adjust) {
		return this.#derivateFunction(output) * weight * adjust;
	}
}

exports.NeuralNetwork = NeuralNetwork;
