// Import ava for testing
import test from 'ava';

// Import the types class
import { Numerical } from '../src/types/numerical';

// Create a matrix
const matrix = new Numerical([
	10, 20, 30,
	40, 50, 60
], { 
  dimensions: [2, 3], 
  species: 'Matrix'
});

// Check if the species is correct
test('species', t => {

	// Check the result is correct
	if (matrix.species == 'Matrix') t.pass();
});

// Check if the dimensions are correct
test('dimensions', t => {

	// Check the result is correct
	if (matrix.dimensions.rows == 2 && matrix.dimensions.columns == 3) t.pass();
});

// Check if the type is correct
test('type', t => {

  console.log(matrix.type)

	// Check the result is correct
	if (matrix.type == 'Matrix(2x3)') t.pass();
});

// Check if a dimensions are correct
test('dimensions', t => {

  // Get the rows of the matrix
  const rows = matrix.rows;

  // Define the expected output
  const expected = []

	// Check the result is correct
	if (matrix.dimensions.rows == 2 && matrix.dimensions.columns == 3) t.pass();
});