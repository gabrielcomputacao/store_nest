import { OrderEntity } from '../../order/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string;

  @OneToMany( () => OrderEntity, (order) => order.user )
  orders: OrderEntity[]

  constructor(name: string, email: string, senha: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.senha = senha;
  }

  public get getId(): string {
    return this.id;
  }

  public get getName(): string {
    return this.name;
  }

  public get getEmail(): string {
    return this.email;
  }
}
