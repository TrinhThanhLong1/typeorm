import { Column, Entity } from 'typeorm';
import { ATTACHMENT_TYPE, ATTACHMENT_CONST } from './attachment.constant';
import { BaseEntity } from '../../share/database/base.entity';

@Entity({ name: ATTACHMENT_CONST.MODEL_NAME })
export class AttachmentEntity extends BaseEntity {
  @Column({ length: 255, default: null })
  original_name: string;

  @Column({ length: 255, default: null })
  key: string;

  @Column({ length: 255, default: ATTACHMENT_TYPE.OTHER })
  type: string;

  @Column({ type: 'bigint', default: null })
  author: string;
}
