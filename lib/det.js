// A function for calculating the determinant of a 3x3 matrix

// The function takes in a matrix, or in the context of three plance intersection, where the matrix is given below
//
// |a b c|
// |d e f|
// |g h i|
//
// We use cofactor expansion to calculate the determinant
const det = ([[a, b, c], [d, e, f], [g, h, i]]) => {
  // We take the top row to expand out.
  // We could search for the row containing the most zeros or ones, but given our shapes do not
  // often line up with coordinate axes, and that we expect each normal passed in (in the context of face intersection)
  // We can assume that the normal will be nonzero, and also that most coordinates will be less than one, as we define
  // our normals to be unit vectors. Because of this we simply expand around the top row as it is convenient.
  
  const aCofactor = multiply(a, subtract(multiply(e, i), multiply(h, f)));

  const bCofactor = multiply(-b, subtract(multiply(d, i), multiply(g, f)));

  const cCofactor = multiply(c, subtract(multiply(d, h), multiply(g, e)));

  // The completed determinant
  const result = add(aCofactor, bCofactor, cCofactor);

  return result;
};