// Import the isEqual function
const { isEqual } = require('./utils');

// Import mathjs
const math = require('mathjs');

// Import the required functions
const app = require('./index');

// Perform testing
const test = (values) => values.map(([equation, expected]) => {
  console.log(`${equation} = ${eval('app.'+equation)} (${(isEqual(eval('app.'+equation), expected) ? 'Passed' : 'Failed')})`);
});

const testMathJS = (values) => values.map(equation => {
  console.log(`${equation} = ${eval('app.'+equation)} (${(isEqual(eval('app.'+equation), eval('math.'+equation)) ? 'Passed' : 'Failed: '+ eval('math.'+equation))})`);
});

// Perform all the tests
test([
  ['add(5, 5)', 10], // positive and positive
  ['add(-5, 5)', 0], // negative and positive
  ['add(-5, -5)', -10], // double negative
  ['add(-5, -5, -5)', -15], // more than two
  ['add(0.1, 0.2)', 0.3], // floating decimals
  ['add([10, 10], [10, 10])', [20, 20]], // vector and vector
  ['add([0.1, 0.2], [0.2, 0.1])', [0.3, 0.3]], // vector and vector floating decimals

  ['subtract(5, 5)', 0], // positive and positive
  ['subtract(-5, 5)', -10], // negative and positive
  ['subtract(-5, -5)', 0], // double negative
  ['subtract(-5, -5, -5)', 5], // more than two
  ['subtract(0.1, 0.2)', 0.3], // floating decimals
  ['subtract([10, 10], [10, 10])', [0, 0]], // vector and vector
  ['subtract([0.1, 0.2], [0.2, 0.1])', [-0.1, 0.1]], // vector and vector floating decimals

  ['negate([5, -5])', [-5, 5]],
  ['negate(10)', -10],
]);

testMathJS([
  'cross([10, 20, -30], [20, 30 -8])'

])