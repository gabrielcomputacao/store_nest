export class UserEntity {
  constructor(private name: string, private email: string, private senha: string) {
    this.id = '123123';
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
