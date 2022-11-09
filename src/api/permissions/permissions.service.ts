import { Injectable, OnModuleInit } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { PERMISSIONS } from './permissions.constant';
import { PermissionsRepository } from './permissions.repository';
import { CommonLogger } from '../../share/services/logger/common-logger';

@Injectable()
export class PermissionsService implements OnModuleInit {
  private logger = new CommonLogger(PermissionsService.name);

  constructor(private readonly permissionsRepository: PermissionsRepository) {}
  async onModuleInit() {
    Object.values(PERMISSIONS).forEach(async (permission) => {
      const permissionExisted = await this.permissionsRepository.findOneByCondition({
        where: {
          name: permission,
        },
      });
      if (!permissionExisted) {
        await this.permissionsRepository.save({
          name: permission,
        });
      }
    });
  }

  public async findOneByConditions(conditions: FindOneOptions) {
    return this.permissionsRepository.findOneByCondition(conditions);
  }
}
