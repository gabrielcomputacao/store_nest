import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { UserEntity } from '../user/entitys/userEntity.entity';

@Module({
  // * Precisa falar para o nest que essar classes sao do tipo repository do typeorm
  imports: [TypeOrmModule.forFeature( [OrderEntity, UserEntity] )],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
