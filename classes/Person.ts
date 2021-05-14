class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(name?: string, lastName?: string, age?: number) {
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
  }

  greet(friend): string {
    return "Hello " + friend + ", My name is " + this.firstName;
  }
}

let quang: Person = new Person();
quang.firstName = "Quang";
quang.lastName = "Pham";
quang.age = 25;

let thao: Person = new Person();
thao.firstName = "Phuong";
thao.lastName = "Thao";

quang.greet(thao.firstName);
