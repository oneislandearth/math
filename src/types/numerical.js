// Import the dimensions aspect
import { Dimensions } from '../aspects/dimensions';

// Define the number type
export class Numerical extends Array {

  // Define the constructor 
  constructor(values, species) {

    // Apply the values
    super(...values);
    
    // Set the species
    Reflect.defineProperty(this, 'species', {
      get() {
        return species ? species : 'Numerical';
      }
    });
  }

  // Define as array species
  static get [Symbol.species]() { 
    return Array; 
  }

  // Define the type (columns by rows)
  get type() {
    return `${this.species}(${this.columns}x${this.rows})`;
  }

  // Define the matrix columns
  get columns() {
    return this.dimensions.columns;
  }

  // Define the matrix rows
  get rows() {
    return this.dimensions.rows;
  }

  // Define the dimensions
  get dimensions() {
    return new Dimensions(this);
  }

  // // Cast the number to a vector
  // toVector(size) {

  //   // Return the current value if already a vector
  //   if (this.species == 'Vector') return this;

  //   // Otherwise map the value to a vector
  //   return new Vector(Array.length(size).fill(this[0]));
  // }
}