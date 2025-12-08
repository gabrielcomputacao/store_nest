import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbCOnfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ProductModule,
     ConfigModule.forRoot({
      isGlobal: true
     }) ,
    TypeOrmModule.forRootAsync({
      useClass: DbCOnfigService,
      inject: [DbCOnfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
