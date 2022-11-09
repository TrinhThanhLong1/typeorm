import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'title',
    example: 'Welcome to DU18',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    description: 'description',
    example: 'Welcome',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiPropertyOptional({
    description: 'thumbnail',
    example: 'key of thumbnail',
  })
  @IsOptional()
  thumbnail: string;

  @ApiPropertyOptional({
    description: 'tag, keyword',
    example: 'hot',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  tag: string;

  @ApiProperty({
    description: 'Content of post',
    example: '<p>This is content</p>',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: 'slug of post',
    example: 'welcome-to-du18',
  })
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty({
    description: 'id of category',
    example: '1',
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  category_id: number;
}
