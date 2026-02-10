# fullstack-journey-abbas

# JS Utility Toolkit

## Description

This project is a small JavaScript utility toolkit that provides reusable helper functions for **strings**, **arrays**, and **numbers**. It is designed as a beginner-friendly project to practice core JavaScript concepts such as functions, conditionals, loops, error handling, and basic module usage.

The toolkit also includes a simple runner script (`index.js`) that demonstrates how each utility works.

---

## Project Structure

```
project-1-js-toolkit/
├─ strings.js   // string utility functions
├─ arrays.js    // array utility functions
├─ numbers.js   // numeric utility functions
└─ index.js     // demo / runner
```

---

## How to Run the Project

1. Make sure Node.js is installed.
2. Open a terminal in the root of the repository.
3. Run the demo script:

```bash
node project-1-js-toolkit/index.js
```

This will execute sample calls for all utilities and log the results to the console.

---

## String Utilities

### 1. normalizeWhitespace(text)

Removes extra spaces and trims the text.

Example:

```js
normalizeWhitespace("  JavaScript   is   fun  ");
// "JavaScript is fun"
```

---

### 2. toCamelCase(text)

Converts a string to camelCase.

Example:

```js
toCamelCase("hello javascript world");
// "helloJavascriptWorld"
```

---

### 3. looksLikeEmail(text)

Checks if a string looks like a valid email address using simple rules (heuristic check).

Example:

```js
looksLikeEmail("test@mail.com");
// true
```

---

## Array Utilities

### 4. removeDuplicates(array)

Removes duplicate values from an array.

Example:

```js
removeDuplicates([1, 2, 2, 3]);
// [1, 2, 3]
```

---

### 5. flattenOnce(array)

Flattens a shallow nested array by one level.

Example:

```js
flattenOnce([1, [2, 3], 4]);
// [1, 2, 3, 4]
```

---

### 6. minMaxAvg(array)

Returns the minimum, maximum, and average values of a numeric array.

Example:

```js
minMaxAvg([2, 4, 6, 8]);
// { min: 2, max: 8, avg: 5 }
```

---

## Numeric Utilities

### 7. clamp(value, min, max)

Restricts a number to stay within a given range.

Example:

```js
clamp(15, 0, 10);
// 10
```

---

### 8. range(start, end)

Generates an array of numbers from start to end (inclusive).

Example:

```js
range(1, 5);
// [1, 2, 3, 4, 5]
```

---

## Test Cases (Manual)

The following manual tests were used to verify correctness and edge cases:

1. normalizeWhitespace with multiple spaces
2. normalizeWhitespace with empty string
3. toCamelCase with single word
4. toCamelCase with multiple words
5. looksLikeEmail with valid email
6. looksLikeEmail with invalid email
7. removeDuplicates with repeated values
8. flattenOnce with nested array
9. minMaxAvg with numeric array
10. clamp with value below range
11. clamp with value above range
12. range with equal start and end

---

## Notes

- All functions include basic input validation.
- Functions are written to be simple, readable, and reusable.
- This project is part of Month 1 learning milestones.
