const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

const address = {
  street: "Main St",
  city: "Boston",
};

/**
 * Object.assign()
 *
 * Copies the values of all enumerable own properties from one or more source objects to a target object.
 * It will return the target object.
 */

const personWithAddress = Object.assign(person, address);

console.log(personWithAddress); // { name: "John", age: 30, hobbies: ["Sports", "Cooking"], street: "Main St", city: "Boston" }

/**
 * We can also use the spread operator to achieve the same result
 */
const personWithAddressUsingSpread = { ...person, ...address };

console.log(personWithAddressUsingSpread); // { name: "John", age: 30, hobbies: ["Sports", "Cooking"], street: "Main St", city: "Boston" }

export {};
