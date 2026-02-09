const {
  normalizeWhitespace,
  toCamelCase,
  looksLikeEmail,
} = require("./strings");

const example = "   JavaScript    is     fun   ";
const result = normalizeWhitespace(example);

console.log("Original:", example);
console.log("Normalized:", result);

console.log("CamelCase:", toCamelCase("hello javascript world"));

console.log("Email test 1:", looksLikeEmail("test@mail.com"));
console.log("Email test 2:", looksLikeEmail("wrong-mail"));
