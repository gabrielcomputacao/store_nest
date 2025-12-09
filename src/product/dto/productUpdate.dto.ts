import { IsOptional } from "class-validator";
import { IsEqualTen } from "../decorators/isEqualTen";

export class ProductUpdateDTO{

    @IsOptional()
    name: string;

    @IsOptional()
    @IsEqualTen({ message: 'Não pode ser igual a 10' })
    value:number;

    @IsOptional()
    description: string;

}