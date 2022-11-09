import { DataSource } from 'typeorm';
import { POST_CONST } from './post.constant';
import { PostEntity } from './post.entity';

export const postProvider = [
  {
    provide: POST_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(PostEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
