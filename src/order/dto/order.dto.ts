import { UserEntity } from 'src/user/entitys/userEntity.entity';
import { StatusOrder } from '../enum/statusOrder.enum';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { ItemOrderEntity } from '../itemOrder.entity';

export class OrderDTO {

  @IsNotEmpty()
  totalValue: number;
  @IsNotEmpty()
  status: StatusOrder;

  @IsOptional()
  user: UserEntity;

  @IsNotEmpty()
  itemOrder: ItemOrderEntity[];

}
