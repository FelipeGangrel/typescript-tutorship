export const items = ["apple", "banana", "orange"];

/**
 * Includes
 *
 * Returns true if the array contains the specified element, false otherwise.
 */

const hasApple = items.includes("apple");

console.log(hasApple); // true

const hasPineapple = items.includes("pineapple");

console.log(hasPineapple); // false

const hasAppleAfterIndex1 = items.includes("apple", 1);

console.log(hasAppleAfterIndex1); // false
