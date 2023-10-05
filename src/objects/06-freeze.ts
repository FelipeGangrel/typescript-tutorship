const person = {
  name: "John",
  age: 30,
};

/**
 * Object.freeze()
 *
 * Freezes an object. A frozen object can no longer be changed.
 *
 * This means that:
 * We can't add new properties to a frozen object.
 * We can't remove existing properties from a frozen object.
 * We can't change the values of existing properties from a frozen object.
 */

try {
  Object.freeze(person);
  person.age = 32; // This is not OK
  Object.assign(person, { age: 33 }); // This is not OK also
  Object.assign(person, { city: "New York" }); // Not even this is OK
} catch (error: any) {
  console.log(error?.message); // Cannot assign to read only property 'age' of object '#<Object>'
}

console.log(person); // { name: "John", age: 30 }

export {};
