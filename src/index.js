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

// Check that a value a kind of number
math.isNumber = (n) => (n !== null && (typeof (n) == 'number' || typeof (n) == 'bigint' || n instanceof math.BigNumber));

// Cast a number to Meters
math.toMeters = (n) => new Meters(n);

// Export all math the functions (must use module.exports to prevent babel casting to default)
module.exports = math;