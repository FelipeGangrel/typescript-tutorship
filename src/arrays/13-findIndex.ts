const items = ["apple", "banana", "orange"];

/**
 * Find Index
 *
 * Returns the index of the first element in the array that satisfies the provided testing function.
 */

const appleIndex = items.findIndex((item) => item === "apple");

console.log(appleIndex); // 0

const bananaIndex = items.findIndex((item) => item === "banana");

console.log(bananaIndex); // 1

const strawberryIndex = items.findIndex((item) => item === "strawberry");

console.log(strawberryIndex); // -1

export {};
