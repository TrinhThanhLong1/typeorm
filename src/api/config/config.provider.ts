import { DataSource } from 'typeorm';
import { CONFIG_CONST } from './config.constant';
import { ConfigEntity } from './config.entity';

export const configProvider = [
  {
    provide: CONFIG_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(ConfigEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
