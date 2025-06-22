class Neuron {
	/**
	 * Controls how much the weights are adjusted in each training iteration.
	 * @type {number}
	 * @default 0.1
	 */
	#learningRate = 0.1;

	/**
	 * Value added to the weighted sum of the inputs, allowing the neuron to learn more complex patterns.
	 * @type {number}
	 */
	#bias;

	/**
	 * The weights are the values that multiply the inputs before summing them. That is, they are the factors
	 * that determine the importance of each input in the neuron's output.
	 * @type {number}
	 */
	#weights;

	/**
	 * Number of inputs the neuron can receive.
	 * @type {number}
	 * @default 2
	 */
	#inputsNumber;

	/**
	 * The activation function applied to the weighted sum of the inputs.
	 * This function transforms the weighted sum into an output that can be used by the neuron.
	 * For example, it can be a sigmoid function, hyperbolic tangent, etc.
	 * This function is crucial to introduce nonlinearities into the model, allowing the neuron to learn
	 * more complex patterns.
	 * @type {function}
	 */
	#activationFunction;

	/**
	 * Activation function applied to the weighted sum of the inputs.
	 * @type {function}
	 * @private
	 */
	#derivateFunction;

	constructor(inputsNumber, activationFunction, derivateFunction, learningRate = 0.1) {
		this.#learningRate = learningRate;
		this.#inputsNumber = inputsNumber;
		this.#activationFunction = activationFunction;
		this.#derivateFunction = derivateFunction;

		// The weights are initialized randomly so the neuron can learn patterns from scratch.
		this.#weights = Array.from({ length: inputsNumber }, () => Math.random() * 2 - 1);

		// The bias is also initialized randomly, allowing the neuron to adjust its output more flexibly.
		this.#bias = Math.random() * 2 - 1;
	}


	/**
	 * Method that activates the neuron with the provided inputs.
	 * @param {Array} inputs - Array of inputs for the neuron.
	 * @returns {number} - Output of the neuron after applying the activation function.
	 */
	activate(inputs) {
		let sum = this.#bias;

		for (let i = 0; i < this.#inputsNumber; i++) {
			sum += inputs[i] * this.#weights[i];
		}
		
		
		return this.#activationFunction(sum);
	}

	/**
	 * Method that trains the neuron with a dataset.
	 * @param {{ entrada: any[], salida: number }} dataset Array of objects containing 'entrada' and 'salida'.
	 * @param {number} epocas Number of times the data will be iterated over to train the neuron.
	 */
	training(dataset, epocas) {
		for (let i = 0; i < epocas; ++i) {
			for (const data of dataset) {
				this.#train(data.inputs, data.output);
			}
		}
	}

	/**
	 * Method that trains the neuron with a dataset.
	 * @param {Array} inputs - Array of inputs for the neuron.
	 * @param {number} expectedOutput - Expected output value for the provided inputs.
	 */
	#train(inputs, expectedOutput) {
		const computedOutput = this.activate(inputs);
		const error = this.#calculateError(expectedOutput, computedOutput);
		const adjustValue = this.#calculateAdjust(error, computedOutput, this.#derivateFunction);

		this.#adjust(inputs, adjustValue, this.#learningRate);
	}

	/**
	 * Adjusts the weights and bias of the neuron based on the inputs, the calculated gradient, and the learning rate.
	 * This method is crucial for the neuron's learning process, as it modifies the internal parameters to minimize
	 * the error between the expected output and the obtained output.
	 * @param {*} inputs 
	 * @param {number} gradient 
	 * @param {number} learningRate 
	 */
	#adjust(inputs, gradient, learningRate) {
		for (let i = 0; i < this.#inputsNumber; i++) {
			this.#weights[i] += inputs[i] * gradient * learningRate;
		}
		this.#bias += gradient * learningRate;
	}

	#calculateError(expectedOutput, obtainedOutput) {
		return expectedOutput - obtainedOutput;
	}

	#calculateAdjust(error, generatedOutput, derivateFunction) {
		return error * derivateFunction(generatedOutput);
	}
}

exports.Neuron = Neuron;