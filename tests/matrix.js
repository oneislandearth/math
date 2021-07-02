// Import ava for testing
import test from 'ava';

// Import the types class
import { Matrix } from '../src/types/matrix';
import { Vector } from '../src/types/vector';

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
	if (matrix.size == 4) t.pass();
});

// Check if a matrix size is correct
test('transpose', t => {

	// Create a matrix
	const matrix = new Matrix([
		[1, 2, 3],
		[4, 5, 6]
	]);

	// Transpose the matrix
	const transposed = matrix.transpose();

	// Define the expected matrix

	// Define a vector
	const v = new Vector([10, 20, 30, 1]);

	console.log(v.transform(mt))

	// Check the matrix has transposed
	if (matrix.equals()) t.pass();
});

// Check if a matrix product is correct
test('product', t => {

	// Create a matrix
	const matrix = new Matrix([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	]);

	// Define a vector
	const vector = new Vector([2, 1, 3]);

	// Define the expected value
	const expected = new Vector([13, 31, 49]);

	// Check the matrix transform result is expected
	if (vector.transform(matrix).equals(expected)) t.pass();
});


// Check if a matrix product is correct
test('dot product', t => {

	// Create a matrix
	const m = new Matrix([
		[1, 2],
		[3, 4],
		[10, 0]
	]);

	// Define a vector
	const v = new Vector([3, -1])

	console.log(v.transform(m))

	// Check the matrix species is valid
	if (matrix.size == 4) t.pass();
});

// Check if a matrix input is nvalid
test('invalid input', t => {
	
	// Check the matrix throws an error
	t.throws(() => new Matrix());
});