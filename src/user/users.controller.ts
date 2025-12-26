import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { createUserDTO } from './dto/createUser.dto';
import { UserEntity } from './entitys/userEntity.entity';
import { ListUserDTO } from './dto/ListUser.dto';
import { updateUserDTO } from './dto/updateUser.dto';
import { UserService } from './service/user.service';
import { HashPasswordPipe } from 'src/resources/pipes/hash-password.pipe';
import { AutheticationGuard } from 'src/authentication/authentication.guard';

@Controller('/usuarios')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
  ) {}

  @Post()
  async createUser(@Body() user: createUserDTO,
  @Body('senha', HashPasswordPipe ) senha: string
) {

    const userEntity = new UserEntity(user.name, user.email, senha);

    const result = await this.userService.createUser(userEntity);
    return result;
  }

  @UseGuards(AutheticationGuard)
  @Get()
  async getUser() {
    // * Modo como funcionava sem o banco de dados
    /* const listUser = await this.userRepository.getListUsers();
    const formatListUser = listUser.map((user) => {
      return new ListUserDTO(user.name, user.getId);
    }); */

    const formatListUser = this.userService.getListUsers();

    return formatListUser;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: updateUserDTO) {
    const updatedUser = await this.userRepository.updateUser(id, data);
    return {
      user: updatedUser,
      message: updatedUser ? 'user updated.' : 'Usuario nao cadastrado',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const userDeleted = await this.userRepository.deleteUser(id);

    return {
      user: userDeleted,
      message: 'usuario deletado.',
    };
  }
}
