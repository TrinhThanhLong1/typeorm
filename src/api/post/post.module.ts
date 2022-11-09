import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../configs/database/database.module';
import { FileUploadService } from '../../share/external-services/s3.service';
import { ConfigAppModule } from '../config/config.module';
import { PostController } from './post.controller';
import { postProvider } from './post.provider';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';

@Module({
  imports: [DatabaseModule, ConfigAppModule],
  providers: [PostService, PostRepository, ...postProvider, FileUploadService],
  exports: [PostService, PostRepository],
  controllers: [PostController],
})
export class PostModule {}
