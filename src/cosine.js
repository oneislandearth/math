// Import the round function
import { round } from './round';

// Describe the cosine function
export const cosine = (value) => round(Math.cos(value));

// Export the shorthand function
export const cos = cosine;