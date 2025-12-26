import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AutheticationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = this.getJwtToken(request);

    if (!token) {
      throw new UnauthorizedException('Usuario nao autenticado');
    }

    return true;
  }

  private getJwtToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type !== 'Bearer' ? token : undefined;
  }
}
