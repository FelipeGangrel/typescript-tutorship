const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Shift
 *
 * Removes the first element from an array and returns that element. This method changes the length of the array.
 */

const firstItem = items.shift();

console.log(firstItem); // "chocolate"
console.log(items); // ["vanilla", "strawberry"]

export {};
