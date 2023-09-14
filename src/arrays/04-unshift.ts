export const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Unshift
 *
 * Adds one or more elements to the beginning of an array and returns the new length of the array.
 */

items.unshift("rocky road");

console.log(items); // ["rocky road", "chocolate", "vanilla", "strawberry"]

items.unshift("neapolitan", "mint chocolate chip");

console.log(items); // ["neapolitan", "mint chocolate chip", "rocky road", "chocolate", "vanilla", "strawberry"]
