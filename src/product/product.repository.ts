import { Injectable } from "@nestjs/common";
import { ProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductRepository{

    private listProduct:ProductDTO[] = [];

    addProduct( data: ProductDTO){
        this.listProduct.push(data);
        return data;
    }

    getProducts(){
        return this.listProduct;
    }

}