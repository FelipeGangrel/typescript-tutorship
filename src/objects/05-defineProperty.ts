const person = {
  name: "John",
  age: 30,
};

/**
 * Object.defineProperty()
 *
 * Adds the named property described by a given descriptor to an object.
 */

/**
 * To change the value of an existing property,
 * you can use the Object.defineProperty() method.
 */
Object.defineProperty(person, "age", {
  value: 32,
});

console.log(person); // { name: "John", age: 32 }

/**
 * To add a new property, you can use the Object.defineProperty() method.
 *
 * Note: By default, the Object.defineProperty() method defines a property as non-enumerable.
 * To make the property enumerable, you have to set the enumerable property to true.
 *
 * Non enumerable properties are not visible when you use the for...in loop or Object.keys() method.
 */
Object.defineProperty(person, "city", {
  value: "New York",
  enumerable: true,
});

console.log(person); // { name: "John", age: 32, city: "New York" }

export {};
