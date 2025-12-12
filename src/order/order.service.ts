import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entitys/userEntity.entity';
import { StatusOrder } from './enum/statusOrder.enum';

@Injectable()
export class OrderService {
  // * O construtor fica responsavel por injetar a classe repository, onde teria os dados do banco de dados ligados por meio do typeorm
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createOrder(userId: string) {
    const user = await this.userRepository.findOneBy({ id: userId });
    const order = new OrderEntity();

    order.totalValue = 0;
    order.status = StatusOrder.EM_PROCESSAMENTO;
    if (user) {
      order.user = user;
    }

    const createdOrder = await this.orderRepository.save(order);
    return createdOrder;
  }
}
