// Import ava for testing
import test from 'ava';

// Import the absolute function
import { absolute, abs } from '../src/absolute';

// Check if the shorthand function works
test('shorthand', t => {

	// Check the function works as expected
	if (abs(-10) == absolute(-10)) t.pass();
});

// Check if the function works for a positive input
test('positive', t => {

	// Check the function works as expected
	if (absolute(10) == 10) t.pass();
});

// Check if the function works for a negative input
test('negative', t => {

	// Check the function works as expected
	if (absolute(-10) == 10) t.pass();
});