import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
  ConsoleLogger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class ExceptionCustomFilter implements ExceptionFilter {

  constructor(private adapterHost: HttpAdapterHost,
    private consoleLogger: ConsoleLogger
  ){}


  catch(exception: unknown, host: ArgumentsHost) {

    this.consoleLogger.error(exception);
    console.error(exception)


// * Adapta o orquestrador de rotas seja express ou outro , para nao quebrar caso mude no futuro
    const { httpAdapter } = this.adapterHost;

    const response =  host.switchToHttp().getResponse();
    const requisition = host.switchToHttp().getRequest();

    if('user' in requisition){
      this.consoleLogger.log(`usuario tentando acessar a rota ${requisition?.user?.sub}`)
    }


    const { status, body } =
      exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            body: exception.getResponse(),
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
              timestamp: new Date().toISOString(),
              path: httpAdapter.getRequestUrl(requisition),
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            },
          };

    httpAdapter.reply(response, body, status)
  }
}
