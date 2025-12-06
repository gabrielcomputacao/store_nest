import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductDTO } from "./dto/product.dto";
import { ProductRepository } from "./product.repository";
import { ProductEntity } from "./entitys/productEntity";
import { v4 as uuid } from 'uuid'


@Controller("/produto")
export class ProductController{

    constructor(private products:ProductRepository ){}

    @Post()
    async createProduct(@Body() data: ProductDTO ){

        const productEntity = new ProductEntity();

        productEntity.name = data.name;
        productEntity.value = data.value;
        productEntity.description = data.description;
        productEntity.setId = uuid();
       

        await this.products.addProduct(productEntity)
        return data;
    }

    @Get()
    async listProducts(){
       const products = await this.products.getProducts();
       return products
    }

}