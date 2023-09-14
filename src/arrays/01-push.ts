export const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Push
 *
 * Adds one or more elements to the end of an array and returns the new length of the array.
 */
let length = items.push("rocky road");

console.log(items); // ["chocolate", "vanilla", "strawberry", "rocky road"]
console.log(length); // 4

length = items.push("neapolitan", "mint chocolate chip");

console.log(items); // ["chocolate", "vanilla", "strawberry", "rocky road", "neapolitan", "mint chocolate chip"]
console.log(length); // 6
