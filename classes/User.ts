interface IUser {
  name: string;
  email: string;
  age: number;
  register();
  payMembership();
}

class User implements IUser {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("User created: ", this.name);
  }

  register() {
    console.log(this.name + "is now regitered");
  }

  payMembership() {
    console.log(this.name + "paid membership");
  }
}

// inheritance

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payMembership() {
    super.payMembership();
  }
}

let quangPham = new User("quang Pham", "quangpn@gmail.com", 31);

console.log(quangPham.age);
quangPham.register();

let thaoPham = new Member(1, "Thao Phan", "thaopt@email.com", 1);
thaoPham.payMembership();
