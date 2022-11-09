// import { MYSQL_CONFIG } from '../constant.config';
import typeormConfig from '../typeorm.config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => typeormConfig.initialize(),
  },
];
