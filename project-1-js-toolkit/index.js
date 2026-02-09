const { normalizeWhitespace } = require("./strings");

const example = "   JavaScript    is     fun   ";
const result = normalizeWhitespace(example);

console.log("Original:", example);
console.log("Normalized:", result);
