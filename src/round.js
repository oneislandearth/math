// Describe a function to round the a number (6dp default)
export const round = (number, decimals = 6) => Number(parseFloat(number).toFixed(decimals));

// Export the shorthand function
export const rnd = round;