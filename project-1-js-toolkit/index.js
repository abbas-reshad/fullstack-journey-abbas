const { normalizeWhitespace, toCamelCase } = require("./strings");

const example = "   JavaScript    is     fun   ";
const result = normalizeWhitespace(example);

console.log("Original:", example);
console.log("Normalized:", result);
console.log("CamelCase:", toCamelCase("hello javascript world"));
