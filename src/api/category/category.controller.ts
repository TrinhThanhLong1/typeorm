import { Body, Controller, Get, Param, Post, Patch, Query, UseGuards, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CATEGORY_SWAGGER_RESPONSE } from './category.constant';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ParamIdDto, QueryParamDto } from './dto/query-param.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller({
  version: ['1'],
  path: 'categories',
})
@ApiTags('Categories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOkResponse(CATEGORY_SWAGGER_RESPONSE.CREATE_SUCCESS)
  @ApiBadRequestResponse(CATEGORY_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public createCategory(@Body() body: CreateCategoryDto) {
    const { name, description, slug } = body;
    const data = { name, slug, description };
    return this.categoryService.createCategory(data);
  }

  @Get()
  @ApiOkResponse(CATEGORY_SWAGGER_RESPONSE.GET_LIST_SUCCESS)
  @ApiBadRequestResponse(CATEGORY_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public getList(@Query() query: QueryParamDto) {
    return this.categoryService.getList(query);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiOkResponse(CATEGORY_SWAGGER_RESPONSE.UPDATE_SUCCESS)
  @ApiBadRequestResponse(CATEGORY_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public updateCategory(@Param() param: ParamIdDto, @Body() body: UpdateCategoryDto) {
    const { name, slug, description } = body;
    const data = { name, slug, description };
    return this.categoryService.updateCategory(param.id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'integer' })
  @ApiOkResponse(CATEGORY_SWAGGER_RESPONSE.DELETE_SUCCESS)
  @ApiBadRequestResponse(CATEGORY_SWAGGER_RESPONSE.BAD_REQUEST_EXCEPTION)
  public deleteCategory(@Param() param: ParamIdDto) {
    return this.categoryService.deleteCategory(param.id);
  }
}
