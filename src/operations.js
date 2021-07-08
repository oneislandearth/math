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

// Describe the sum function
export const sum = (values) => round(values.reduce((sum, value) => add(sum, value), 0));