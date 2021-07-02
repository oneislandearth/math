//
import { sum } from '../sum';

// Import the numerical type
import { Numerical } from './numerical';

// Import the matrix type
import { Matrix } from './matrix';
import { truthy } from '../utils';

// Define the vector type
export class Vector extends Numerical {

  // Define the vector
  constructor(data) {
      
    // Bind the data
    super(data, 'Vector');
  }

  // Define as array species
  // static get [Symbol.species]() { 
  //   return Array; 
  // }

  // Apply a transform matrix to a vector
  transform(matrix) {

    // Check the dimensions are equal
    if (this.dimensions.rows == matrix.dimensions.columns) {

      // Compute the matrix product
      const matrixProduct = matrix.product(this);

      // Sum the matrix-vector product
      return new Vector(matrixProduct.map(row => sum(row)));
    } 
    
    // Throw an error if the sizes do not match
    throw new Error('vector.transform: rows and columns do not match');
  }

  // Check if the values are equal
  equals(vector) {

    // Check the lengths are equal
    if (this.columns == vector.columns) {

      // Map the matches
      const matches = this.map((v, i) => (v == vector[i]));

      // Return true if all matches are equal
      return truthy(matches);
    } 
    
    // Throw an error if the lengths do not match
    throw new Error('vector.equals: vector lengths do not match');
  }

  // Convert the vector to a Matrix
  toMatrix() {

    // Map the data
    const data = this.map((value, i) => {
      
      // Define the new array
      const row = new Array(this.length);

      // Set the value i
      row[i] = value;
    });

    // Bind the data to a Matrix
    return new Matrix(data);
  }
}