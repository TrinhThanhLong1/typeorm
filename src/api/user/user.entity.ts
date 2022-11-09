import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { UserGender, UserPosition, UserStatus, UserTypes, USER_CONST } from './user.constant';
import { BaseEntity } from '../../share/database/base.entity';
import { RoleEntity } from '../roles/entities/role.entity';
import { PostEntity } from '../post/post.entity';
import { UserConfigEntity } from '../user-config/user-config.entity';
import { TeamEntity } from '../team/team.entity';
@Entity({ name: USER_CONST.MODEL_NAME })
export class UserEntity extends BaseEntity {
  @Column({ length: 255, default: null })
  last_name: string;

  @Column({ length: 255, default: null })
  first_name: string;

  @Column({ length: 10, unique: true })
  sid: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 100 })
  @Exclude()
  password: string;

  @Column({ length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'int', default: UserTypes.USER })
  type: number;

  @Column({ type: 'int', default: UserGender.MALE })
  gender: number;

  @Column({ length: 255, default: UserPosition.Dev })
  position: string;

  @Column({ length: 50, nullable: true })
  birthday: string;

  @Column({ default: false })
  is_administrator: boolean;

  @Column({ type: 'int', default: UserStatus.ACTIVE })
  status: number;

  @Column({ type: 'bigint', nullable: true })
  created_by: number;

  @Column({ length: 15, nullable: true })
  phone: string;

  @Column({ length: 50, nullable: true })
  start_date: string;

  @Column({ length: 50, nullable: true })
  expired_date: string;

  @Column({ type: 'datetime', nullable: true })
  last_login: Date;

  @ManyToOne(() => RoleEntity)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToMany(() => PostEntity, (postEntity) => postEntity.id)
  @JoinColumn({ name: 'post_id' })
  post: PostEntity[];

  @OneToMany(() => UserConfigEntity, (userConfigEntity) => userConfigEntity.user)
  @JoinColumn({ name: 'user_config_id' })
  userConfigEntity: UserConfigEntity[];

  @Column({ type: 'int', nullable: true, default: 4 })
  level: number;

  @ManyToOne(() => TeamEntity, (teamEntity) => teamEntity.user)
  @JoinColumn({ name: 'team_id' })
  team: TeamEntity;
}
