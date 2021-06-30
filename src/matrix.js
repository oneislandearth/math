// Define the matrix type
export class Matrix extends Array {

  // Define the matrix
  constructor(data) {

    // Check if the data are of equal size
    if (data.length > 1 && data.length == data[0].length) {
      
      // Bind the data
      super(...data);
     
    // Handle when data is not of equal size
    } else {

      // Throw
      throw new Error('Matrix data is not of equal length');
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

  // Define the matrix species
  get species() {
    return 'Matrix';
  }

  // Define the matrix size
  get size() {
    return this.length;
  }

}