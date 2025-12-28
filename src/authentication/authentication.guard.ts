import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IUserJwtPayload } from './authentication.service';

export interface IRequestUserPayload extends Request {
  user: IUserJwtPayload
}


@Injectable()
export class AutheticationGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<IRequestUserPayload>();
    const token = this.getJwtToken(request);

    if (!token) {
      throw new UnauthorizedException('Usuario nao autenticado');
    }

    try {
      const jwt: IUserJwtPayload = await this.jwtService.verifyAsync(token);
      request.user = jwt;

      console.log(jwt);


    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('JWT inválido');
    }

    return true;
  }

  private getJwtToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
