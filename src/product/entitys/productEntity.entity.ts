import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FeatureDTO } from '../dto/feature.dto';

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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt:string

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string

  //   feature: FeatureDTO;

  public set setId(v: string) {
    this.id = v;
  }

  public get getId(): string {
    return this.id;
  }
}
