// Used for comparing dimensions of values

// Define the dimension class
export class Dimensions {

  // Define the constructor
  constructor(data) {

    // Set the default dimensions
    this.rows = 0;
    this.columns = 0;

    // Check if the value is an array
    if (Array.isArray(data)) {

      // Set the rows
      this.rows = data.length;

      // Set the rows as the value is 3-d
      this.columns = (Array.isArray(data[0])) ? data[0].length : 1;
    }
  }

  // Check whether another item has equal dimensions
  equal(dimensions) {

    // Return whether the dimensions match
    return (this.rows == dimensions.rows) && (this.columns == dimensions.columns);
  }
}