import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateInternaleUserDto {
  @ApiProperty({
    description: 'last_name',
    example: 'Trinh',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  last_name: string;

  @ApiProperty({
    description: 'first_name',
    example: 'long',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  first_name: string;

  @ApiProperty({
    description: 'email',
    example: 'trinhthanhlong2842000@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiPropertyOptional({
    description: 'birthday',
    example: '28/04/2000',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  birthday: string;

  @ApiPropertyOptional({
    description: 'start_date',
    example: '28/04/2020',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  start_date: string;

  @ApiPropertyOptional({
    description: 'phone',
    example: '+84 123456789',
  })
  @IsOptional()
  @IsPhoneNumber('VI')
  phone: string;

  @ApiPropertyOptional({
    description: 'type',
    example: 1,
  })
  @IsEnum([1, 2])
  @IsOptional()
  type: number;

  @ApiPropertyOptional({
    description: 'gender',
    example: 1,
  })
  @IsEnum([1, 2])
  @IsOptional()
  gender: number;

  @ApiPropertyOptional({
    description: 'position',
    example: 'dev',
  })
  @IsString()
  @IsOptional()
  position: string;

  @ApiPropertyOptional({
    description: 'level',
    example: 1,
  })
  @IsEnum([1, 2, 3, 4])
  @IsOptional()
  level: number;

  @ApiProperty({
    description: 'id of team',
    example: '1',
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  team_id: number;
}

export class CreateUserDtoBatch {
  @ApiProperty({
    description: 'name',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'email',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'password',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  password: string;

  @ApiPropertyOptional({
    description: 'created_by',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  created_by: string;

  @ApiPropertyOptional({
    description: 'expired_at',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  expired_at: string;

  @ApiPropertyOptional({
    description: 'country',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  country: string;

  @ApiPropertyOptional({
    description: 'city',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  city: string;

  @ApiPropertyOptional({
    description: 'postalCode',
  })
  @IsOptional()
  @IsInt()
  postalCode: number;

  @ApiPropertyOptional({
    description: 'phone',
  })
  @IsOptional()
  @IsPhoneNumber()
  phone: string;
}

export class CreateMultilpleUsersDto {
  @ApiProperty({
    description: 'users',
    type: [CreateUserDtoBatch],
  })
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  users: CreateUserDtoBatch[];
}
