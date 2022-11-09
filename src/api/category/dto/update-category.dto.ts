import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'name',
    example: 'Công nghệ',
  })
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'slug',
    example: 'Cong-nghe',
  })
  @IsOptional()
  slug: string;

  @ApiProperty({
    description: 'name',
    example: 'Công nghệ',
  })
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  description: string;
}
