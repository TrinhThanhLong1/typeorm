import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../share/database/base.entity';
import { UserEntity } from '../user/user.entity';
import { USERCONFIG_CONST } from './user-config.constant';
@Entity({ name: USERCONFIG_CONST.MODEL_NAME })
export class UserConfigEntity extends BaseEntity {
  @Column({ nullable: false })
  user_id: number;

  @Column({ length: 255, nullable: false })
  type: string;

  @Column({ length: 255, nullable: true })
  value: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
