import {  Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class SingleEmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository){}

     async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>  {
        
        const hasEmail = await this.userRepository.hasEmail(value);
        return !hasEmail;

    }
   
}