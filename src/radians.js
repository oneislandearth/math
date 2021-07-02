// Import the round function
import { round } from './round';

// Import the constants
import { radian } from './constants';

// Describe the radians function
export const radians = (value) => round(value * radian);

// Export the shorthand function
export const rad = radians;