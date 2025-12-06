import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ProductRepository } from '../product.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class NumberEqualTen implements ValidatorConstraintInterface {
  
    constructor( private product:ProductRepository ){}
  
    async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean>  {
   
    const isEqualTen = await this.product.valueIsEqualTen(value);
    return isEqualTen;

  }
}
