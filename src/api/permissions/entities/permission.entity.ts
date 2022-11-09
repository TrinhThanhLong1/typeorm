import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../share/database/base.entity';
import { PERMISSION_CONST } from '../permissions.constant';
import { RolePermissionEntity } from '../../../api/role-permission/entities/role-permission.entity';

@Entity({ name: PERMISSION_CONST.MODEL_NAME })
export class PermissionEntity extends BaseEntity {
  @Column({ length: 255, unique: true, enum: Object.values(PERMISSION_CONST) })
  name: string;

  @OneToMany(() => RolePermissionEntity, (rolePermission) => rolePermission.permission)
  @JoinColumn({ name: 'permission_id' })
  rolePermission!: RolePermissionEntity[];
}
