// Import the required operation functions
import { subtract, multiply } from './operations';

// Compute the determinant of a 2x2 array
export const determinant = ([a, b, c, d]) => subtract(multiply(a, d), multiply(b, c));