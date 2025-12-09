import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './productEntity.entity';

@Entity({ name: 'product_features' })
export class ProductFeature {

  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  // * orphanedRowAction = Quando essa coluna nao tiver relação com nada, quando ela for orfâ, ela será deletada
  @ManyToOne( () => ProductEntity, (product) => product.feature, { orphanedRowAction: 'delete' ,onDelete: 'CASCADE', onUpdate: 'CASCADE' } )
  product: ProductEntity
}
