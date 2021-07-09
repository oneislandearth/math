// Flatten an array
export const flatten = (values) => values.flat(Infinity);

// Check that all values are true
export const truthy = (values) => Boolean(values.reduce((sum, v) => sum & v));

// Determine the type from a number
export const type = (value) => {

  // Determine if the number is a number type
  if (typeof value == 'number') return 'Scalar';

  // Determine if the number is a scalar type
  if (value.species && value.species == 'Numerical') return 'Scalar';

  // Determine if the number is a vector type
  if (value.species && value.species == 'Vector') return 'Vector';

  // Determine if the number is a matrix type
  if (value.species && value.species == 'Matrix') return 'Matrix';
};

// Define the typecase
export const typecase = (a, b) => {

  // Compute the types for a and b
  const ta = type(a);
  const tb = type(b);

  // Return the typecase
  return `${ta}-${tb}`;
};