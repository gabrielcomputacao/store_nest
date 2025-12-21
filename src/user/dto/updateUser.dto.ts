import { PartialType } from '@nestjs/mapped-types';
import { createUserDTO } from './createUser.dto';

// ? Ele herda todas as propriedades de createUserDTO e colocar isOptional em todas
export class updateUserDTO extends PartialType(createUserDTO) {}
