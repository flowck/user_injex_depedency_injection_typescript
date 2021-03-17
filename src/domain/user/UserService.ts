import { User } from "./User";
import { define, singleton } from "@injex/core";

export interface UserService {
  getUsers(): User[];
  addUser(user: User): void;
}

@define()
@singleton()
export class UserService implements UserService {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User | null {
    return this.users.find((user: User) => user.getId() === id) || null;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(id: string): void {
    this.users = this.users.filter((user: User) => user.getId() !== id);
  }
}
