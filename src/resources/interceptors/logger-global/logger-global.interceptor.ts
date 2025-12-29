import { CallHandler, ConsoleLogger, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerGlobalInterceptor implements NestInterceptor {
  
  constructor(private consoleLogger: ConsoleLogger){}
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const requisition = context.switchToHttp().getRequest();

    
    // next.handle representa o controller
    return next.handle().pipe(
      tap(() =>{
        if('user' in requisition){
          this.consoleLogger.log(`usuario acessou essa rota: ${requisition?.user?.sub}`)
        }
      })
    );
  }
}
