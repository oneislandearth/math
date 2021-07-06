// Import the required constants
import { epsilon, degree, radian } from '../constants';

// Import the required utilities
import { vectorize, complexOperation } from './utils';


// Describe the add function
export const add = (...values) => complexOperation(values, (a, b) => round(a + b));

// Describe the subtract function
export const subtract = (...values) => complexOperation(values, (a, b) => round(a - b));

// Describe the multiply function
export const multiply = (...values) => complexOperation(values, (a, b) => round(a * b));

// Describe the divide function
export const divide = (...values) => complexOperation(values, (a, b) => round(a / b));

// Describe the negate / unary minus function
export const negate = (value) => multiply(value, -1);

// Describe the modulo function
export const mod = (value, portion) => round(value % portion);

// Describe the square root function
export const sqrt = (value) => round(Math.sqrt(value));

// Describe the power function
export const pow = (value, exponent) => round(Math.pow(value, exponent));

// Describe the square function
export const square = (value) => pow(value, 2);

// Define the cube function
export const cube = (value) => pow(value, 3);

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

// Describe a function to check all values are zero
export const zero = (value) => vectorize(value).every(value => abs(value) <= epsilon);