const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Shift
 *
 * Removes the first element from an array and returns that element. This method changes the length of the array.
 */

const removedItem = items.shift();

console.log(removedItem); // "chocolate"
console.log(items); // ["vanilla", "strawberry"]

export {};
