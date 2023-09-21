const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

/**
 * Object.values()
 *
 * Returns an array of a given object's own enumerable property values,
 * in the same order as that provided by a for...in loop.
 */

const personValues = Object.values(person);

console.log(personValues); // ["John", 30, ["Sports", "Cooking"]]

/**
 * To print each object values
 */
Object.values(person).forEach((value) => {
  console.log(value);
});

export {};
