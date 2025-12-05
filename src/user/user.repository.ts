import { Injectable } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.do';

@Injectable()
export class UserRepository {
  private listUsers: createUserDTO[] = [];

  async addUser(user: any) {
    this.listUsers.push(user);
  }

  async getListUsers() {
    return this.listUsers;
  }

  async hasEmail(email: string) {
    const hasEmail = this.listUsers.find((user) => user.email === email);
    return !!hasEmail;
  }
}
