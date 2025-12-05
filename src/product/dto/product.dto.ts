
import { FeatureDTO } from './feature.dto';
import {  IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class ProductDTO {

  @IsNotEmpty()
  name: string;

  @IsNumber()
  value: number;

  @MaxLength(100)
  description: string;

  @IsOptional()
  feature: FeatureDTO;
}
