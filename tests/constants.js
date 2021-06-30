// Import ava for testing
import test from 'ava';

// Import the round function
import { round } from '../src/round';

// Import the constants
import { epsilon, pi, phi } from '../src/constants';

// Check if the epsilon value is correct
test('epsilon', t => {

	// Check the value is correct
	if (epsilon == 0.0001) t.pass();
});

// Check if the pi value is correct
test('pi', t => {

	// Check the value is correct
	if (round(pi) == 3.141593) t.pass();
});

// Check if the phi value is correct
test('phi', t => {

	// Check the value is correct
	if (round(phi) == 1.618034) t.pass();
});

// // Check if the radian value is correct
// test('radian', t => {

// 	// Check the value is correct
// 	if (round(radian * 6) == round(pi)) t.pass();
// });

