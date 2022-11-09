import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'email',
    example: 'bach.nguyen@vmodev.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'password',
    example: '12345678',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  password: string;
}
