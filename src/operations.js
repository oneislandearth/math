// Import the constants
import { epsilon } from './constants';

// Import the round function
import { round } from './round';

// Describe the add function
export const add = (a, b) => round(a + b);

// Describe the subtract function
export const subtract = (a, b) => round(a - b);

// Describe the multiply function
export const multiply = (a, b) => round(a * b);

// Describe the divide function
export const divide = (a, b) => round(a / b);

// Describe the negate function
export const negate = (value) => multiply(value, -1);

// Describe the absolute function
export const abs = (value) => round(Math.abs(value));

// Describe the min function
export const min = (a, b) => round(Math.min(a, b));

// Describe the max function
export const max = (a, b) => round(Math.max(a, b));

// Describe the square root function
export const sqrt = (value) => round(Math.sqrt(value));

// Describe the power function
export const pow = (value, exponent) => round(Math.pow(value, exponent));

// Describe the square function
export const square = (value) => pow(value, 2);

// Define the cube function
export const cube = (value) => pow(value, 3);

// Describe the equal function
export const equal = (a, b) => abs(a - b) <= (max(abs(a), abs(b)) * epsilon);

// Describe the sum function
export const sum = (values) => round(values.reduce((sum, value) => add(sum, value), 0));