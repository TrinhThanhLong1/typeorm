import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendMailService } from './ses.service';

@Module({
  imports: [ConfigModule.forRoot()],
  exports: [SendMailService],
  providers: [SendMailService],
})
export class ExternalServicesModule {}
