import { v4 as uuid } from 'uuid'

export class UserEntity {
  constructor(public name: string, public email: string, public senha: string) {
    this.id = uuid();
    this.name = name;
    this.email= email;
    this.senha = senha;
  }

  private id: string;

  
  public get getId() : string {
    return this.id;
  }
  
  
  public get getName() : string {
    return this.name;
  }
  
  
  public get getEmail() : string {
    return this.email;
  }
  

}
