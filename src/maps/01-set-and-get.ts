/**
 * Setting and getting values
 */

/**
 * We can define a map using the Map constructor.
 *
 * We add key-value pairs to a map using the set() method.
 * We retrieve values from a map using the get() method.
 */

const person = new Map();

person.set("name", "John");
person.set("age", 32);

console.log(person.get("name")); // John
console.log(person.get("age")); // 32

/**
 * Checking if an entry exists
 *
 * We can check if a map contains a key using the has() method.
 */

console.log(person.has("name")); // true
console.log(person.has("age")); // true

export {};
