// Import the round function
import { round } from './round';

// Import the constants
import { degree } from './constants';

// Describe the degrees function
export const degrees = (value) => round(value * degree);

// Export the shorthand function
export const deg = degrees;