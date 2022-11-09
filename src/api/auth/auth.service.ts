import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../../api/user/user.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtPayload } from './payloads/jwt-payload';
import { ValidatorService } from './validators/check-expiration-time';
import { UserEntity } from '../user/user.entity';
import { RolesPermissionService } from '../role-permission/role-permission.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly validatorService: ValidatorService,
    private readonly rolesPermissionService: RolesPermissionService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new BadRequestException('User not found, disabled or locked');
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (user && comparePassword) {
      return user;
    }
    return null;
  }

  async login(user: UserEntity): Promise<LoginResponseDto> {
    const rolePermissions = await this.rolesPermissionService.findAllByCondition({ role: user.role });

    const permissions = rolePermissions.data.map((rolePermiss) => {
      return rolePermiss.permission.name;
    });

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      scopes: permissions,
      isAdministrator: user.is_administrator,
      name: user.first_name,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
