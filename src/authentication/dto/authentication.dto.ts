import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateAuthenticationDto {

    @IsEmail()
    email:string;

    @IsNotEmpty()
    password: string;

}
