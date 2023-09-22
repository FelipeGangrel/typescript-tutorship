const person = {
  name: "John",
  age: 30,
};

/**
 * Object.seal()
 *
 * Prevents new properties from being added to an object, but allows the modification of existing properties.
 */

try {
  Object.seal(person);
  person.age = 32; // This is OK
  Object.assign(person, { age: 33 }); // This is OK also
  Object.assign(person, { city: "New York" }); // This is not OK
} catch (error: any) {
  console.log(error?.message); // Cannot add property city, object is not extensible
}

console.log(person); // { name: "John", age: 33 }

export {};
