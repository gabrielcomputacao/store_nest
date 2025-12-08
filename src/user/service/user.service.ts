import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entitys/userEntity.entity";
import { Repository } from "typeorm";
import { ListUserDTO } from "../dto/ListUser.dto";

@Injectable()
export class UserService{

    constructor( 
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
     ){}


    async getListUsers(){

        const listUser = await this.userRepository.find();
        const listUserDTO = listUser.map( user => {
            return new ListUserDTO( user.name, user.id )
        } )

        return listUserDTO;

    }


}