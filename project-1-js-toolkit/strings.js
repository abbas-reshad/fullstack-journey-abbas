// strings.js

function normalizeWhitespace(text) {
  if (typeof text !== "string") {
    throw new Error("normalizeWhitespace expects a string");
  }

  return text.trim().replace(/\s+/g, " ");
}

// Addittional sting utility: Convertin a string to camelCase

function toCamelCase(text) {
  if (typeof text !== "string") {
    throw new Error("toCamelCase expects a string");
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/\s+(\w)/g, (_, letter) => letter.toUpperCase());
}

// Export ALL string utilities here
module.exports = {
  normalizeWhitespace,
  toCamelCase,
};
