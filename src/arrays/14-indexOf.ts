const items = ["apple", "banana", "orange", "banana"];

/**
 * Index Of
 *
 * Returns the index of the first element in the array that satisfies the provided testing function.
 */

const appleIndex = items.indexOf("apple");

console.log(appleIndex); // 0

const bananaIndex = items.indexOf("banana");

console.log(bananaIndex); // 1

const strawberryIndex = items.indexOf("strawberry");

console.log(strawberryIndex); // -1

const appleIndexAfterIndex1 = items.indexOf("apple", 1);

console.log(appleIndexAfterIndex1); // -1

const bananaIndexAfterIndex2 = items.indexOf("banana", 2);

console.log(bananaIndexAfterIndex2); // 3

export {};
