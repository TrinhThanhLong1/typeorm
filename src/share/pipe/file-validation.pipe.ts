import { PipeTransform, Injectable, ArgumentMetadata, BadGatewayException } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      return null;
    }
    const fileSize = 5 * 1024 * 1024;
    if (value.size <= fileSize) {
      return value;
    } else {
      throw new BadGatewayException('File size too large. Please enter a file under 5MB');
    }
  }
}
