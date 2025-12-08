import { Column, Entity } from 'typeorm';

@Entity({ name: 'product_features' })
export class ProductFeature {
  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;
}
