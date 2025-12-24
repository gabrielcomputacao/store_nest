import { Injectable } from '@nestjs/common';
import { CreateAuthenticationDto } from './dto/authentication.dto';

@Injectable()
export class AuthenticationService {
  login(email: string, login: string) {
    console.log(email, login);
  }
}
