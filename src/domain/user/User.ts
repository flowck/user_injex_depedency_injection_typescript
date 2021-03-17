export interface User {
  getName(): string;
  getAge(): number;
  getId(): string;
}

export interface UserProps {
  id: string;
  name: string;
  age: number;
  email: string;
  gender: string;
}

export class User implements User {
  private id!: string;
  private name!: string;
  private age!: number;
  private email!: string;
  private gender!: string;

  constructor(user: UserProps) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.gender = user.gender;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getId() {
    return this.id;
  }
}
