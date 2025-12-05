import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { createUserDTO } from './dto/createUser.do';
import { UserEntity } from './entitys/userEntity';

@Controller('/usuarios')
export class UserController {
  
  constructor(private userRepository: UserRepository){}

  @Post()
  async createUser(@Body() user: createUserDTO) {

    const userEntity = new UserEntity( user.name, user.email, user.senha );

    await this.userRepository.addUser(userEntity);
    return { id: userEntity.id, message: "Usuário criado com sucesso!" };
  };

  @Get()
  async getUser(){
    return this.userRepository.getListUsers();
  }

}
