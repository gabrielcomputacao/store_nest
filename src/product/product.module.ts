import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { NumberEqualTen } from "./validations/numberEqualTen";
import { ProductService } from "./service/product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./entitys/productEntity.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductController],
    providers: [ProductRepository,NumberEqualTen,ProductService]
})
export class ProductModule{

}