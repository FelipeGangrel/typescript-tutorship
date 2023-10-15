/**
 * Implementing interfaces (and types)
 */

/**
 * You could use a type alias instead of an interface
 *
 * I, personally, prefer to use interfaces for implementing contracts like
 * the one below and types for everything else
 */

interface Person {
  name: string;
  age: number;
  getDetails(): string;
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Student: ${this.name}, ${this.age}`;
  }
}

const student = new Student("John Doe", 25);

console.log(student); // Student { name: 'John Doe', age: 25 }

/**
 * We can also implement multiple interfaces (and types)
 */

type Employee = {
  id: number;
};

class Teacher implements Person, Employee {
  name: string;
  age: number;
  id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  getDetails(): string {
    return `Teacher: ${this.name}, ${this.age}, ${this.id}`;
  }
}

const teacher = new Teacher("Jane Doe", 30, 123);

console.log(teacher); // Teacher { name: 'Jane Doe', age: 30, id: 123 }

export {};
