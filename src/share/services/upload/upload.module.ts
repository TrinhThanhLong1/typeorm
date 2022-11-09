import { Module } from '@nestjs/common';
import { UploadS3Service } from './upload-s3.service';

@Module({
  providers: [UploadS3Service],
  exports: [UploadS3Service],
})
export class UploadModule {}
