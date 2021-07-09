// Import the required utilities
import { truthy } from '../utils';

// Import the required operation functions
import { add, subtract, multiply, divide } from '../operations';

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
    return new Matrix([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
  }

  // Create a translation matrix in 3D space
  static Translation(x, y, z) {

    // Create the matrix from the translation
    return new Matrix([
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

  // Add to a matrix
  add(value) {

    // Determine which function to use for computation
    switch (value.type) {

      // Compute the matrix with a scalar
      case 'Scalar': {

        // Scale the values
        const values = this.rows.map(row => row.map(column => add(column, value)));

        // Return the new matrix
        return new Matrix(values);
      }

      // Compute the matrix with an equal matrix
      case this.type: {

        // Scale the values
        const values = this.rows.map((row, m) => row.map((column, n) => add(column, value[`${m}:${n}`])));

        // Return the new matrix
        return new Matrix(values);
      }

      // Handle any other case
      default: {

        // Compute for a scalar number
        if (typeof value == 'number') {

          // Scale the values
          const values = this.rows.map(row => row.map(column => add(column, value)));

          // Return the new matrix
          return new Matrix(values);
        }
        
        // Throw an error as sizes do not match
        throw new Error(`${this.type}.add(${value.type}): Unable to add matrices together`);
      }
    }
  }

  // Calculate the negative of the matrix
  negative() {

    // Determine the negative values
    const negative = this.rows.map(row => row.map(v => v * -1));

    // Return the new matrix
    return new Matrix(negative);
  }
  

  // Calculate the determinant
  determinant() {

    // Define the determinant function
    const determinant = ([a, b, c, d]) => subtract(multiply(a, d), multiply(b, c));

    // Determine which function to use for computation
    switch (this.type) {

      // Compute the matrix determinant of a 1x1
      case 'Matrix(1x1)': {
        return this.a;
      }

      // Compute the matrix determinant of a 2x2
      case 'Matrix(2x2)': {
        return determinant([this.a, this.b, this.c, this.d]);
      }

      // Compute the matrix determinant of a 3x3
      case 'Matrix(3x3)': {

        // Extract the components
        const { 
          a, b, c, 
          d, e, f, 
          g, h, i 
        } = this;

        // Compute the determinant for a | efhi
        const a1 = multiply(a, determinant([e, f, h, i]));

        // Compute the determinant for b | dfgi
        const b1 = multiply(b, determinant([d, f, g, i]));
        
        // Compute the determinant for c | degh
        const c1 = multiply(c, determinant([d, e, g, h]));

        // Return the determinant
        return add(subtract(a1, b1), c1);
      }

      // Compute the matrix of a 4x3
      case 'Matrix(4x4)': {

        // Extract the components
        const { 
          a, b, c, d,
          e, f, g, h,
          i, j, k, l,
          m, n, o, p 
        } = this;

        // Compute the determinant of fgh...
        const fgh = new Matrix([
          [f, g, h],
          [j, k, l],
          [n, o, p]
        ]).determinant();

        // Compute the determinant of egh...
        const egh = new Matrix([
          [e, g, h],
          [i, k, l],
          [m, o, p]
        ]).determinant();

        // Compute the determinant of efh...
        const efh = new Matrix([
          [e, f, h],
          [i, j, l],
          [m, n, p]
        ]).determinant();

        // Compute the determinant of efg...
        const efg = new Matrix([
          [e, f, g],
          [i, j, k],
          [m, n, o]
        ]).determinant();

        // Compute the determinant for a | fgh...
        const a1 = multiply(a, fgh);

        // Compute the determinant for b | egh...
        const b1 = multiply(b, egh);
        
        // Compute the determinant for c | efh...
        const c1 = multiply(c, efh);

        // Compute the determinant for d | efh...
        const d1 = multiply(d, efg);

        // Return the determinant
        return subtract(add(subtract(a1, b1), c1), d1);
      }

      // Throw an error for any other case
      default: throw new Error(`${this.type}.determinant: Cannot be computed`);
    }
  }

}