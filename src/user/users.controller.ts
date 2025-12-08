import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { createUserDTO } from './dto/createUser.dto';
import { UserEntity } from './entitys/userEntity.entity';
import { ListUserDTO } from './dto/ListUser.dto';
import { updateUserDTO } from './dto/updateUser.dto';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() user: createUserDTO) {
    const userEntity = new UserEntity(user.name, user.email, user.senha);

    await this.userRepository.addUser(userEntity);
    return {
      user: new ListUserDTO(userEntity.name, userEntity.getId),
      message: 'Usuário criado com sucesso!',
    };
  }

  @Get()
  async getUser() {
    const listUser = await this.userRepository.getListUsers();
    const formatListUser = listUser.map((user) => {
      return new ListUserDTO(user.name, user.getId);
    });

    return formatListUser;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string,@Body() data: updateUserDTO){

    const updatedUser = await this.userRepository.updateUser(id, data)
    return {
      user: updatedUser,
      message: updatedUser ? "user updated." : "Usuario nao cadastrado"
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string){

    const userDeleted = await this.userRepository.deleteUser(id);

    return {
      user: userDeleted,
      message: "usuario deletado."
    }

  }


}
