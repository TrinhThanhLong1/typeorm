import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { FileUploadService } from '../../share/external-services/s3.service';
import { PostModule } from '../post/post.module';
import { PostService } from '../post/post.service';
import { ConfigController } from './config.controller';
import { configProvider } from './config.provider';
import { ConfigRepository } from './config.repository';
import { ConfigAppService } from './config.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => PostModule)],
  providers: [ConfigAppService, ConfigRepository, ...configProvider, PostService, FileUploadService],
  exports: [ConfigRepository, ConfigAppService],
  controllers: [ConfigController],
})
export class ConfigAppModule {}
