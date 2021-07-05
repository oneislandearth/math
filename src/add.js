// Import the typecase function
import { typecase } from './utils';

// Import the round function
import { round } from './round';

// Import the vector type
import { Vector } from './types/vector';

// Describe the sum function
export const add = (a, b) => {

  // Define the type
  const type = typecase(a, b);

  // Define the switch case check
  switch (type) {

  // Compute both as numbers
  case 'Number-Number': 
    return round(a + b);

  // Compute both as vectors
  case 'Vector-Vector':
    if (a.length > b.length) {
      return new Vector(a.map((v, i) => v + b[i]));
    }

  // Case a vector and number
  case 'Vector-Number':
    return new Vector(a.map(v => v + b));

  // Case a vector and number
  case 'Number-Vector':
    return new Vector(b.map(v => v + a));

  // Compute an error otherwise
  default:
    throw new Error('math.add: unknown types');
  }
};