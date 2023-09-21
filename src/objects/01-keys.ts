const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

/**
 * Object.keys()
 *
 * Returns an array of a given object's own enumerable property names,
 * iterated in the same order that a normal loop would.
 */

const personKeys = Object.keys(person);

console.log(personKeys); // ["name", "age", "hobbies"]

/**
 * To print each object keys
 */
Object.keys(person).forEach((key) => {
  console.log(key);
});

export {};
