const items = ["chocolate", "vanilla", "strawberry"];

/**
 * Concat
 *
 * Concatenates two or more arrays
 */

const items2 = ["rocky road", "neapolitan"];
const items3 = ["pistachio", "mint chocolate chip"];

let allItems = items.concat(items2, items3);

console.log(allItems); // ["chocolate", "vanilla", "strawberry", "rocky road", "neapolitan", "pistachio", "mint chocolate chip"]
