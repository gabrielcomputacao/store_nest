import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  private listUsers = [] as any;

  async addUser(user: any) {
    this.listUsers.push(user);
  }

  async getListUsers(){
    return this.listUsers;  
  }

}
