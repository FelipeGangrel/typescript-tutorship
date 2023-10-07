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

  // we can expose the value of a private property by using an public method
  public getAge(): number {
    return this.age;
  }

  // we can also modify the value of a private property by using a public method
  public setAge(age: number): void {
    this.age = age;
  }
}

// We can create a new instance of the class Person by using the `new` keyword
const person = new Person(1, "John", 30);

// We can only access the public properties of the instance
console.log(person.name); // John
console.log(person.id); // 1

// We can modify the public (non readonly) properties of the instance
person.name = "Jane";
console.log(person.name); // Jane

// We can't access the private properties of the instance
// console.log(person.age); // Property 'age' is private and only accessible within class 'Person'

// We can't modify the readonly properties of the instance
// person.id = 2; // Cannot assign to 'id' because it is a read-only property

// We can access the age property by using the getAge method
console.log(person.getAge()); // 30

// We can modify the age property by using the setAge method
person.setAge(31);
console.log(person.getAge()); // 31

export {};
