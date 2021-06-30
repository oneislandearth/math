// Import the round function
import { round } from './round';

// Describe the sine function
export const sine = (value) => round(Math.sin(value));

// Export the shorthand function
export const sin = sine;