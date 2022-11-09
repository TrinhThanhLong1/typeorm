import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { DatabaseModule } from '../../configs/database/database.module';
import { userProvider } from './user.provider';
import { UserController } from './user.controller';
import { FileUploadService } from '../../share/external-services/s3.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, UserRepository, ...userProvider, FileUploadService],
  exports: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
