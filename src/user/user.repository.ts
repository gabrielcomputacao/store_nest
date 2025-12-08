import { Injectable } from '@nestjs/common';

import { UserEntity } from './entitys/userEntity.entity';

@Injectable()
export class UserRepository {
  private listUsers: UserEntity[] = [];

  private async getUserById(id: string) {
    const userSelected = await this.listUsers.find((user) => {
      return user.getId === id;
    });

    return userSelected;
  }

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
    const userFound = this.getUserById(id);

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

  async deleteUser(id: string) {
    const userDelete = await this.getUserById(id);
    this.listUsers = this.listUsers.filter(
      (user) => user.getId !== userDelete?.getId,
    );

    return userDelete;
  }
}
