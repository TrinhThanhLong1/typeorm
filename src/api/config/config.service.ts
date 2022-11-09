import { BadRequestException, forwardRef, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PostService } from '../post/post.service';
import { CONFIG_VALUE } from './config.constant';
import { ConfigRepository } from './config.repository';
import { CreateConfigDto, UpdateConfigDto } from './dto/create-config.dto';

@Injectable()
export class ConfigAppService implements OnModuleInit {
  constructor(
    private readonly configRepository: ConfigRepository,
    @Inject(forwardRef(() => PostService))
    private readonly postService: PostService,
  ) {}

  async onModuleInit() {
    const configListFound = await this.configRepository.findExistedRecord();
    if (!configListFound.length) {
      await this.configRepository.save({
        key: CONFIG_VALUE.CONFIG_KEY,
        type_value: CONFIG_VALUE.CONFIG_TYPE_VALUE,
        value: '',
      });
    }
  }

  async create(data: CreateConfigDto) {
    const configHighlight = await this.configRepository.findOneByCondition({ where: { key: CONFIG_VALUE.CONFIG_KEY } });
    const highlighValue = configHighlight.value;
    const highlightArray = highlighValue ? highlighValue.split(',') : [];
    if (highlightArray.length >= 4) {
      throw new BadRequestException('The number of highlight post is limited!');
    }
    if (highlightArray.includes(data.value)) {
      throw new BadRequestException('The highlight post existed!');
    }
    const value = highlighValue ? `${highlighValue},${data.value}` : `${data.value}`;
    const dataUpdate = {
      value: value,
    };
    const result = await this.configRepository.update(configHighlight.id, dataUpdate);
    if (result.affected) {
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  }

  async getListPostHighligh() {
    const configHighlight = await this.configRepository.findOneByCondition({ where: { key: CONFIG_VALUE.CONFIG_KEY } });
    const highlighValue = configHighlight.value;
    const highlightArray = highlighValue ? highlighValue.split(',') : [];
    const highlightIdArray = highlightArray.map((id) => parseInt(id));
    return this.postService.findPostInHighligh(highlightIdArray);
  }

  async findPostNotInHighligh() {
    const configHighlight = await this.configRepository.findOneByCondition({ where: { key: CONFIG_VALUE.CONFIG_KEY } });
    const highlighValue = configHighlight.value;
    const highlightArray = highlighValue ? highlighValue.split(',') : [];
    const highlightIdArray = highlightArray.map((id) => parseInt(id));
    return this.postService.findPostNotInHighligh(highlightIdArray);
  }

  async configHighlight(data: UpdateConfigDto) {
    const config = await this.configRepository.findOneByCondition({ where: { key: CONFIG_VALUE.CONFIG_KEY } });
    const dataUpdate = data.value.join(',');
    const highlight = await this.configRepository.update(+config.id, { value: dataUpdate });
    if (highlight && highlight.affected) {
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  }

  async postInHighlight(id: number) {
    const configHighlight = await this.configRepository.findOneByCondition({ where: { key: CONFIG_VALUE.CONFIG_KEY } });
    const highlighValue = configHighlight.value;
    const highlightArray = highlighValue ? highlighValue.split(',') : [];
    if (highlightArray.includes(`${id}`)) {
      return true;
    }
    return false;
  }
}
