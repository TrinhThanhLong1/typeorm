import { Injectable, NotFoundException, BadRequestException, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserStatus, UserTypes } from './user.constant';
import { DEFAULT_ADMIN_USER, GEN_PASSWORD_CONFIG, JWT_CONFIG, SEND_EMAIL_CONFIG } from '../../configs/constant.config';
import { ERROR } from '../../share/common/error-code.const';
import { ChangeUserPasswordDto, UpdateInforUser } from './dto/update-user.dto';
import { Like } from 'typeorm';
import { QueryParamDto } from './dto/query-param.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { FileUploadService } from '../../share/external-services/s3.service';
import * as sgMail from '@sendgrid/mail';
import { generate } from 'generate-password';
import { USERCONFIG_TYPE } from '../user-config/user-config.constant';
import { ICreateUser } from './user.interface';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly userRepository: UserRepository, private readonly fileUploadService: FileUploadService) {}

  async onModuleInit() {
    const userListFound = await this.userRepository.findExistedRecord();
    if (!userListFound.length) {
      await this.userRepository.save({
        email: DEFAULT_ADMIN_USER.email,
        password: await bcrypt.hash(DEFAULT_ADMIN_USER.password, JWT_CONFIG.SALT_ROUNDS),
        name: DEFAULT_ADMIN_USER.name,
        type: UserTypes.ADMIN,
        is_administrator: true,
      });
    }
  }

  async getUser(id: number) {
    const existedUser = await this.userRepository.findOneByCondition({ relations: { team: true }, where: { id } });
    if (!existedUser) {
      throw new BadRequestException(ERROR.USER_NOT_FOUND);
    }
    const user = await this.userRepository.findOneByCondition({
      relations: { userConfigEntity: true },
      where: { id, userConfigEntity: { type: USERCONFIG_TYPE.VIEW } },
    });
    existedUser['hidden'] = user ? user.userConfigEntity[0].value : '';
    return existedUser;
  }

  async changePassword(id: number, changeUserPasswordDto: ChangeUserPasswordDto) {
    if (changeUserPasswordDto.newPassword !== changeUserPasswordDto.confirmPassword) {
      throw new BadRequestException(ERROR.UER_NOT_MATCH_CONFIRM_PASSWORD.MESSAGE);
    }
    const existed = await this.userRepository.findOneByCondition({ where: { id } });
    if (!existed) {
      throw new NotFoundException(ERROR.USER_NOT_FOUND.MESSAGE);
    }
    const match = await bcrypt.compare(changeUserPasswordDto.oldPassword, existed.password);
    if (!match) {
      throw new BadRequestException(ERROR.USER_WRONG_OLD_PASSWORD.MESSAGE);
    }
    const newPasswordHash = await bcrypt.hash(changeUserPasswordDto.newPassword, JWT_CONFIG.SALT_ROUNDS);
    const result = await this.userRepository.update(id, {
      password: newPasswordHash,
    });
    if (result.affected) {
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  }
  async getListUser(query: QueryParamDto) {
    const itemCondition = {};

    if (query.status) {
      itemCondition['status'] = query.status;
    }
    if (query.position) {
      itemCondition['position'] = query.position;
    }
    if (query.type) {
      itemCondition['type'] = query.type;
    }
    if (query.team) {
      itemCondition['team'] = { name: query.team };
    }
    let condition;
    if (query.search) {
      condition = [
        { ...itemCondition, first_name: Like(`%${query.search}%`) },
        { ...itemCondition, email: Like(`%${query.search}%`) },
      ];
    } else {
      condition = itemCondition;
    }
    return this.userRepository.findAllByConditions(
      condition,
      query,
      { team: true },
      {
        id: true,
        created_at: true,
        updated_at: true,
        last_name: true,
        first_name: true,
        email: true,
        avatar: true,
        type: true,
        gender: true,
        position: true,
        birthday: true,
        is_administrator: true,
        status: true,
        created_by: true,
        phone: false,
        start_date: true,
        expired_date: true,
        last_login: true,
        level: true,
      },
    );
  }

  async findOne(email: string): Promise<UserEntity> {
    return this.userRepository.findOneByCondition({
      where: { email, status: UserStatus.ACTIVE },
      relations: { role: true },
    });
  }

  async updateUserInfor(id: number, updateInforUser: UpdateInforUser) {
    const dataUpdate: any = { ...updateInforUser };
    const resultUpdate = await this.userRepository.update(id, dataUpdate);
    if (resultUpdate.affected) {
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  }

  async createUser(data: ICreateUser) {
    let password = generate({
      length: GEN_PASSWORD_CONFIG.LENGTH,
      numbers: GEN_PASSWORD_CONFIG.NUMBER,
    });
    const sendPassword = password;
    password = await bcrypt.hash(password, JWT_CONFIG.SALT_ROUNDS);
    data['password'] = password;
    try {
      const user = await this.userRepository.save(data);
      await this.sendEmail(sendPassword, data.email);
      return user;
    } catch (error) {
      return error;
    }
  }

  async sendEmail(password: string, email: string) {
    const key = SEND_EMAIL_CONFIG.sendGridApiKey;
    try {
      sgMail.setApiKey(key);
      const msg = {
        to: email,
        from: SEND_EMAIL_CONFIG.sesSendFrom,
        subject: SEND_EMAIL_CONFIG.subjectMail,
        html: `<strong>
        Username: ${email},
        <br/>
        password: <span style="color: blue;">${password}</span/>
      </strong>`,
      };
      await sgMail.send(msg);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getOrganization(condition: any, query: QueryParamDto) {
    return this.userRepository.findAllByConditions(
      condition,
      query,
      { team: true },
      {
        id: true,
        created_at: true,
        updated_at: true,
        last_name: true,
        first_name: true,
        email: true,
        avatar: true,
        type: true,
        gender: true,
        position: true,
        birthday: true,
        status: true,
        phone: false,
        start_date: true,
        last_login: true,
        level: true,
      },
    );
  }
}
