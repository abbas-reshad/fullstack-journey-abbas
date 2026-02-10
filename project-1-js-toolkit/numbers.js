function clamp(value, min, max) {
  if (typeof value !== "number") return null;
  if (typeof min !== "number") return null;
  if (typeof max !== "number") return null;

  if (value < min) return min;
  if (value > max) return max;

  return value;
}

//generates an array of numbers from start to end
function range(start, end) {
  if (typeof start !== "number") return [];
  if (typeof end !== "number") return [];

  let result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

module.exports = {
  clamp,
  range,
};
