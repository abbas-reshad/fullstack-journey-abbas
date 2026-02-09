// strings.js

function normalizeWhitespace(text) {
  if (typeof text !== "string") {
    throw new Error("normalizeWhitespace expects a string");
  }

  return text.trim().replace(/\s+/g, " ");
}

module.exports = {
  normalizeWhitespace,
};
