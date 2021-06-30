// Import ava for testing
import test from 'ava';

// Import the absolute function
import { absolute, abs } from '../src/absolute';

// Check if the shorthand function works
test('shorthand', t => {

	// Check the absolute works
	if (abs(-10) == 10) t.pass();
});

// Check if the standard function works
test('standard', t => {

	// Check the absolute works
	if (absolute(-10) == 10) t.pass();
});