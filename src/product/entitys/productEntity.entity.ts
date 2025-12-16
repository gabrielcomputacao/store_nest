import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FeatureDTO } from '../dto/feature.dto';
import { ProductFeature } from './productFeature.entity';
import { ItemOrderEntity } from '../../order/itemOrder.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'value', nullable: false })
  value: number;

  @Column({ name: 'description', nullable: true, length: 255 })
  description: string;

  @OneToMany(() => ProductFeature, (productFeatureEntity) => 
  productFeatureEntity.product, { cascade: true, eager: true }
  )
  feature: ProductFeature[]

  @OneToMany( () => ItemOrderEntity, (item) =>  item.product , {eager: true})
  itemsOrder: ItemOrderEntity[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt:string

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string

  public set setId(v: string) {
    this.id = v;
  }

  public get getId(): string {
    return this.id;
  }
}
