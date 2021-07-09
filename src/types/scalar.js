// Define the scalar class
export class Scalar extends Number {
  constructor(a) {
    super(a);
  }

  // Define as number species
  static get [Symbol.species]() { 
    return Number; 
  }

  // Define the type as scalar
  get type() {
    return 'Scalar';
  }
}