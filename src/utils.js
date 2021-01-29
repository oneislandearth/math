// Describe a function to check the type is an array / vector
export const isVector = (value) => Array.isArray(value);

// Describe a function to determine if the values are vectors
export const isVectors = (values) => values.every(value => isVector(value));

// Describe a function to determine if the vectors within values
export const findVectors = (values) => values.filter(value => isVector(value));

// Describe a function to determine if the vectors share the same length
export const isEqualLengths = (values) => values.every(value => (value.length === values[0].length));

// Describe a function to determine whether values are equal
export const isEqual = (...values) => values.every(value => (JSON.stringify(value) === JSON.stringify(values[0])));

// Describe a function to fill out a vector with a value
export const vectorize = (value, length = 1) => {
  
  // Check if the value is a vector and return the vector if so
  if (isVector(value)) return value;

  // Return the value as a vector
  return Array(length).fill(value);
}

// Describe a function for performing a complex operation with a set of values
export const complexOperation = (values, operation) => {

  // Find the vectors in the values
  let vectors = findVectors(values);
  
  // Check if there are vectors
  if (vectors.length > 0) {

    // Throw an error if the vectors are of different lengths
    if (!isEqualLengths(vectors)) throw `Unable to perform operation: vector lengths are not equal`;

    // Map all values to vectors
    vectors = values.map(v => vectorize(v, vectors[0].length));

    // Return the calculated set operation
    return vectors.reduce((sum, value) => sum.map((v, i) => operation(sum[i], value[i])));
  }

  // Return the calculated set operation
  return values.reduce((sum, value) => operation(sum, value));
}