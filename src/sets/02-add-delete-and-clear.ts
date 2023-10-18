/**
 * Add and Delete
 */

const flavors = new Set<string>(); // we can define the type of the values in the set

/**
 * We can add values to a set using the add() method.
 */
flavors.add("chocolate");
flavors.add("vanilla");
flavors.add("strawberry");

console.log(flavors); // Set(3) { 'chocolate', 'vanilla', 'strawberry' }

/**
 * We can delete values from a set using the delete() method.
 */

flavors.delete("vanilla");

console.log(flavors); // Set(2) { 'chocolate', 'strawberry' }

/**
 * We can check if a set contains a value using the has() method.
 */

console.log(flavors.has("chocolate")); // true
console.log(flavors.has("vanilla")); // false

/**
 * We can remove all values from a set using the clear() method.
 */

flavors.clear();

console.log(flavors); // Set(0) {}

export {};
