import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { Repository } from 'typeorm';
import { TEAM_CONST } from './team.constant';
import { TeamEntity } from './team.entity';

@Injectable()
export class TeamRepository extends TypeOrmRepository<TeamEntity> {
  constructor(
    @Inject(TEAM_CONST.MODEL_PROVIDER)
    portfolioTeam: Repository<TeamEntity>,
  ) {
    super(portfolioTeam);
  }
}
