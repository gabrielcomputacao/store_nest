import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Query('userId') userId: string) {
    const result = await this.orderService.createOrder(userId);
    return result;
  }

  @Get()
  async getOrder() {
    const result = await this.orderService.getOrders();

    return result;
  }

  @Patch('/:id')
  async updateOrder(@Param('id') id: string, @Body() data: OrderDTO){

    const result = await this.orderService.updateOrder(id, data) 
    return result;

  }

  @Delete('/:id')
  async deleteOrder(@Param('id') id: string){

    const result = await this.orderService.deleteOrder(id)
    return result
  }


}
