import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ParamIdDto } from './dto/query-param.dto';
import { UserConfigDto } from './dto/update-user-config.dto';
import { USERCONFIG_SWAGGER_RESPONSE, USERCONFIG_TYPE } from './user-config.constant';
import { UserConfigService } from './user-config.service';

@Controller({
  version: ['1'],
  path: 'user-configs',
})
@ApiTags('UserConfig')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UserConfigController {
  constructor(private readonly userConfigService: UserConfigService) {}

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id of user',
  })
  @ApiOkResponse(USERCONFIG_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  @ApiBadRequestResponse(USERCONFIG_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  @Patch(':id')
  createConfig(@Param() params: ParamIdDto, @Body() body: UserConfigDto) {
    const { value } = body;
    const data = { value, type: USERCONFIG_TYPE.VIEW };
    return this.userConfigService.userConfig(params, data);
  }
}
