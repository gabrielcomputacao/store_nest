import { Injectable } from '@nestjs/common';

import { UserEntity } from './entitys/userEntity';

@Injectable()
export class UserRepository {
  private listUsers: UserEntity[] = [];

  async addUser(user: UserEntity) {
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
