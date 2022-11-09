import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

enum View {
  phone = 'phone',
  birthday = 'birthday',
}

export class UserConfigDto {
  @IsNotEmpty()
  @IsString({ each: true })
  @ApiProperty({
    description: 'value',
    example: ['phone', 'birthday'],
  })
  @IsOptional()
  @IsArray()
  @IsEnum(View, { each: true })
  value: View[];
}
