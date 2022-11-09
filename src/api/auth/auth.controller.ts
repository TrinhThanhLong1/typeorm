import { Body, Controller, HttpCode, Post, UnauthorizedException } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AUTH_SWAGGER_RESPONSE } from './auth.constant';

@ApiTags('Authentication')
@Controller({
  version: ['1'],
  path: 'auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse(AUTH_SWAGGER_RESPONSE.LOGIN_SUCCESS)
  @ApiNotFoundResponse(AUTH_SWAGGER_RESPONSE.LOGIN_FAIL)
  @ApiUnauthorizedResponse(AUTH_SWAGGER_RESPONSE.UNAUTHORIZED_EXCEPTION)
  @Post('login')
  @HttpCode(200)
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
