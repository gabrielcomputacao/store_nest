
import { IsEqualTen } from '../decorators/isEqualTen';
import { ProductEntity } from '../entitys/productEntity.entity';
import { FeatureDTO } from './feature.dto';
import {  IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class ProductDTO {

  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsEqualTen({ message: 'Não pode ser igual a 10' })
  value: number;

  @MaxLength(100)
  description: string;

  @IsOptional()
  feature: FeatureDTO[];
}
