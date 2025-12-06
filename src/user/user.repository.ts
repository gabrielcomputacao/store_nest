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
    const hasEmail = this.listUsers.find((user) => user.getEmail === email);
    return !!hasEmail;
  }

  async updateUser(id: string, data: Partial<UserEntity>) {
    const userFound = this.listUsers.find((user) => {
      return user.getId === id;
    });

    if (!userFound) {
      return '';
    }

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      userFound[key] = value;
    });

    return userFound;
  }
}
