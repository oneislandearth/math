// Import ava for testing
import test from 'ava';

// Import the types class
import { Matrix } from '../src/types/matrix';

// Check if a matrix species is correct
test('type', t => {

  // Create a matrix
  const matrix = new Matrix([
    [10, 20, 30], 
    [40, 50, 60]
  ]);

  // Check the matrix type is correct
  if (matrix.type == 'Matrix(2x3)') t.pass();
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
  const expected = new Matrix([
    [1, 4],
    [2, 5],
    [3, 6]
  ]);

  // Check the matrix has transposed
  if (transposed.equals(expected)) t.pass();
});

// Check if a matrix determinant is correct
test('determinant (3x3)', t => {

  // Create a matrix
  const matrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  // Compute the determinant
  const determinant = matrix.determinant();

  // Check the matrix has computed the determinant correctly
  if (determinant == 0) t.pass();
});

// Check if a matrix determinant is correct
test('determinant (4x4)', t => {

  // Create a matrix
  const matrix = new Matrix([
    [1, 2, 3, 4],
    [5, 0, 1, 6],
    [6, 10, 1, 7],
    [7, 14, 15, 8]
  ]);

  // Compute the determinant
  const determinant = matrix.determinant();

  // Check the matrix has computed the determinant correctly
  if (determinant == -1988) t.pass();
});

// // Check if a matrix product is correct
// test('product', t => {

//   // Create a matrix
//   const matrix = new Matrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]);

//   // Define a vector
//   const vector = new Vector([2, 1, 3]);

//   // Define the expected value
//   const expected = new Vector([13, 31, 49]);

//   // Check the matrix transform result is expected
//   if (vector.transform(matrix).equals(expected)) t.pass();
// });


// // Check if a matrix product is correct
// test('dot product', t => {

//   // Create a matrix
//   const m = new Matrix([
//     [1, 2],
//     [3, 4],
//     [10, 0]
//   ]);

//   // Define a vector
//   const v = new Vector([3, -1]);

//   console.log(v.transform(m));

//   // Check the matrix species is valid
//   if (matrix.size == 4) t.pass();
// });

// // Check if a matrix input is nvalid
// test('invalid input', t => {
	
//   // Check the matrix throws an error
//   t.throws(() => new Matrix());
// });