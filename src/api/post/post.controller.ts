import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GetUser } from '../../share/decorator/get-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { QueryParamPostDto } from './dto/query-param.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { POST_SWAGGER_RESPONSE } from './post.constant';
import { PostService } from './post.service';

@Controller({
  version: ['1'],
  path: 'posts',
})
@ApiTags('Post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOkResponse(POST_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  @ApiBadRequestResponse(POST_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  async listPosts(@Query() query: QueryParamPostDto) {
    return this.postService.listPosts(query);
  }

  @ApiParam({
    name: 'slug',
    type: 'string',
    description: 'slug of post',
  })
  @ApiOkResponse(POST_SWAGGER_RESPONSE.GET_POST_SUCCESS)
  @ApiBadRequestResponse(POST_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  @Get(':slug/detail')
  async getDetailBySlug(@Param('slug') slug) {
    return this.postService.getBySlug(slug);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id of post',
  })
  @ApiOkResponse(POST_SWAGGER_RESPONSE.GET_POST_SUCCESS)
  @ApiBadRequestResponse(POST_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  @Get(':id')
  async getDetailById(@Param('id') id) {
    return this.postService.getById(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({
    description: 'List update infor user',
    type: CreatePostDto,
  })
  @ApiOkResponse(POST_SWAGGER_RESPONSE.CREATE_SUCCESS)
  @ApiBadRequestResponse(POST_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  async createPost(@Req() req: any, @GetUser() getUser, @Body() body: CreatePostDto) {
    if (req.fileValidationError) {
      throw new BadRequestException('Invalid image files provided');
    }
    const data = {
      title: body.title,
      description: body.description,
      tag: body.tag,
      content: body.content,
      slug: body.slug,
      user: getUser.sub,
      category: body.category_id,
      thumbnail: body.thumbnail,
    };
    return this.postService.createPost(data);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id of post',
  })
  @ApiBody({
    description: 'Data update post',
    type: UpdatePostDto,
  })
  @ApiOkResponse(POST_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  @ApiNotFoundResponse(POST_SWAGGER_RESPONSE.NOT_FOUND_EXCEPTION)
  async updatePost(@Req() req: any, @Body() body: UpdatePostDto, @Param('id') id) {
    if (req.fileValidationError) {
      throw new BadRequestException('Invalid image files provided');
    }

    const data = {
      title: body.title,
      description: body.description,
      tag: body.tag,
      content: body.content,
      slug: body.slug,
      category: body.category_id,
      thumbnail: body.thumbnail,
    };

    return this.postService.updatePost(id, data);
  }

  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id of post',
  })
  @ApiOkResponse(POST_SWAGGER_RESPONSE.DELETE_SUCCESS)
  @ApiBadRequestResponse(POST_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletePost(@Param('id') id) {
    return this.postService.deletePost(id);
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'id of post',
  })
  @ApiOkResponse(POST_SWAGGER_RESPONSE.GET_POST_SUCCESS)
  @ApiBadRequestResponse(POST_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  @Get(':id/relation')
  async getRelation(@Param('id') id, @Query() query: QueryParamPostDto) {
    query['sortBy'] = 'view';
    query['sortOrder'] = 'desc';
    query['pageSize'] = 3;
    return this.postService.getRelation(id, query);
  }
}
