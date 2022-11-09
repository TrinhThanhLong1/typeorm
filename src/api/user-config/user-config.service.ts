import { Injectable } from '@nestjs/common';
import { ParamIdDto } from './dto/query-param.dto';
import { IUserConfig } from './user-config.interface';
import { UserConfigRepository } from './user-config.repository';

@Injectable()
export class UserConfigService {
  constructor(private readonly userConfigRepository: UserConfigRepository) {}

  async userConfig(params: ParamIdDto, body: IUserConfig) {
    const userConfig = await this.userConfigRepository.findOneByCondition({ where: { user_id: params.id } });
    const value = body.value.toString();
    if (!userConfig) {
      const data = { type: body.type, user_id: params.id, value: value };
      await this.userConfigRepository.save(data);
      return {
        success: true,
      };
    }
    if (userConfig.value === '') {
      userConfig.value = value;
      await userConfig.save();
      return {
        success: true,
      };
    }
    userConfig.value = value;
    await userConfig.save();
    return {
      success: true,
    };
  }
}
