# Mini AI - Educational Neural Network Example

This project provides a simple implementation of a single artificial neuron (perceptron) in JavaScript, designed for educational purposes. The code demonstrates the basic principles of how a neuron works, how it can be trained, and how it can be used to solve simple logic problems such as the AND and OR gates.

## Features
- **Neuron Class**: Implements a basic neuron with customizable activation and derivative functions.
- **Activation Functions**: Includes the sigmoid activation function and its derivative.
- **Logic Gate Examples**: Shows how to train a neuron to behave like an AND or OR logic gate using example datasets.
- **Fully Commented**: The code is thoroughly commented in English to help beginners understand each part of the implementation.

## Structure
- `neurons/neuron.js`: Core neuron implementation, including training and activation logic.
- `neurons/activationFunctions.js`: Contains the sigmoid activation function and its derivative.
- `neurons/and/andNeuron.js` & `neurons/or/orNeuron.js`: Example neurons trained to mimic AND/OR logic gates.
- `neurons/and/andData.js` & `neurons/or/orData.js`: Datasets for training the AND/OR neurons.

## How It Works
1. **Initialization**: Each neuron is initialized with random weights and bias.
2. **Activation**: The neuron computes a weighted sum of its inputs, adds the bias, and applies the activation function.
3. **Training**: The neuron is trained using a dataset. During training, it adjusts its weights and bias to minimize the error between its output and the expected output.
4. **Logic Gates**: By training on the appropriate dataset, the neuron can learn to behave like a simple logic gate (e.g., AND, OR).

## Purpose
This code is intended for learning and experimentation. It is ideal for:
- Students and beginners who want to understand how neural networks work at the most basic level.
- Demonstrating the core concepts of machine learning, such as activation functions, training, and error minimization.

## Usage
You can run and modify the code to experiment with different activation functions, learning rates, or datasets. The code is kept simple and easy to follow, making it a great starting point for anyone interested in neural networks.

---

Feel free to explore and modify the code to deepen your understanding of how artificial neurons learn and operate!
