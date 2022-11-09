import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { PermissionEntity } from '../../../api/permissions/entities/permission.entity';
import { RoleEntity } from '../../../api/roles/entities/role.entity';
import { BaseEntity } from '../../../share/database/base.entity';
import { ROLE_PERMISION_CONST } from '../role-permission.constant';

@Entity({ name: ROLE_PERMISION_CONST.MODEL_NAME })
export class RolePermissionEntity extends BaseEntity {
  @Column({ type: 'bigint' })
  role_id: number;

  @Column({ type: 'bigint' })
  permission_id: number;

  @ManyToOne(() => RoleEntity, (rolePermission) => rolePermission.rolePermission)
  @JoinColumn({ name: 'role_id' })
  role!: RoleEntity;

  @ManyToOne(() => PermissionEntity, (rolePermission) => rolePermission.rolePermission)
  @JoinColumn({ name: 'permission_id' })
  permission!: PermissionEntity;
}
