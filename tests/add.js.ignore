// Import ava for testing
import test from 'ava';

// Import the Vector type
import { Vector } from '../src/types/vector';

// Import the add function
import { add } from '../src/add';

// Check if the add function works as expected
test('number-number', t => {

	// Define the values
	const a = 0.1;
	const b = 0.2;

	// Define the expected
	const expected = 0.3

	// Check the value is correct
	if (add(a, b) == expected) t.pass();
});

// Check if the add function works as expected
test('vector-vector', t => {

	// Define the values
	const a = new Vector([0, 1, 2]);
	const b = new Vector([4, 5, 6]);

	// Define the expected
	const expected = new Vector([4, 6, 8]);

	// Check the value is correct
	if (add(a, b).equals(expected)) t.pass();
});

// Check if the add function works as expected
test('vector-number', t => {

	// Define the values
	const a = new Vector([0, 1, 2]);
	const b = 1;

	// Define the expected
	const expected = new Vector([1, 2, 3]);

	// Check the value is correct
	if (add(a, b).equals(expected)) t.pass();
});


// Check if the add function works as expected
test('number-vector', t => {

	// Define the values
	const a = 1;
	const b = new Vector([0, 1, 2]);

	// Define the expected
	const expected = new Vector([1, 2, 3]);

	// Check the value is correct
	if (add(a, b).equals(expected)) t.pass();
});