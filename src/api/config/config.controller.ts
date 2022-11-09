import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CONFIG_SWAGGER_RESPONSE } from './config.constant';
import { ConfigAppService } from './config.service';
import { CreateConfigDto, UpdateConfigDto } from './dto/create-config.dto';

@Controller({
  version: ['1'],
  path: 'highlights',
})
@ApiTags('Config')
@ApiBearerAuth()
export class ConfigController {
  constructor(private readonly configService: ConfigAppService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOkResponse(CONFIG_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  async create(@Body() body: CreateConfigDto) {
    return this.configService.create(body);
  }

  @Get()
  @ApiOkResponse(CONFIG_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  async getList() {
    return this.configService.getListPostHighligh();
  }

  @UseGuards(JwtAuthGuard)
  @Get('posts')
  @ApiOkResponse(CONFIG_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  async getListPost() {
    return this.configService.findPostNotInHighligh();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('change-position')
  @ApiOkResponse(CONFIG_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  async updateHighlight(@Body() data: UpdateConfigDto) {
    return this.configService.configHighlight(data);
  }
}
