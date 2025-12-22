import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbCOnfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionCustomFilter } from './filter/ExceptionFilter.filter';
import { CacheModule } from '@nestjs/cache-manager';

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
    OrderModule,
    CacheModule.register({
      isGlobal: true,
      ttl:10000,
    })
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionCustomFilter
    }
  ],
})
export class AppModule {}
