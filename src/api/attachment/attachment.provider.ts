import { DataSource } from 'typeorm';
import { ATTACHMENT_CONST } from './attachment.constant';
import { AttachmentEntity } from './attachment.entity';

export const attachmentProvider = [
  {
    provide: ATTACHMENT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(AttachmentEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
