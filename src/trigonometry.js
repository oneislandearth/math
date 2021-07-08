// Import the round function
import { round } from './round';

// Import the constants
import { degree, radian } from './constants';

// Describe the degrees function to convert radians to degrees
export const degrees = (radians) => round(radians * degree);

// Describe the radians function to convert degrees to radians
export const radians = (degrees) => round(degrees * radian);

// Describe the acos function
export const acos = (value) => round(Math.acos(value));

// Describe the cos function
export const cos = (value) => round(Math.cos(value));

// Describe the atan function
export const atan = (value) => round(Math.atan(value));

// Describe the tan function
export const tan = (value) => round(Math.tan(value));

// Describe the asine function
export const asin = (value) => round(Math.asin(value));

// Describe the sine function
export const sin = (value) => round(Math.sin(value));

// Describe the hypotenuse function
export const hypot = (a, b) => round(Math.hypot(a, b));