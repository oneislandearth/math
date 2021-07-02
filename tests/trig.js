// Import ava for testing
import test from 'ava';

// Import the pi constant
import { pi } from '../src/constants';

// Import the cosine function
import { cosine, cos } from '../src/cosine';

// Import the sine function
import { sine, sin } from '../src/sine';

// Check if the shorthand function works
test('shorthand', t => {

	// Check the value is correct
	if (cos(pi) == -1) t.pass();
});

// Check if the standard function works
/*test('cos 90', t => {

	console.log(cosine(90), sin(0))

	// Check the value is correct
	if (cosine(90) == pi / 4) t.pass();
});*/