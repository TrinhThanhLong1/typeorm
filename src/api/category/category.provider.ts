import { DataSource } from 'typeorm';
import { CATEGORY_CONST } from './category.constant';
import { CategoryEntity } from './category.entity';

export const categoryProvider = [
  {
    provide: CATEGORY_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(CategoryEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
