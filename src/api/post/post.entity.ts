import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../share/database/base.entity';
import { CategoryEntity } from '../category/category.entity';
import { UserEntity } from '../user/user.entity';
import { PostStatus, POST_CONST } from './post.constant';
@Entity({ name: POST_CONST.MODEL_NAME })
export class PostEntity extends BaseEntity {
  @Column({ length: 255, nullable: false })
  title: string;

  @Column({ length: 255, nullable: false })
  slug: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ length: 100, nullable: true })
  thumbnail: string;

  @Column({ length: 50, default: null })
  tag: string;

  @Column({ type: 'mediumtext', nullable: false })
  content: string;

  @Column({ type: 'int', default: PostStatus.ACTIVE })
  status: number;

  @Column({ type: 'int', default: 0, nullable: false })
  view: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author' })
  user: UserEntity;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
