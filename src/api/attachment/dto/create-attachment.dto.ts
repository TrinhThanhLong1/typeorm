import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAttachmentDto {
  @ApiProperty({
    description: 'type',
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({
    description: 'attachment',
    type: 'string',
    format: 'binary',
  })
  attachment: any;
}

export class CreateAvatarDto {
  @ApiProperty({
    description: 'avatar',
    type: 'string',
    format: 'binary',
  })
  attachment: any;
}
