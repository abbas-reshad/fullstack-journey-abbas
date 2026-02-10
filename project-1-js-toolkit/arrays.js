function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

function flattenOnce(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.flat();
}

function minMaxAvg(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = arr.reduce((a, b) => a + b, 0) / arr.length;

  return { min, max, avg };
}

module.exports = {
  removeDuplicates,
  flattenOnce,
  minMaxAvg,
};
