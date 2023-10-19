type Person = {
  name: string;
  age?: number;
};

const person: Person = {
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

console.log('enumerable: ', person); // { name: "John", age: 32, city: "New York" }

/**
 * To make the property read-only, you have to set the writable property to false.
 * If you try to change the value of a read-only property, you will get an error.
 */
Object.defineProperty(person, "name", {
  writable: false,
});

try {
  person.name = "Jane";
} catch (error: any) {
  console.log(error.message); // Cannot assign to read only property 'name' of object '#<Object>'
}

console.log(person); // { name: "John", age: 32, city: "New York" }

/**
 * To make the property configurable, you have to set the configurable property to true.
 * If you try to delete a non-configurable property, you will get an error.
 *
 * Note: By default, the Object.defineProperty() method defines a property as configurable.
 * To make the property non-configurable, you have to set the configurable property to false.
 */
Object.defineProperty(person, "age", {
  configurable: false,
});

try {
  delete person.age;
} catch (error: any) {
  console.log(error.message); // Cannot delete property 'age' of #<Object>
}

console.log(person); // { name: "John", age: 32, city: "New York" }

export {};
