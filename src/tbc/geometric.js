// Import the required utilities
import { isVectors, isEqualLengths, vectorize } from './utils';

// Import the required core functions
import { round, add, subtract, multiply, divide, pow, sqrt, square, acos } from './core';

// Describe a function to calculate the euclidean norm / magnitude of a value
export const norm = (vector) => sqrt(vectorize(vector).reduce((sum, value) => add(sum, square(value))));

// Describe a function to calculate the unit vector of a vector
export const unit = (vector) => divide(vector, norm(vector));

// Describe the function to calculate the dot product
export const dot = (a, b) => {

  // Throw an error if the values are not vectors
  if (!isVectors([a, b])) throw 'Unable to calculate dot product: values are not vector arrays';

  // Throw an error if the vectors are of different lengths
  if (!isEqualLengths([a, b])) throw 'Unable to calculate dot product: vector lengths are not equal';

  // Return the dot product
  return round(a.reduce((sum, v, i) => add(sum, multiply(a[i], b[i])), 0));
}

// Describe the function to calculate the cross product
export const cross = (a, b) => {

  // Throw an error if the values are not vectors
  if (!isVectors([a, b])) throw 'Unable to calculate cross product: values are not vector arrays';

  // Throw an error if the vectors are of different lengths
  if (!isEqualLengths([a, b])) throw 'Unable to calculate cross product: vector lengths are not equal';

  // Extract the values from the vectors
  const [x0, y0, z0] = a;
  const [x1, y1, z1] = b;

  // Return the cross product
  return [
    subtract(multiply(y0, z1), multiply(z0, y1)),
    subtract(multiply(z0, x1), multiply(x0, z1)),
    subtract(multiply(x0, y1), multiply(y0, x1))
  ];
}

// Describe a function to transpose a matrix (e.g. 2x3 become 3x2)
export const transpose = (matrix) => {
  
  // Throw an error if the value is not a matrix
  if (!isVector(matrix)) throw 'Unable to transpose: value is not a matrix';

  // Throw an error if the values are not vectors
  if (!isVectors(...matrix)) throw 'Unable to transpose: matrix values are not vectors';

  // Return the transposed matrix
  return matrix[0].map((v, i) => matrix.map(row => row[i]));
}

// Describe a function for calculating the cofactor determinant
export const det = (matrix) => {

  // We take the top row to expand out
  // We could search for the row containing the most zeros or ones, but given our shapes do not
  // often line up with coordinate axes, and that we expect each normal passed in (in the context of face intersection)
  // We can assume that the normal will be nonzero, and also that most coordinates will be less than one, as we define
  // our normals to be unit vectors. Because of this we simply expand around the top row as it is convenient.

  // Throw an error if the value is not a matrix
  if (!isVector(matrix)) throw 'Unable to calculate determinant: value is not a matrix';

  // Throw an error if the values are not vectors
  if (!isVectors(...matrix)) throw 'Unable to calculate determinant: matrix values are not vectors';

  // Throw an error if the matrix is not 3 x 3
  if (matrix.length != 3 || matrix[0].length != 3) throw 'Unable to calculate determinant: matrix is not 3 x 3';

  // Extract the vector values
  const [a, b, c] = matrix[0];
  const [d, e, f] = matrix[1];
  const [g, h, i] = matrix[2];
  
  // Calculate the cofactors and return the derminant
  return add(
    multiply(a,  subtract(multiply(e, i), multiply(h, f))),
    multiply(-b, subtract(multiply(d, i), multiply(g, f))),
    multiply(c,  subtract(multiply(d, h), multiply(g, e)))
  );
}

// Describe a function for calculating the distance
export const distance = (a, b) => {

  // Throw an error if the values are not vectors
  if (!isVectors([a, b])) throw 'Unable to calculate distance: values are not vector arrays';

  // Throw an error if the vectors are of different lengths
  if (!isEqualLengths([a, b])) throw 'Unable to calculate distance: vector lengths are not equal';

  // Return the distance
  return sqrt(a.reduce((sum, v, i) => sum + pow((a[i] * b[i]), 2), 0));
}

// Describe a function to calculate the angle between two or three vectors
export const angleBetween = (...vectors) => {

  // Throw an error if the values are not vectors
  if (!isVectors(vectors)) throw 'Unable to calculate angle between: values are not vectors';

  // Define the two vectors
  let a = vectors[0];
  let b = vectors[1];

  // Check if there are three vectors (find angle located at b)
  if (vectors.length == 3) {

    // Calculate vector a
    a = subtract(vectors[0], vectors[1]);

    // Calculate vector b
    b = subtract(vectors[2], vectors[1]);
  }
  
  // Calculate and return the angle
  return round(acos(divide(dot(a, b), multiply(norm(a), norm(b)))));
}