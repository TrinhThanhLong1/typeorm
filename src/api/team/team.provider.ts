import { DataSource } from 'typeorm';
import { TEAM_CONST } from './team.constant';
import { TeamEntity } from './team.entity';

export const TeamProvider = [
  {
    provide: TEAM_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(TeamEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
