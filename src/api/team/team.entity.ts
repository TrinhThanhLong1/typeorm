import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

import { BaseEntity } from '../../share/database/base.entity';
import { UserEntity } from '../user/user.entity';
import { TEAM_CONST } from './team.constant';
@Entity({ name: TEAM_CONST.MODEL_NAME })
export class TeamEntity extends BaseEntity {
  @Column({ length: 255, nullable: false, unique: true })
  name: string;

  @OneToMany(() => UserEntity, (userEntity) => userEntity.team)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity[];
}
