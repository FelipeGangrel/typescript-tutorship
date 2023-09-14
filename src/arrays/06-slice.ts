export const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Slice
 *
 * Returns a new array with a portion of the original array.
 */

/**
 * To get the first two items:
 *
 * we need to specify the index to start at (0),
 * and the index to end at (2).
 */

const firstTwoItems = items.slice(0, 2);

console.log(firstTwoItems); // ["chocolate", "vanilla"]

/**
 * To get the last two items:
 * we need to specify the index to start at (-2).
 */

const lastTwoItems = items.slice(-2);

console.log(lastTwoItems); // ["vanilla", "strawberry"]

/**
 * To get the middle item:
 * we need to specify the index to start at (1),
 * and the index to end at (2).
 */

const middleItem = items.slice(1, 2);

console.log(middleItem); // ["vanilla"]
