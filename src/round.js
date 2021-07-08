// Describe a function to round the a number (6dp default)
export const round = (number, decimals = 6) => Number(parseFloat(number).toFixed(decimals));