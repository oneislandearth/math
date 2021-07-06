// Describe the function to calculate the cross product
export const cross = (a, b) => {

  // Extract the values from the vectors
  const [x0, y0, z0] = a;
  const [x1, y1, z1] = b;

  // Return the cross product
  return [
    subtract(multiply(y0, z1), multiply(z0, y1)),
    subtract(multiply(z0, x1), multiply(x0, z1)),
    subtract(multiply(x0, y1), multiply(y0, x1))
  ];
};