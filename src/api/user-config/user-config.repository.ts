import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { Repository } from 'typeorm';
import { USERCONFIG_CONST } from './user-config.constant';
import { UserConfigEntity } from './user-config.entity';

@Injectable()
export class UserConfigRepository extends TypeOrmRepository<UserConfigEntity> {
  constructor(
    @Inject(USERCONFIG_CONST.MODEL_PROVIDER)
    portfolioUserConfig: Repository<UserConfigEntity>,
  ) {
    super(portfolioUserConfig);
  }
}
