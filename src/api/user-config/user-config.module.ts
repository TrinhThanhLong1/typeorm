import { Module } from '@nestjs/common';

import { UserConfigService } from './user-config.service';
import { UserConfigController } from './user-config.controller';
import { UserConfigRepository } from './user-config.repository';
import { DatabaseModule } from '../../configs/database/database.module';
import { UserConfigProvider } from './user-config.provider';
import { PostModule } from '../post/post.module';

@Module({
  imports: [DatabaseModule, PostModule],
  controllers: [UserConfigController],
  providers: [UserConfigService, UserConfigRepository, ...UserConfigProvider],
  exports: [UserConfigService, UserConfigRepository],
})
export class UserConfigModule {}
