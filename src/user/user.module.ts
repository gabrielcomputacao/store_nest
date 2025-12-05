import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserRepository } from "./user.repository";
import { SingleEmailValidator } from "./validators/singleEmail";

@Module({
    controllers: [UserController],
    providers: [ UserRepository,SingleEmailValidator]
})
export class UserModule {

}