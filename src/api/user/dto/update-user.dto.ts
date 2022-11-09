import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class ChangeUserPasswordDto {
  @ApiProperty({
    description: 'old password',
    example: '12345a',
  })
  @IsNotEmpty()
  @IsString()
  oldPassword: string;

  @ApiProperty({
    description: 'new password',
    example: '12345ab',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  newPassword: string;

  @ApiProperty({
    description: 'confirm password',
    example: '12345ab',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  confirmPassword: string;
}

export class UpdateInforUser {
  @ApiPropertyOptional({
    description: 'first_name',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  first_name: string;

  @ApiPropertyOptional({
    description: 'last_name',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  last_name: string;

  @ApiPropertyOptional({
    description: 'phone',
  })
  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @ApiPropertyOptional({
    description: 'start_date',
  })
  @IsOptional()
  @IsString()
  start_date: string;

  @ApiPropertyOptional({
    description: 'gender',
  })
  @IsOptional()
  gender: number;

  @ApiPropertyOptional({
    description: 'birthday',
  })
  @IsOptional()
  @IsString()
  birthday: string;
  @ApiPropertyOptional({
    description: 'avatar',
    example: 'avatar of user',
  })
  @IsOptional()
  avatar: string;
}

export class UpdateUser {
  @ApiPropertyOptional({
    description: 'first_name',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  first_name: string;

  @ApiPropertyOptional({
    description: 'last_name',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  last_name: string;

  @ApiPropertyOptional({
    description: 'type',
  })
  @IsEnum(['1', '2'])
  @IsNumberString()
  @IsOptional()
  type: number;

  @ApiPropertyOptional({
    description: 'gender',
  })
  @IsEnum(['1', '2'])
  @IsOptional()
  @IsNumberString()
  gender: number;

  @ApiPropertyOptional({
    description: 'status',
  })
  @IsEnum(['0', '1'])
  @IsNumberString()
  @IsOptional()
  status: number;

  @ApiPropertyOptional({
    description: 'position',
  })
  @IsString()
  @IsOptional()
  @IsString()
  position: string;

  @ApiPropertyOptional({
    description: 'phone',
  })
  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @ApiPropertyOptional({
    description: 'start_date',
  })
  @IsOptional()
  @IsString()
  start_date: string;

  @ApiPropertyOptional({
    description: 'birthday',
  })
  @IsOptional()
  @IsString()
  birthday: string;

  @ApiPropertyOptional({
    description: 'level',
  })
  @IsNumberString()
  @IsOptional()
  level: number;

  @ApiPropertyOptional({
    description: 'team_id',
  })
  @IsNumberString()
  @IsOptional()
  team_id: number;

  @ApiPropertyOptional({
    description: 'avatar',
    example: 'avatar of user',
  })
  @IsOptional()
  avatar: string;
}
