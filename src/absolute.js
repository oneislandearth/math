// Import the round function
import { round } from 'round';

// Describe the absolute function
export const absolute = (value) => round(Math.abs(value));

// Export the shorthand function
export const abs = absolute;