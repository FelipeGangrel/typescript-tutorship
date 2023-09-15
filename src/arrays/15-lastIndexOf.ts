const items = ["chocolate", "vanilla", "strawberry", "vanilla"];

/**
 * Last Index Of
 *
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present.
 * The array is searched backwards, starting at fromIndex.
 *
 * If fromIndex is omitted, the search starts at the last index in the array.
 */

const strawberryIndex = items.lastIndexOf("strawberry");

console.log(strawberryIndex); // 2

const vanillaIndex = items.lastIndexOf("vanilla");

console.log(vanillaIndex); // 3

const orangeIndex = items.lastIndexOf("orange");

console.log(orangeIndex); // -1

const vanillaIndexBeforeIndex1 = items.lastIndexOf("vanilla", 1);

console.log(vanillaIndexBeforeIndex1); // 1

export {};
