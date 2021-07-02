// Check that all values are true
export const truthy = (values) => Boolean(values.reduce((sum, v) => sum & v));