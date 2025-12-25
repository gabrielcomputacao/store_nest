import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entitys/userEntity.entity';
import { Repository } from 'typeorm';
import { ListUserDTO } from '../dto/ListUser.dto';
import { createUserDTO } from '../dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getListUsers() {
    const listUser = await this.userRepository.find();
    const listUserDTO = listUser.map((user) => {
      return new ListUserDTO(user.name, user.id);
    });

    return listUserDTO;
  }

  async getUserWithEmail(email: string): Promise<UserEntity | null>{

    const user = await this.userRepository.findOneBy({
      email
    })

    console.log(user);
    return user;

  }

  async createUser(data: createUserDTO) {
    const createdUser = await this.userRepository.save(data);
  }
}
