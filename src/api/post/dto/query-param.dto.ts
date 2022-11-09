import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNotEmpty, IsEnum, IsNumberString } from 'class-validator';

export class QueryParamPostDto {
  @ApiPropertyOptional()
  @IsOptional()
  page: number;

  @ApiPropertyOptional()
  @IsOptional()
  pageSize: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  sortBy: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @IsEnum(['desc', 'asc'])
  sortOrder: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  search: string;

  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  @IsEnum(['1', '0'])
  status: string;

  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  category: string;
}

export class ParamIdDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
