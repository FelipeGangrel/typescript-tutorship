/**
 * Members visibility
 *
 * public: default visibility
 * private: only accessible inside the class
 * protected: only accessible inside the class and its subclasses
 * readonly: only readable
 */

class Person {
  public readonly id: number;
  public name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.age = age;
    this.name = name;
  }
}

// We can create a new instance of the class Person by using the `new` keyword
const person = new Person(1, "John", 30);

// We can only access the public properties of the instance
console.log(person.name); // John
console.log(person.id); // 1

// We can't access the private properties of the instance
// console.log(person.age); // Property 'age' is private and only accessible within class 'Person'

// We can't modify the readonly properties of the instance
// person.id = 2; // Cannot assign to 'id' because it is a read-only property

class User extends Person {
  email: string;

  constructor(id: number, name: string, age: number, email: string) {
    super(id, name, age);
    this.email = email;
  }
}

export {};
