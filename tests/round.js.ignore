// Import ava for testing
import test from 'ava';

// Import the round function
import { round, rnd } from '../src/round';

// Check if the shorthand function works
test('shorthand', t => {

	// Check the rounding works
	if (rnd(0.1 + 0.2) == 0.3) t.pass();
});

// Check if the standard function works
test('standard', t => {

	// Check the rounding works
	if (round(0.1 + 0.2) == 0.3) t.pass();
});

// Check that a six decimal number is not rounded
test('unrounded', t => {

	// Check the rounding works
	if (round(1.000006) == 1.000006) t.pass();
});

// Check that a seven decimal number is rounded up
test('rounded up', t => {

	// Check the rounding works
	if (round(1.0000007) == 1.000001) t.pass();
});

// Check that a seven decimal number is rounded down
test('rounded down', t => {

	// Check the rounding works
	if (round(1.0000003) == 1.000000) t.pass();
});

// Check that a specified decimal number is rounded
test('rounded specified', t => {

	// Check the rounding works
	if (round(1.008, 2) == 1.01) t.pass();
});
