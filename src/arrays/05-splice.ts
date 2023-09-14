export const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Splice
 *
 * Adds and/or removes elements from an array.
 */

/**
 * To add "rocky road" to the beginning of the array:
 *
 * we need to specify the index to start at (0),
 * the number of items to remove (0), and the
 * item to add ("rocky road").
 */

items.splice(0, 0, "rocky road");

console.log(items); // ["rocky road", "chocolate", "vanilla", "strawberry"]

/**
 * To add "neapolitan" and "mint chocolate chip" after "rocky road":
 *
 * we need to specify the index to start at (1),
 * the number of items to remove (0), and the
 * items to add ("neapolitan", "mint chocolate chip").
 */

items.splice(1, 0, "neapolitan", "mint chocolate chip");

console.log(items); // ["rocky road", "neapolitan", "mint chocolate chip", "chocolate", "vanilla", "strawberry"]

/**
 * To remove "neapolitan" and "mint chocolate chip":
 * we need to specify the index to start at (1),
 * the number of items to remove (2).
 */

items.splice(1, 2);

console.log(items); // ["rocky road", "chocolate", "vanilla", "strawberry"]

/**
 * To replace "chocolate" with "cookies and cream":
 * we need to specify the index to start at (1),
 * the number of items to remove (1), and the
 * item to add ("cookies and cream").
 */

items.splice(1, 1, "cookies and cream");

console.log(items); // ["rocky road", "cookies and cream", "vanilla", "strawberry"]
