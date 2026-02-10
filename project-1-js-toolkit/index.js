const {
  normalizeWhitespace,
  toCamelCase,
  looksLikeEmail,
} = require("./strings");

const { removeDuplicates, flattenOnce, minMaxAvg } = require("./arrays");

const example = "   JavaScript    is     fun   ";
const result = normalizeWhitespace(example);

console.log("Original:", example);
console.log("Normalized:", result);

console.log("CamelCase:", toCamelCase("hello javascript world"));

console.log("Email test 1:", looksLikeEmail("test@mail.com"));
console.log("Email test 2:", looksLikeEmail("wrong-mail"));

//Arrays examples
console.log("Remove duplicates:", removeDuplicates([1, 2, 2, 3]));
console.log("Flatten:", flattenOnce([1, [2, 3], 4]));
console.log("Min Max Avg:", minMaxAvg([2, 4, 6, 8]));
