import { Type } from 'class-transformer';
import { ValidateNested, IsArray, ArrayMinSize, IsInt } from 'class-validator';

class ItemPedidoDTO {
  @IsInt()
  quantidade: number;
}

export class CreateOrderDto {
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ItemPedidoDTO)
  itensPedido: ItemPedidoDTO[];
}
