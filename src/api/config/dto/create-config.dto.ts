import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumberString, MaxLength } from 'class-validator';

export class CreateConfigDto {
  @ApiProperty({
    description: 'value',
    example: '1',
  })
  @IsNumberString()
  @MaxLength(50)
  value: string;
}

export class UpdateConfigDto {
  @ApiProperty({
    description: 'value',
    example: [1, 2],
  })
  @IsArray()
  value: number[];
}
