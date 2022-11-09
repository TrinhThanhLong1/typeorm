import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmRepository } from '../../share/database/typeorm.repository';
import { Repository } from 'typeorm';
import { CATEGORY_CONST } from './category.constant';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryRepository extends TypeOrmRepository<CategoryEntity> {
  constructor(
    @Inject(CATEGORY_CONST.MODEL_PROVIDER)
    portfolioCategory: Repository<CategoryEntity>,
  ) {
    super(portfolioCategory);
  }
}
