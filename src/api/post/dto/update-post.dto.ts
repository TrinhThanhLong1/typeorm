import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePostDto {
  @ApiPropertyOptional({
    description: 'title',
    example: 'Welcome to DU18',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiPropertyOptional({
    description: 'description',
    example: 'Welcome',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional({
    description: 'thumbnail',
    example: 'thumbnail of post',
  })
  @IsOptional()
  @IsString()
  thumbnail: string;

  @ApiPropertyOptional({
    description: 'tag, keyword',
    example: 'hot',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  tag: string;

  @ApiPropertyOptional({
    description: 'Content of post',
    example: '<p>This is content</p>',
  })
  @IsOptional()
  @IsString()
  content: string;

  @ApiPropertyOptional({
    description: 'slug of post',
    example: 'welcome-to-du18',
  })
  @IsOptional()
  @IsString()
  slug: string;

  @ApiPropertyOptional({
    description: 'id of category',
    example: '1',
  })
  @IsOptional()
  @IsNumberString()
  category_id: string;
}
