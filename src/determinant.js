// Import the round function
import { round } from './round';

// Define minus
const minus = (a, b) => round(a - b);

// Define multiply
const multiply = (a, b) => round(a * b);

// Compute the determinant of a 2x2 array
export const determinant = (a, b, c, d) => minus(multiply(a, d), multiply(b, c));

// Compute the determinant of n
const determinantN = () => {};