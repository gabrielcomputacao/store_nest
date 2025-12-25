import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserRepository } from "./user.repository";
import { SingleEmailValidator } from "./validators/singleEmail";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entitys/userEntity.entity";
import { UserService } from "./service/user.service";

@Module({
    imports: [ TypeOrmModule.forFeature([UserEntity]) ],
    controllers: [UserController],
    providers: [ UserRepository,SingleEmailValidator, UserService],
    exports: [UserService],
})
export class UserModule {

}