import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { POST_CONST } from './post.constant';
import { PostEntity } from './post.entity';

@Injectable()
export class PostRepository extends TypeOrmRepository<PostEntity> {
  constructor(
    @Inject(POST_CONST.MODEL_PROVIDER)
    postEntity: Repository<PostEntity>,
  ) {
    super(postEntity);
  }
}
