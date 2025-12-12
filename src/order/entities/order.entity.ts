import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {  StatusOrder} from '../enum/statusOrder.enum'
import { UserEntity } from '../../user/entitys/userEntity.entity';


@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'total_value',  nullable: false })
  totalValue: number;

  @Column({ name: 'status', enum: StatusOrder, nullable: false })
  status: StatusOrder;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne( () => UserEntity, (user) => user.orders )
  user: UserEntity
  
}

