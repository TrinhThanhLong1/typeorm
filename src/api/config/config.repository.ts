import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { ConfigEntity } from './config.entity';
import { CONFIG_CONST } from './config.constant';

@Injectable()
export class ConfigRepository extends TypeOrmRepository<ConfigEntity> {
  constructor(
    @Inject(CONFIG_CONST.MODEL_PROVIDER)
    configEntity: Repository<ConfigEntity>,
  ) {
    super(configEntity);
  }
}
