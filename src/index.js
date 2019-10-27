// Import the mathjs configuration options
import { create, all } from 'mathjs';

// Import the meters class
import { Meters } from './meters';

// (roll out with for mathjs/7)
// Congifure mathjs units
// const math = create(all, {
//   number: 'BigNumber'
// });

// Configue mathjs
const math = create(all, {});

// Epislon / tolerance
math.epsilon = 1e-4;

// Phi ratio / Golden ratio
math.phi = math.divide(math.add(1, math.sqrt(5)), 2);

// Number of degrees in one radian
math.degree = math.divide(180, math.pi);

// Calculate a value in degrees
math.degrees = (n) => math.multiply(n, math.degree);

// Number of radians in one degree
math.radian = math.divide(math.pi, 180);

// Calculate a value in radians
math.radians = (n) => math.multiply(n, math.radian);

// Calculate the unit vector of a vector
math.unit = (n) => math.divide(n, math.norm(n));

// Calculate the sum of a set of values
math.isZeroes = (n) => {

  // Cast the value to an array if it isn't one
  n = (Array.isArray(n)) ? n: [n];

  // Store the count of zeroes
  let zeroes = 0;

  // Check each of the values is less than the epsilon
  for (const v of n) {

    // Return false if the number is greater than the epsilon
    if (math.abs(v) <= math.epsilon) zeroes += 1;
  }

  // Return true as all numbers are less than the epsilon
  return (zeroes == n.length);
}

// Calculate the angle between two or three vectors
math.angleBetween = (...vectors) => {

  // Define the two vectors
  let a = vectors[0];
  let b = vectors[1];

  // Check if there are three vectors (find angle located at b)
  if (vectors.length == 3) {

    // Calculate vector a
    a = math.subtract(vectors[0], vectors[1]);

    // Calculate vector b
    b = math.subtract(vectors[2], vectors[1]);
  }
  
  // Calculate and return the angle
  return math.acos(math.divide(math.dot(a, b), math.multiply(math.norm(a), math.norm(b))));
}

// Check that a value a kind of number
math.isNumber = (n) => (n !== null && (typeof (n) == 'number' || typeof (n) == 'bigint' || n instanceof math.BigNumber));

// Cast a number to Meters
math.toMeters = (n) => new Meters(n);

// Export all math the functions (must use module.exports to prevent babel casting to default)
module.exports = math;