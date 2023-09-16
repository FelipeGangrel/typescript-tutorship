const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Pop
 *
 * Removes the last element from an array and returns that element. This method changes the length of the array.
 */

const removedItem = items.pop();

console.log(removedItem); // "strawberry"
console.log(items); // ["chocolate", "vanilla"]

export {};
