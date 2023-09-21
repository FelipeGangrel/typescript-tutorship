const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

/**
 * Object.entries()
 *
 * Returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
 * in the same order as that provided by a for...in loop.
 */

const personKeyValuePairs = Object.entries(person);

console.log(personKeyValuePairs); // [["name", "John"], ["age", 30], ["hobbies", ["Sports", "Cooking"]]]

/**
 * To print each object key-value pairs
 */
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

export {};
