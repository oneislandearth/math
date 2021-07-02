// Import the add function
import { add } from './add';

// Import the round function
import { round } from './round';

// Describe the sum function
export const sum = (values) => round(values.reduce((sum, value) => add(sum, value), 0));