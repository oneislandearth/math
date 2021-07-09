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

// Check if a matrix determinant throws an error
test('determinant (non-square)', t => {

  // Create a matrix
  const matrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Check the determinant throws an error
  t.throws(() => matrix.determinant())
});

// Check if a matrix negative is correct
test('negative', t => {

  // Create a matrix
  const matrix = new Matrix([
    [-1, 2, 3],
    [4, -5, -6]
  ]);

  // Compute the negative
  const negative = matrix.negative();

  // Define the expected matrix
  const expected = new Matrix([
    [1, -2, -3],
    [-4, 5, 6]
  ]);

  // Check the matrix has negated correctly
  if (negative.equals(expected)) t.pass();
});

// Check if a scalar added to a matrix is correct
test('add (scalar)', t => {

  // Create a matrix
  const matrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Define the expected matrix
  const expected = new Matrix([
    [11, 12, 13],
    [14, 15, 16]
  ]);

  // Check the matrix has computed correctly
  if (matrix.add(10).equals(expected)) t.pass();
});

// Check if a matrix added to a matrix is correct
test('add (matrix equal dimensions)', t => {

  // Create a matrix
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Create a matrix
  const b = new Matrix([
    [7, 8, 9],
    [10, 11, 12]
  ]);

  // Define the expected matrix
  const expected = new Matrix([
    [8, 10, 12],
    [14, 16, 18]
  ]);

  // Check the matrix has computed correctly
  if (a.add(b).equals(expected)) t.pass();
});


// Check if a matrix added to a matrix of different size throws an error
test('add (matrix non-equal dimensions)', t => {

  // Create a matrix
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Create a matrix
  const b = new Matrix([
    [7, 8],
    [9, 10],
    [11, 12]
  ]);

  // Check the add throws an error
  t.throws(() => a.add(b))
});


// Check if a scalar subtracted from a matrix is correct
test('subtract (scalar)', t => {

  // Create a matrix
  const matrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Define the expected matrix
  const expected = new Matrix([
    [-1, 0, 1],
    [2, 3, 4]
  ]);

  // Check the matrix has computed correctly
  if (matrix.subtract(2).equals(expected)) t.pass();
});

// Check if a matrix subtracted from a matrix is correct
test('subtract (matrix equal dimensions)', t => {

  // Create a matrix
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Create a matrix
  const b = new Matrix([
    [7, 8, 9],
    [10, 11, 12]
  ]);

  // Define the expected matrix
  const expected = new Matrix([
    [-6, -6, -6],
    [-6, -6, -6]
  ]);

  // Check the matrix has computed correctly
  if (a.subtract(b).equals(expected)) t.pass();
});


// Check if a matrix subtracted from a matrix of different size throws an error
test('subtract (matrix non-equal dimensions)', t => {

  // Create a matrix
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Create a matrix
  const b = new Matrix([
    [7, 8],
    [9, 10],
    [11, 12]
  ]);

  // Check the function throws an error
  t.throws(() => a.subtract(b));
});


// Check if a matrix is multiplied correctly
test('multiply (scalar)', t => {

  // Create a matrix
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Define the expected matrix
  const expected = new Matrix([
    [2, 4, 6],
    [8, 10, 12]
  ]);

  // Check the matrix has computed correctly
  if (a.multiply(2).equals(expected)) t.pass();
});

// Check if a matrix is multiplied correctly
test('multiply (matrix equal dimensions)', t => {

  // Create a matrix
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Create a matrix
  const b = new Matrix([
    [7, 8],
    [9, 10],
    [11, 12]
  ]);

  // Define the expected matrix
  const expected = new Matrix([
    [58, 64],
    [139, 154]
  ]);

  // Check the matrix has computed correctly
  if (a.multiply(b).equals(expected)) t.pass();
});

// Check if a matrix is multiplied correctly
test('multiply (matrix non-equal dimnensions)', t => {

  // Create a matrix
  const a = new Matrix([
    [1, 2, 3],
    [4, 5, 6]
  ]);

  // Create a matrix
  const b = new Matrix([
    [7, 8, 9],
    [10, 11, 12],
  ]);

  // Check the function throws an error
  t.throws(() => a.multiply(b));
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