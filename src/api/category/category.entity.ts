import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

import { BaseEntity } from '../../share/database/base.entity';
import { PostEntity } from '../post/post.entity';
import { CategoryStatus, CATEGORY_CONST } from './category.constant';
@Entity({ name: CATEGORY_CONST.MODEL_NAME })
export class CategoryEntity extends BaseEntity {
  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 50, nullable: false })
  slug: string;

  @Column({ length: 50, nullable: false })
  description: string;

  @Column({ type: 'enum', enum: CategoryStatus, default: CategoryStatus.ACTIVE })
  status: number;

  @OneToMany(() => PostEntity, (postEntity) => postEntity.category)
  @JoinColumn({ name: 'post_id' })
  post: PostEntity[];
}
