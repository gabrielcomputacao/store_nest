export class UserEntity {
  constructor(name: string, email: string, senha: string) {
    this.name = name;
    this.email = email;
    this.senha = senha;
    this.id = '123123';
  }

  id: string;
  name: string;
  email: string;
  senha: string;
}
