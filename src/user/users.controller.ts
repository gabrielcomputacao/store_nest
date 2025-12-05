import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { createUserDTO } from './dto/createUser.dto';
import { UserEntity } from './entitys/userEntity';
import { ListUserDTO } from './dto/ListUser.dto';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() user: createUserDTO) {
    const userEntity = new UserEntity(user.name, user.email, user.senha);

    await this.userRepository.addUser(userEntity);
    return {
      user: new ListUserDTO(userEntity.getId, userEntity.getId),
      message: 'Usuário criado com sucesso!',
    };
  }

  @Get()
  async getUser() {
    const listUser = await this.userRepository.getListUsers();
    const formatListUser = listUser.map((user) => {
      return new ListUserDTO(user.getId, user.getName);
    });

    return formatListUser;
  }
}
