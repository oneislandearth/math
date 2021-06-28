// Define the matrix type
export class Matrix extends Array {

  // Define the matrix
  constructor(data) {

    // Check if the data are of equal size
    if (data.length == data[0].length) {
      
      // Bind the data to the matrix
      for (const row of data) {

      }
    }
  }

  // Create a matrix from a vector
  static fromVector(vector) {

    // Define the matrix data
    const data = [];

    // Define the size
    const size = vector.length;

    // Iterate through the values
    for (const i in vector) {

      // Define a row
      data[i] = new Array(size).fill(0);

      // Bind the value into the row
      data[i][i] = vector[i];
    }

    // Bind the data to a matrix
    return new Matrix(data);
  }

  // Define as array species
  static get [Symbol.species]() { 
    return Array; 
  }

}