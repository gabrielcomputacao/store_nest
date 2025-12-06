import { FeatureDTO } from '../dto/feature.dto';

export class ProductEntity {
  private id: string;

  name: string;

  value: number;

  description: string;

  feature: FeatureDTO;

    
    public set setId(v : string) {
        this.id = v;
    }
    
    
    public get getId() : string {
        return this.id;
    }
    
}
