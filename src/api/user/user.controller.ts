import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  Patch,
  UseInterceptors,
  Post,
  UseGuards,
  Param,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiBadRequestResponse,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { GetUser } from '../../share/decorator/get-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ChangeUserPasswordDto, UpdateInforUser, UpdateUser } from './dto/update-user.dto';
import { ParamIdDto, QueryParamDto } from './dto/query-param.dto';
import { UserTypes, USER_SWAGGER_RESPONSE } from './user.constant';
import { UserService } from './user.service';
import { CreateInternaleUserDto } from './dto/create-user.dto';

@Controller({
  version: ['1'],
  path: 'users',
})
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('change-password')
  @ApiOkResponse(USER_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  @ApiBadRequestResponse(USER_SWAGGER_RESPONSE.BAD_REQUEST_WRONG_PASSWORD)
  @ApiNotFoundResponse(USER_SWAGGER_RESPONSE.NOT_FOUND_EXCEPTION)
  changePassword(@GetUser() user, @Body() changeUserPasswordDto: ChangeUserPasswordDto) {
    return this.userService.changePassword(user?.sub, changeUserPasswordDto);
  }

  @Get('')
  @ApiOkResponse(USER_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  @ApiBadRequestResponse(USER_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  getListUser(@Query() query: QueryParamDto) {
    return this.userService.getListUser(query);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('')
  @ApiBody({
    description: 'List update infor user',
    type: UpdateInforUser,
  })
  @ApiOkResponse(USER_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  @ApiNotFoundResponse(USER_SWAGGER_RESPONSE.NOT_FOUND_EXCEPTION)
  updateInforUser(@GetUser() user, @Body() updateInforUser: UpdateInforUser) {
    const id = user?.sub;
    return this.userService.updateUserInfor(id, updateInforUser);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOkResponse(USER_SWAGGER_RESPONSE.CREATE_SUCCESS)
  @ApiBadRequestResponse()
  public createUser(@Body() body: CreateInternaleUserDto) {
    const { last_name, first_name, email, birthday, start_date, phone, type, gender, position, level, team_id } = body;
    let is_administrator = false;
    if (type === UserTypes.ADMIN) {
      is_administrator = true;
    }
    const data = {
      last_name,
      first_name,
      email,
      birthday,
      start_date,
      phone,
      type,
      gender,
      position,
      level,
      is_administrator,
      team: team_id,
    };

    return this.userService.createUser(data);
  }

  @Get('organization')
  @ApiOkResponse(USER_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  @ApiBadRequestResponse(USER_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  getOrganization() {
    const condition = [{ level: 1 }, { level: 2 }, { level: 3 }];
    const query: QueryParamDto = {
      pageSize: 50,
    } as any;
    return this.userService.getOrganization(condition, query);
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id of user',
  })
  @ApiOkResponse(USER_SWAGGER_RESPONSE.GET_USER_SUCCESS)
  @ApiBadRequestResponse(USER_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  @ApiNotFoundResponse(USER_SWAGGER_RESPONSE.NOT_FOUND_EXCEPTION)
  @Get(':id')
  getUser(@GetUser() user, @Param() params: ParamIdDto) {
    return this.userService.getUser(parseInt(params.id));
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBody({
    description: ' update user by admin',
    type: UpdateUser,
  })
  @ApiParam({
    name: 'id',
    description: 'id of the user',
  })
  @ApiOkResponse(USER_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  @ApiNotFoundResponse(USER_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  updateUser(@Body() updateUser: UpdateUser, @Param() param: ParamIdDto) {
    const id = parseInt(param.id);
    const {
      first_name,
      last_name,
      type,
      gender,
      status,
      position,
      phone,
      start_date,
      birthday,
      level,
      team_id,
      avatar,
    } = updateUser;
    const data = {
      first_name,
      last_name,
      type,
      gender,
      status,
      position,
      phone,
      start_date,
      birthday,
      level,
      team: team_id,
      avatar,
    };
    return this.userService.updateUserInfor(id, data);
  }
}
