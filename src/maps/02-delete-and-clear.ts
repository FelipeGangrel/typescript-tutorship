/**
 * Deleting entries and clearing the map
 */

const person = new Map();

person.set("name", "John");
person.set("age", 32);

/**
 * We can remove a specific key-value pair from a map using the delete() method.
 */

person.delete("age");

console.log(person.has("age")); // false

/**
 * We can remove all key-value pairs from a map using the clear() method.
 */

person.clear();

console.log(person.has("name")); // false

export {};
