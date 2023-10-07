/**
 * For in loop
 */

const person = {
  name: "John",
  age: 30,
};

/**
 * We can iterate over the properties of an object using a for in loop
 */

for (const key in person) {
  console.log(key); // name, age
}

/**
 * Checking if a property exists in an object by using the in operator
 */

console.log("name" in person); // true
console.log("salary" in person); // false

/**
 * Checking if a property exists in an object by using the hasOwnProperty method
 */

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("salary")); // false
