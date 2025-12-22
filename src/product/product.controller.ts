import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductRepository } from './product.repository';
import { ProductEntity } from './entitys/productEntity.entity';
import { v4 as uuid } from 'uuid';
import { ProductService } from './service/product.service';
import { ProductUpdateDTO } from './dto/productUpdate.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('/produto')
export class ProductController {
  constructor(
    private products: ProductRepository,
    private readonly productService: ProductService,
  ) {}

  @Post()
  async createProduct(@Body() data: ProductDTO) {
    const productEntity = new ProductEntity();

    productEntity.name = data.name;
    productEntity.value = data.value;
    productEntity.description = data.description;
    productEntity.setId = uuid();
    productEntity.feature = data.feature;

    await this.productService.createProduct(productEntity);
    return data;
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  async listProducts() {
    const products = await this.productService.getProduct();
    console.log("pegando do banco")
    return products;
  }

  @Patch('/:id')
  async updateProduct(@Param('id') id: string, @Body() data: ProductUpdateDTO) {
    await this.productService.updateProduct(id, data);
    return data;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const result = await this.productService.deleteProduct(id);
    return result;
  }
}
