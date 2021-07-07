// Import the required utilities
import { truthy } from '../utils';

// Import the determiant function
import { determinant } from '../determinant';

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

  // Calculate the determinant
  determiant() {

    // Return the value if the matrix is 1x1
    if (this.type == 'Matrix(1x1)') return this;

    // Return the value if the matrix is 2x2
    if (this.type == 'Matrix(2x2)') return determinant(this[0], this[1], this[2], this[3]);

    // Reduce the column
    const reduce = (data, dimensions) => {
      
      // Otherwise compute the determinant
      for (let i = 0; i < length; i++) {

        // Determine whether to add or subtract
        const even = (i % 2 == 0);

        // Define the scale factor
        const factor = data[i][0];

        // Define the square for the matrix
        const square = data.filter((v, j) => j != i).map(column => column.filter((v, k) => k != 0)).flat();

        // Extract the numbers from the square
        const [a, c, b, d] = square;

        // Compute the value to be added
        const value = (factor * determinant(a, b, c, d));

        // Add or subtract the value depending on whether even or odd
        // total += (i % 2 == 0) ? value : (value * -1);

        // Compute the determinant for the column
      }
    };

    // Return the total
    console.log(total);

    return total;
  }

}