import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { NumberEqualTen } from "./validations/numberEqualTen";

@Module({
    controllers: [ProductController],
    providers: [ProductRepository,NumberEqualTen]
})
export class ProductModule{

}