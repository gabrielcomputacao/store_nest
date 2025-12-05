import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductDTO } from "./dto/product.dto";
import { ProductRepository } from "./product.repository";


@Controller("/produto")
export class ProductController{

    constructor(private products:ProductRepository ){}

    @Post()
    async createProduct(@Body() data: ProductDTO ){
        await this.products.addProduct(data)
        return data;
    }

    @Get()
    async listProducts(){
       const products = await this.products.getProducts();
       return products
    }

}