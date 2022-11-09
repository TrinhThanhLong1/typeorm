import { Module } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { DatabaseModule } from '../../configs/database/database.module';
import { categoryProvider } from './category.provider';
import { PostModule } from '../post/post.module';

@Module({
  imports: [DatabaseModule, PostModule],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, ...categoryProvider],
  exports: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
