import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../entitys/productEntity.entity";
import { Repository } from "typeorm";
import {  ProductDTO } from "../dto/product.dto";
import { plainToInstance } from "class-transformer";
import { ProductUpdateDTO } from "../dto/productUpdate.dto";

@Injectable()
export class ProductService{

    constructor( 
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository< ProductEntity>
     ){}


     async getProduct(){
        const listProducts = await this.productRepository.find();
        const listProductDTO = plainToInstance(ProductDTO, listProducts, {
         
        });

        return listProductDTO;
     }

     async createProduct( product: ProductEntity ){
        this.productRepository.save(product)
     }

     async updateProduct(id: string, data: ProductUpdateDTO){

        const productSelected = await this.productRepository.update( id, data );
        return productSelected;
     }

     async deleteProduct(id: string){
        try {
            const productDeleted = await this.productRepository.delete(id)
        return productDeleted
        } catch (error) {
            throw new Error('Erro inesperado');
        }
        

     }

}