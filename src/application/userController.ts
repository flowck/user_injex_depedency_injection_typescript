import { UserProps } from "./../domain/user/User";
import { UserService } from "../domain/user/UserService";
import { define, inject, singleton } from "@injex/core";
import { User } from "../domain/user/User";

export interface UserController {
  getUsers(): User[];
  addUsers(users: UserProps[]): void;
}

@define()
@singleton()
export class UserController implements UserController {
  @inject() private userService!: UserService;

  getUsers() {
    return this.userService.getUsers();
  }

  addUsers(users: UserProps[]) {
    users.forEach((user) => {
      this.userService.addUser(new User(user));
      console.info(`User with id ${user.id}`);
    });
  }
}
