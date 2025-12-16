import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entitys/userEntity.entity';
import { StatusOrder } from './enum/statusOrder.enum';
import { OrderDTO } from './dto/order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { ItemOrderEntity } from './itemOrder.entity';

@Injectable()
export class OrderService {
  // * O construtor fica responsavel por injetar a classe repository, onde teria os dados do banco de dados ligados por meio do typeorm
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createOrder(userId: string, dataOrder: CreateOrderDto) {
    const user = await this.userRepository.findOneBy({ id: userId });

    const order = new OrderEntity();

    order.status = StatusOrder.EM_PROCESSAMENTO;
    if (user) {
      order.user = user;
    }

    const itemsOrderEntitys = dataOrder.itensPedido.map((order) => {
      const itemEntity = new ItemOrderEntity();

      itemEntity.price = 10;
      itemEntity.quantity = order.quantidade;
      return itemEntity;
    });

    const totalValue = itemsOrderEntitys.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    order.itemOrder = itemsOrderEntitys;
    order.totalValue = totalValue;

    const createdOrder = await this.orderRepository.save(order);
    return createdOrder;
  }

  async getOrders() {
    const orders = await this.orderRepository.find();

    const ordersDto = orders.map((order) => {
      const newOrder = new OrderDTO();
      newOrder.status = order.status;
      newOrder.totalValue = order.totalValue;
      newOrder.user = order.user;

      newOrder.itemOrder = order.itemOrder;

      return newOrder;
    });

    return ordersDto;
  }

  async updateOrder(id: string, data: OrderDTO) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: {
        user: true,
      },
    });

    if (!order) {
      throw new Error('Pedido nao encontrado');
    }

    order.status = data.status;
    order.totalValue = data.totalValue;

    await this.orderRepository.save(order);
  }

  async deleteOrder(id: string) {
    const result = await this.orderRepository.delete(id);
    return result;
  }
}
