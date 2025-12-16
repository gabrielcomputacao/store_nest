import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { ProductEntity } from '../product/entitys/productEntity.entity';

@Entity({ name: 'item_order' })
export class ItemOrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'quantity', nullable: false })
  quantity: number;

  @Column({ name: 'price', nullable: false })
  price: number;

  @ManyToOne(() => OrderEntity, (order) => order.itemOrder, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  order: OrderEntity;

  @ManyToOne( () => ProductEntity, (produto) => produto.itemsOrder , {
    cascade: ['update']
  }  )
  product: ProductEntity;
}
