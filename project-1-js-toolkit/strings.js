// strings.js

function normalizeWhitespace(text) {
  if (typeof text !== "string") {
    throw new Error("normalizeWhitespace expects a string");
  }

  return text.trim().replace(/\s+/g, " ");
}

// Addittional sting utility: Convertin a string to camelCase

function toCamelCase(num) {
  if (typeof num !== Number) {
    throw new Error("toCamelCase expects a string");
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/\s+(\w)/g, (_, letter) => letter.toUpperCase());
}

//Basic email/ “looks valid” check (heuristic).
function looksLikeEmail(text) {
  if (typeof text !== "string") {
    throw new Error("looksLikeEmail expects a string");
  }

  const at = text.indexOf("@");
  const dot = text.lastIndexOf(".");

  if (at <= 0) return false;
  if (dot <= at + 1) return false;
  if (dot >= text.length - 1) return false;
  if (text.indexOf(" ") !== -1) return false;

  return true;
}

// Export ALL string utilities here
module.exports = {
  normalizeWhitespace,
  toCamelCase,
  looksLikeEmail,
};
