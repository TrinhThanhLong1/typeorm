import { Column, Entity } from 'typeorm';
import { CONFIG_CONST } from './config.constant';
import { BaseEntity } from '../../share/database/base.entity';

@Entity({ name: CONFIG_CONST.MODEL_NAME })
export class ConfigEntity extends BaseEntity {
  @Column({ length: 255, nullable: false })
  key: string;

  @Column({ length: 255, nullable: false })
  type_value: string;

  @Column({ length: 255 })
  value: string;
}
