import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'name',
    example: 'Công nghệ',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'name',
    example: 'cong-nghe',
  })
  @IsNotEmpty()
  @IsString()
  slug: string;
  @ApiProperty({
    description: 'name',
    example: 'Công nghệ',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
