import { IsEmail,  IsNotEmpty,  MinLength,   } from 'class-validator';
import { UniqueEmail } from '../decorators/uniqueEmail';

export class createUserDTO {
  @IsNotEmpty({ message: 'Campo obrigatório' })
  name: string;

  @IsEmail({}, { message: 'email inválido' })
  @UniqueEmail({ message: 'Já existe um usuario cadastrado com esse email.' })
  email: string;

  @MinLength(6, { message: 'A senha precisar ter mais de 6 caracteres' })
  senha: string;
}
