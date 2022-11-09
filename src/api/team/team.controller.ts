import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateTeamDto } from './dto/create-team.dto';
import { ParamIdDto } from './dto/query-param.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TEAM_SWAGGER_RESPONSE } from './team.constant';
import { TeamService } from './team.service';

@Controller({
  version: ['1'],
  path: 'teams',
})
@ApiTags('Teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOkResponse(TEAM_SWAGGER_RESPONSE.CREATE_SUCCESS)
  @ApiBadRequestResponse(TEAM_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public createCategory(@Body() body: CreateTeamDto) {
    const { name } = body;
    const data = { name };
    return this.teamService.createTeam(data);
  }

  @Get()
  @ApiOkResponse(TEAM_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  @ApiBadRequestResponse(TEAM_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public getList() {
    return this.teamService.getList();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiOkResponse(TEAM_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  @ApiBadRequestResponse(TEAM_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public updateCategory(@Param() param: ParamIdDto, @Body() body: UpdateTeamDto) {
    const { name } = body;
    const data = { name };
    return this.teamService.updateTeam(param.id, data);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiOkResponse(TEAM_SWAGGER_RESPONSE.DELETE_SUCCESS)
  @ApiBadRequestResponse(TEAM_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public deleteCategory(@Param() param: ParamIdDto) {
    return this.teamService.deleteTeam(param.id);
  }
}
