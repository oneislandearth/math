// Import ava for testing
import test from 'ava';

// Import the add function
import { add } from '../src/add';

// Check if the add function works
test('scalar', t => {

	// Check the value is correct
	if (add(0.1, 0.2) == 0.3) t.pass();
});