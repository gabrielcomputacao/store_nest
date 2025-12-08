import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_features' })
export class ProductFeature {

  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;
}
