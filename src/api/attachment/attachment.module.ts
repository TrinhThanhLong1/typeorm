import { Module } from '@nestjs/common';

import { AttachmentService } from './attachment.service';
import { AttachmentController } from './attachment.controller';
import { AttachmentRepository } from './attachment.repository';
import { DatabaseModule } from '../../configs/database/database.module';
import { attachmentProvider } from './attachment.provider';
import { UploadModule } from 'src/share/services/upload/upload.module';

@Module({
  imports: [DatabaseModule, UploadModule],
  controllers: [AttachmentController],
  providers: [AttachmentService, AttachmentRepository, ...attachmentProvider],
  exports: [AttachmentService],
})
export class AttachmentModule {}
