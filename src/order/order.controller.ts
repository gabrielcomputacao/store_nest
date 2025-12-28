import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './dto/order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { AutheticationGuard, type IRequestUserPayload } from 'src/authentication/authentication.guard';

@UseGuards(AutheticationGuard)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // ? Não é muito usual passar o  id do usuario por query param
  @Post()
  async createOrder(
    @Query('userId') userId: string,
    @Body() dataOrder: CreateOrderDto,
  ) {
    const result = await this.orderService.createOrder(userId, dataOrder);
    return result;
  }

  // * Depois de usar o guard vinculado ao controller order , ele retorna o id do usuario então nao precisa passar por query param
  @Post('user')
  async createOderIdUser(
    @Req() req: IRequestUserPayload,
    @Body() dataOrder: CreateOrderDto,
  ) {
    const userId = req.user.sub;
    const result = await this.orderService.createOrder(userId,dataOrder);
    return result

  }

  @Get()
  async getOrder() {
    const result = await this.orderService.getOrders();

    return result;
  }

  @Patch('/:id')
  async updateOrder(@Param('id') id: string, @Body() data: OrderDTO) {
    const result = await this.orderService.updateOrder(id, data);
    return result;
  }

  @Delete('/:id')
  async deleteOrder(@Param('id') id: string) {
    const result = await this.orderService.deleteOrder(id);
    return result;
  }
}
