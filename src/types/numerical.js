// Import the dimensions aspect
import { Dimensions } from '../aspects/dimensions';

// Define the number type
export class Numerical extends Array {

  // Define the constructor 
  constructor(value, { dimensions, species }) {

    // Apply the values
    super(...value);

    // Set the dimensions
    Reflect.defineProperty(this, 'dimensions', {
      get() {
        return (dimensions) ? {
          rows: dimensions[0],
          columns: dimensions[1]
        } : {
          rows: 1,
          columns: 1
        };
      }
    });
    
    // Set the species
    Reflect.defineProperty(this, 'species', {
      get() {
        return (species) ? species : 'Numerical';
      }
    });
  }

  // Define as array species
  static get [Symbol.species]() { 
    return Array; 
  }

  // Define the type (rows x columns)
  get type() {
    return `${this.species}(${this.dimensions.rows}x${this.dimensions.columns})`;
  }

  // Map out the rows
  get rows() {

    // Define the number of rows and columns
    const r = this.dimensions.rows;
    const c = this.dimensions.columns;

    // Define the resulting rows
    const rows = [];

    // Iterate from 0 to r rows and add the values to an array
    for (let i = 0; i < r; i++) rows.push(this.filter((v, j) => (j >= (c * i)) && (j < (c * (i + 1)))));

    // Return the resulting rows
    return rows;
  }

  // Map out the columns
  get columns() {

    // Define the number of columns
    const c = this.dimensions.columns;

    // Define the resulting columns
    const columns = [];

    // Iterate from 0 to c columns and add the values to an array
    for (let i = 0; i < c; i++) columns.push(this.filter((v, j) => j % c == i));

    // Return the resulting columns
    return columns;
  }

  // // Cast the number to a vector
  // toVector(size) {

  //   // Return the current value if already a vector
  //   if (this.species == 'Vector') return this;

  //   // Otherwise map the value to a vector
  //   return new Vector(Array.length(size).fill(this[0]));
  // }
}