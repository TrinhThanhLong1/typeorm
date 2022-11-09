import { Injectable } from '@nestjs/common';
import { UploadS3Service } from 'src/share/services/upload/upload-s3.service';
import { Not } from 'typeorm';
import { ATTACHMENT_TYPE } from './attachment.constant';
import { IAttachment } from './attachment.interface';

import { AttachmentRepository } from './attachment.repository';
import { QueryParamDto } from './dto/query-param.dto';

@Injectable()
export class AttachmentService {
  constructor(
    private readonly attachmentRepository: AttachmentRepository,
    private readonly uploadS3Service: UploadS3Service,
  ) {}

  async uploadAttachment(file: Express.Multer.File, userId: number, type: string) {
    const fileUploaded = await this.uploadS3Service.uploadPublicFile(file);
    const attachmentData: IAttachment = {
      key: fileUploaded.key,
      author: userId,
      original_name: file.originalname,
      type: type,
    };

    return this.attachmentRepository.save(attachmentData);
  }

  async getList(query: QueryParamDto) {
    const condition = {};
    if (query.key) {
      condition['key'] = query.key;
    }
    if (query.original_name) {
      condition['original_name'] = query.original_name;
    }
    if (query.author) {
      condition['author'] = query.author;
    }
    if (query.type) {
      condition['type'] = query.type;
    } else {
      condition['type'] = Not(ATTACHMENT_TYPE.AVATAR);
    }
    return this.attachmentRepository.findAllByConditions(condition, query);
  }
}
