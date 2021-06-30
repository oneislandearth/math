// Import ava for testing
import test from 'ava';

// Import the matrix class
import { Matrix } from '../src/matrix';

// Create a square matrix
const matrix = new Matrix([
	[10, 10], 
	[20, 10]
]);

// Check if a matrix species is correct
test('correct species', t => {

	// Check the matrix species is valid
	if (matrix.species == 'Matrix') t.pass();
});

// Check if a matrix size is correct
test('correct size', t => {

	// Check the matrix species is valid
	if (matrix.size == 2) t.pass();
});

// Check if a matrix input is nvalid
test('invalid input', t => {
	
	// Check the matrix throws an error
	t.throws(() => new Matrix());
});