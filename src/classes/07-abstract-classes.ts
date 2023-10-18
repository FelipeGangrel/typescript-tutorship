/**
 * Abstract Classes
 */

/**
 * Abstract classes are base classes from which other classes may be derived.
 * They may not be instantiated directly. Unlike an interface, an abstract class
 * may contain implementation details for its members.
 *
 * The abstract keyword is used to define abstract classes as well
 * as abstract methods within an abstract class.
 */

abstract class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * Abstract methods share a similar syntax to interface methods.
   *
   * Both define the signature of a method without including a method body.
   * However, abstract methods must include the abstract keyword and may optionally
   * include access modifiers.
   */
  public abstract getDetails(): string;
}

class Student extends Person {
  public getDetails(): string {
    return `Student: ${this.name}, ${this.age}`;
  }
}

const student = new Student("John", 20);

console.log(student.getDetails()); // Student: John, 20

/**
 * Abstract classes may also include non-abstract members.
 */

abstract class Person2 {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getAge(): string {
    return `This person age is ${this.age}`;
  }

  public abstract getDetails(): string;
}

class Student2 extends Person2 {
  public getDetails(): string {
    return `Student2: ${this.name}, ${this.age}`;
  }
}

const student2 = new Student2("John", 20);

console.log(student2.getAge()); // This person age is 20
console.log(student2.getDetails()); // Student2: John, 20

/**
 * We can't create an instance of an abstract class.
 */

// const person = new Person("John", 20); // Error

export {};
