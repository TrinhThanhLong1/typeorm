import { DataSource } from 'typeorm';
import { USERCONFIG_CONST } from './user-config.constant';
import { UserConfigEntity } from './user-config.entity';

export const UserConfigProvider = [
  {
    provide: USERCONFIG_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(UserConfigEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
