import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CommonLogger } from '../services/logger/common-logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new CommonLogger('REQUEST');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl } = request;

    const { statusCode } = response;

    this.logger.customInfo(
      `${method} ${originalUrl} ${statusCode} - BODY: ${JSON.stringify(request.body)} - PARAM: ${JSON.stringify(
        request.params,
      )}`,
    );

    next();
  }
}
