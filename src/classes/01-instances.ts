/**
 * Classes and class instances
 */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

// We can create a new instance of the class Person by using the `new` keyword
const person = new Person("John", 30);

// We can access the properties of the instance
console.log(person.name); // John
console.log(person.age); // 30

/**
 * Checking the type of an instance
 *
 * We can use the `instanceof` operator to check if an instance belongs to a class
 */

console.log(person instanceof Person); // true

export {};
