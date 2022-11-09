import { BadRequestException, ConsoleLogger, Injectable } from '@nestjs/common';
import { Equal, Like, Not } from 'typeorm';
import { CATEGORY_REPONE } from './category.constant';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { QueryParamDto } from './dto/query-param.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import DataSource from '../../configs/typeorm.config';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(data: CreateCategoryDto) {
    const category = await this.categoryRepository.findOneByCondition({
      where: [{ slug: data.slug }, { name: data.name }],
    });
    if (category) {
      throw new BadRequestException(CATEGORY_REPONE.SLUG_EXISTED);
    }
    return this.categoryRepository.save(data);
  }

  getList(query: QueryParamDto) {
    let condition: any = { status: 1 };
    if (query.search) {
      condition = {
        ...condition,
        name: Like(`%${query.search}%`),
      };
    }
    return this.categoryRepository.findAllByConditions(condition, query);
  }

  async updateCategory(id: string, data: UpdateCategoryDto) {
    if (data.name || data.slug) {
      const category = await this.categoryRepository.findOneByCondition({
        where: [
          { slug: data.slug, id: Not(id) },
          { name: data.name, id: Not(id) },
        ],
      });
      if (category) {
        throw new BadRequestException(CATEGORY_REPONE.SLUG_EXISTED);
      }
    }

    const updateData = await this.categoryRepository.update(id, data);
    if (updateData.affected === 1) {
      return {
        success: true,
      };
    }
    throw new BadRequestException(CATEGORY_REPONE.BAD_REQUEST);
  }

  async deleteCategory(id: string) {
    const category = await this.categoryRepository.findOneByCondition({
      where: {
        id: id,
      },
      relations: {
        post: true,
      },
    });

    if (!category) {
      throw new BadRequestException(CATEGORY_REPONE.PRODUCT_NOT_FOUND);
    }
    if (category.post.length > 0) {
      throw new BadRequestException(CATEGORY_REPONE.CATEGORY_HAVE_PRODUCTS);
    }
    const res = await DataSource.getRepository(CategoryEntity)
      .createQueryBuilder('category')
      .softDelete()
      .where('category.id = :id', { id: id })
      .execute();
    if (res.affected) {
      return {
        success: true,
      };
    }
    throw new BadRequestException(CATEGORY_REPONE.BAD_REQUEST);
  }
}
