import { ClassSerializerInterceptor, ConsoleLogger, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbCOnfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionCustomFilter } from './filter/ExceptionFilter.filter';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoggerGlobalInterceptor } from './resources/interceptors/logger-global/logger-global.interceptor';

@Module({
  imports: [
    UserModule,
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DbCOnfigService,
      inject: [DbCOnfigService],
    }),
    OrderModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
          ttl: 10 * 1000
        }),
      }),
    }),
    AuthenticationModule,
  ],
  controllers: [],
  providers: [
    // filter para cair no catch global
    {
      provide: APP_FILTER,
      useClass: ExceptionCustomFilter,
    },
    // interceptor para conseguir usar o exclude , include dentro das entitys
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    // Interceptor para usar o interceptor global de logs
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerGlobalInterceptor,
    },
    // Logger nativo
    ConsoleLogger,
  ],
})
export class AppModule { }
