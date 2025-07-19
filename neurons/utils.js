/*function calculateError(expected, obtained) {
  return expected - obtained;
}

function calculateAdjust(error, output, derivateFunction) {
  return error * derivateFunction(output);
}*/


function calculateAdjust(expectedOutput, computedOutput, derivateFunction) {
	// const error = calculateError(expectedOutput, computedOutput);
	// const adjust = calculateAdjust(error, computedOutput, derivateFunction);
	// return adjust;
	const error = expectedOutput - computedOutput
	return error * derivateFunction(computedOutput);
}

exports.calculateAdjust = calculateAdjust;
