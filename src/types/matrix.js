// Import the required utilitie
import { truthy } from '../utils';

// Import the Numerical type
import { Numerical } from './numerical';

// Import the Vector type
import { Vector } from './vector';

// Define the Matrix type
export class Matrix extends Numerical {

  // Define the matrix
  constructor(data) {
      
    // Bind the data
    super(data, 'Matrix');
  }

  // Define as array species
  // static get [Symbol.species]() { 
  //   return Array; 
  // }

  // Create a translation matrix in 3d space
  static Translation(x, y, z) {

    // Create the matrix
    return new Matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [x, y, z, 1]
    ]);
  }

  // Transpose the matrix
  transpose() {

    // Transpose the current values
    const values = this[0].map((v, i) => this.map(row => row[i]));

    // Return the new matrix
    return new Matrix(values);
  }

  // Calculate the product
  product(vector) {

    // Compute the product
    const values = this.map((row) => row.map((column, j) => column * Number(vector[j])));

    // Return the new matrix
    return new Matrix(values);
  }

  // Check if the values are equal
  equals(matrix) {

    // Check the lengths are equal
    if (this.columns == matrix.columns && this.rows == matrix.rows) {

      // Map the matches
      const matches = this.map((row, i) => truthy(row.map((column, j) => (column == matrix[i][j]))));
      
      // Return true if all matches are equal
      return truthy(matches);
    } 
    
    // Throw an error if the dimensions do not match
    throw new Error('matrix.equals: matrix dimensions do not match');
  }

  // Map the matrix to a vector
  toVector() {

    // Return the diagonal of the matrix as a vector
    return new Vector(this.map((row, i) => row[i]));
  }

}