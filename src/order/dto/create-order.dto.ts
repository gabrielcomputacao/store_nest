import { Type } from 'class-transformer';
import { ValidateNested, IsArray, ArrayMinSize, IsInt, IsString, IsUUID } from 'class-validator';

class ItemPedidoDTO {
  @IsInt()
  quantidade: number;
  @IsUUID()
  productId: string;
}

export class CreateOrderDto {
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ItemPedidoDTO)
  itensPedido: ItemPedidoDTO[];
}
