import { Module } from '@nestjs/common';

import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TeamRepository } from './team.repository';
import { DatabaseModule } from '../../configs/database/database.module';
import { TeamProvider } from './team.provider';
import { PostModule } from '../post/post.module';

@Module({
  imports: [DatabaseModule, PostModule],
  controllers: [TeamController],
  providers: [TeamService, TeamRepository, ...TeamProvider],
  exports: [TeamService, TeamRepository],
})
export class TeamModule {}
