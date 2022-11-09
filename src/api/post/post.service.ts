import { BadRequestException, Injectable } from '@nestjs/common';
import { In, Like, Not } from 'typeorm';
import { PostRepository } from './post.repository';
import { ERROR } from '../../share/common/error-code.const';
import { PostEntity } from './post.entity';
import { QueryParamPostDto } from './dto/query-param.dto';
import { PostStatus } from './post.constant';
import { ICreatePost, IUpdatePost } from './post.interface';
import { ConfigAppService } from '../config/config.service';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository, private readonly configService: ConfigAppService) {}

  async listPosts(query: QueryParamPostDto) {
    const itemCondition = {};
    if (query.status) {
      itemCondition['status'] = query.status;
    } else {
      itemCondition['status'] = PostStatus.ACTIVE;
    }

    if (query.category) {
      itemCondition['category'] = { id: query.category };
    }

    let condition;
    if (query.search) {
      condition = { ...itemCondition, title: Like(`%${query.search}%`) };
    } else {
      condition = itemCondition;
    }
    const select = {
      user: {
        id: true,
        first_name: true,
        last_name: true,
        avatar: true,
      },
      category: {
        id: true,
        name: true,
        slug: true,
      },
    };
    return this.postRepository.findAllByConditions(condition, query, { category: true, user: true }, select);
  }

  async getBySlug(slug: string): Promise<PostEntity> {
    const post = await this.postRepository.findOneByCondition({
      where: { slug },
      relations: ['user', 'category'],
      select: {
        user: {
          id: true,
          first_name: true,
          last_name: true,
          avatar: true,
        },
        category: {
          id: true,
          name: true,
          slug: true,
        },
      },
    });
    if (!post) {
      throw new BadRequestException(ERROR.POST_NOT_FOUND.MESSAGE);
    }
    await this.postRepository.update(post.id, { view: post.view + 1 });
    return post;
  }

  async getById(id: string): Promise<PostEntity> {
    const post = await this.postRepository.findOneByCondition({
      where: { id },
      relations: ['user', 'category'],
      select: {
        user: {
          id: true,
          first_name: true,
          last_name: true,
          avatar: true,
        },
        category: {
          id: true,
          name: true,
          slug: true,
        },
      },
    });
    if (!post) {
      throw new BadRequestException(ERROR.POST_NOT_FOUND.MESSAGE);
    }
    return post;
  }

  async createPost(data: ICreatePost) {
    const dataCreate = { ...data };
    const checkPostSlug = await this.postRepository.findOneByCondition({
      where: { slug: dataCreate.slug },
    });
    if (checkPostSlug) {
      throw new BadRequestException('Slug existed!');
    }
    return this.postRepository.save(dataCreate);
  }

  async updatePost(postId: number, data: IUpdatePost) {
    const dataUpdate: any = { ...data };
    const resultUpdate = await this.postRepository.update(postId, dataUpdate);
    if (resultUpdate.affected) {
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  }

  async deletePost(id: number) {
    const postInHighlight = await this.configService.postInHighlight(id);
    if (postInHighlight) {
      throw new BadRequestException('Post in highlight. Cannot delete.');
    }
    const post = await this.postRepository.softDelete(id);
    if (!post.affected) {
      throw new BadRequestException(ERROR.POST_NOT_FOUND.MESSAGE);
    }
    return {
      success: true,
    };
  }

  async findPostInHighligh(data: number[]) {
    const listPost = await this.postRepository.findAllByConditions({ id: In(data) }, {});
    const result = data.map((id) => {
      let answer = {};
      listPost.data.forEach((post) => {
        if (+post.id === id) {
          answer = post;
          return;
        }
      });
      return answer;
    });
    return result;
  }

  async findPostNotInHighligh(data: number[]) {
    const listPost = await this.postRepository.findAllByConditions({ id: Not(In(data)) }, {});
    return listPost;
  }

  async getRelation(id: string, query: any) {
    const condition = {
      category: {
        id: query.category,
      },
      id: Not(id),
    };
    return this.postRepository.findAllByConditions(condition, query, { category: true, user: true });
  }
}
