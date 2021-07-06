// Import the required utilities
import { truthy } from '../utils';

// Import the aspects utilities
import { defineAspects } from './types';

// Define the matrix type
export class Matrix extends Array {

  // Create a matrix
  constructor(values) {

    // Count the number of rows and columns
    const rows = values.length;
    const columns = values[0].length;

    // Define the aspects
    defineAspects(super(...values.flat()), { 
      species: 'Matrix',
      dimensions: [rows, columns] 
    });
  }

  // Define as array species
  static get [Symbol.species]() { 
    return Array; 
  }

  // Create an identity matrix in 3D space
  static Identity() {

    // Create the matrix
    return Matrix.fromArray([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
  }

  // Create a translation matrix in 3D space
  static Translation(x, y, z) {

    // Create the matrix from the translation
    return Matrix.fromArray([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [x, y, z, 1]
    ]);
  }

  // Transpose the matrix
  transpose() {

    // Return the transposed matrix
    return new Matrix(this.columns);
  }

  // Calculate the product
  product(vector) {

    // Compute the product
    const values = this.map((row) => row.map((column, j) => column * Number(vector[j])));

    // Return the new matrix
    return new Matrix(values);
  }

}