// Activation function that outputs a value between 0 and 1, ideal for a basic neuron.
function activationSigmoid(x) {
	return 1 / (1 + Math.exp(-x));
}

// Derivative of the sigmoid function, necessary for weight adjustment during training.
function derivateSigmoid(x) {
	return x * (1 - x); // We assume x is already sigmoid(x)
}

exports.activationSigmoid = activationSigmoid;
exports.derivateSigmoid = derivateSigmoid;
