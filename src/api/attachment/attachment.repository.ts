import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { Repository } from 'typeorm';
import { ATTACHMENT_CONST } from './attachment.constant';
import { AttachmentEntity } from './attachment.entity';

@Injectable()
export class AttachmentRepository extends TypeOrmRepository<AttachmentEntity> {
  constructor(
    @Inject(ATTACHMENT_CONST.MODEL_PROVIDER)
    attachmentEntity: Repository<AttachmentEntity>,
  ) {
    super(attachmentEntity);
  }
}
