import * as aws from 'aws-sdk';
import * as btoa from 'btoa';
import { v4 as uuidv4 } from 'uuid';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { AWS_CONFIG, AWS_S3 } from 'src/configs/constant.config';
import { StringUtil } from 'src/share/utils/string.util';
import { ERROR } from 'src/share/common/error-code.const';

aws.config.credentials = {
  accessKeyId: AWS_CONFIG.ACCESS_KEY_ID,
  secretAccessKey: AWS_CONFIG.SECRET_KEY,
};

const CONFIG_UPLOAD = {
  PREFIX: 'uploader',
  MIMETYPE: {
    IMAGE: /^image\/(png|jpg|jpeg|heic|webp|svg\+xml|gif)/i,
    IGNORE_HANDLER: /^image\/(gif)/i,
  },
  IMAGE_EXTENSION_DEFAULT: 'jpg',
  LIMIT_SIZE: 5242880,
};

@Injectable()
export class UploadS3Service {
  async uploadPublicFile(file: Express.Multer.File) {
    const s3 = new aws.S3();

    const isValidMimeType = CONFIG_UPLOAD.MIMETYPE.IMAGE.test(file.mimetype);
    if (!isValidMimeType) {
      throw new HttpException(
        {
          message: ERROR.INVALID_MIME_TYPE.MESSAGE,
          code: ERROR.INVALID_MIME_TYPE.CODE,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const prefix = `${CONFIG_UPLOAD.PREFIX}/${file.fieldname}`;
    const generatePrefix = uuidv4();
    const generateFileName = StringUtil.toUrl(btoa(Date.now().valueOf().toString()), true).toLowerCase();
    const extensionFile = UploadS3Service.getExt(file);
    const keyFileUpload = `${prefix}/${generatePrefix}/${generateFileName}_original${extensionFile}`;
    const uploadResult = await s3
      .upload({
        Bucket: AWS_S3.BUCKET,
        Body: file.buffer,
        Key: keyFileUpload,
        ACL: AWS_S3.ACL,
        CacheControl: AWS_S3.CACHE_CONTROL,
        ContentType: file.mimetype,
      })
      .promise();

    return {
      prefix: prefix,
      key: uploadResult.Key,
      bucket: uploadResult.Bucket,
      originalName: file.originalname,
    };
  }

  private static getExt(file: Express.Multer.File) {
    return CONFIG_UPLOAD.MIMETYPE.IGNORE_HANDLER.test(file.mimetype) === true
      ? `.${CONFIG_UPLOAD.MIMETYPE.IGNORE_HANDLER.exec(file.mimetype)[1]}`
      : `.${CONFIG_UPLOAD.IMAGE_EXTENSION_DEFAULT}`;
  }
}
