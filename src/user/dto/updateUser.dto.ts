import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UniqueEmail } from '../decorators/uniqueEmail';

export class updateUserDTO {
  @IsOptional()
  @IsNotEmpty({ message: 'Campo obrigatório' })
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'email inválido' })
  @UniqueEmail({ message: 'Já existe um usuario cadastrado com esse email.' })
  email: string;
  
  @IsOptional()
  @MinLength(6, { message: 'A senha precisar ter mais de 6 caracteres' })
  senha: string;
}
