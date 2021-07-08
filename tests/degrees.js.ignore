// Import ava for testing
import test from 'ava';

// Import the constants
import { radian, pi } from '../src/constants';

// Import the round function 
import { round } from '../src/round';

// Import the degrees function
import { degrees } from '../src/degrees';

// Check if the function works for one degree
test('one radian', t => {

	// Check the value is correct
	if (degrees(radian) == 1) t.pass();
});

// Check if the function works for pi
test('pi radians', t => {

	// Check the value is correct
	if (degrees(180) == round(pi)) t.pass();
});