import { IsOptional } from "class-validator";
import { ProductEntity } from "../entitys/productEntity.entity";

export class FeatureDTO{
 
    id:string;

    name: string;

    description: string;

    product: ProductEntity;
}