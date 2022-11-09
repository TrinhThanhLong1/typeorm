import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTeamDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'name',
    example: 'string',
  })
  @IsOptional()
  name: string;
}
