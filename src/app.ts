import users from "./infrastructure/fixtures/users.json";
import { bootstrap, IBootstrap, inject } from "@injex/core";
import { UserController } from "./application/userController";

@bootstrap()
export class App implements IBootstrap {
  @inject() private userController!: UserController;

  run() {
    console.log("App starts here");
    this.userController.addUsers(users);
    console.log(this.userController.getUsers().splice(0, 10));
  }
}
