import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthenticationDto } from './dto/authentication.dto';
import { UserService } from 'src/user/service/user.service';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/user/entitys/userEntity.entity';
import { JwtService } from '@nestjs/jwt';

interface IPayload{
  sub: string,
  nomeUsuario: string
}

@Injectable()
export class AuthenticationService {
  constructor(private usuarioService: UserService,
    private jwtService:JwtService
  ) {}

  async login(email: string, login: string) {
    const user: UserEntity | null =
      await this.usuarioService.getUserWithEmail(email);

    const userAutenticated = await bcrypt.compare(login, user?.senha ?? '');

    if (!userAutenticated) {
      throw new UnauthorizedException();
    }

    const payload:IPayload = {
      sub: user?.id ?? '',
      nomeUsuario: user?.name ?? ''
    }


    return {
      token_access: await this.jwtService.signAsync(payload)
    }


  }
}
