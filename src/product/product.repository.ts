import { Injectable } from "@nestjs/common";
import { ProductDTO } from "./dto/product.dto";
import { ProductEntity } from "./entitys/productEntity";

@Injectable()
export class ProductRepository{

    private listProduct:ProductEntity[] = [];

    addProduct( data: ProductEntity){
        this.listProduct.push(data);
        return data;
    }

    getProducts(){
        return this.listProduct;
    }

    async valueIsEqualTen(value: number){

        const isEqual = value === 10;
        return !isEqual;

    }

}