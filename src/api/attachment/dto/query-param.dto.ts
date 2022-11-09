import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNotEmpty, IsEnum, IsNumberString } from 'class-validator';

enum Type {
  CONTENT = 'content',
  THUMBNAIL = 'thumbnail',
  OTHER = 'other',
}

export class QueryParamDto {
  @ApiPropertyOptional()
  @IsOptional()
  page: number;

  @ApiPropertyOptional()
  @IsOptional()
  pageSize: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sortBy: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @IsEnum(['desc', 'asc'])
  sortOrder: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  author: number;

  @ApiPropertyOptional()
  @IsOptional()
  original_name: string;

  @ApiPropertyOptional()
  @IsOptional()
  key: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsEnum(Type, { message: 'Type in this api  not include  avatar' })
  type: Type;
}

export class ParamIdDto {
  @IsNotEmpty()
  @IsNumberString()
  id: string;
}
