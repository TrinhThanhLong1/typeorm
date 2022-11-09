import { DataSource } from 'typeorm';
import { MYSQL_CONFIG } from './constant.config';
import { PermissionEntity } from '../api/permissions/entities/permission.entity';
import { RoleEntity } from '../api/roles/entities/role.entity';
import { UserEntity } from '../api/user/user.entity';
import { RolePermissionEntity } from '../api/role-permission/entities/role-permission.entity';
import { CreatePermissions1661154835736 } from '../../migrations/1661154835736-CreatePermissions';
import { CreateRoles1661161731016 } from '../../migrations/1661161731016-CreateRoles';
import { CreateUser1661224228702 } from '../../migrations/1661224228702-CreateUser';
import { UpdateCreateUser1662609677317 } from '../../migrations/1662609677317-Update-CreateUser';
import { PostEntity } from '../api/post/post.entity';
import { CategoryEntity } from '../api/category/category.entity';
import { CreatePost1664425790154 } from '../../migrations/1664425790154-CreatePost';
import { UpdateUserPost1665029418996 } from '../../migrations/1665029418996-UpdateUser-Post';
import { UserConfigEntity } from '../api/user-config/user-config.entity';
import { ConfigUser1665549201679 } from '../../migrations/1665549201679-Config-User';

import { ConfigEntity } from '../api/config/config.entity';
import { CreateConfig1664782456421 } from '../../migrations/1664782456421-CreateConfig';
import { TeamEntity } from '../api/team/team.entity';
import { CreateTeam1666237486640 } from '../../migrations/1666237486640-CreateTeam';
import { UpdatePost1666597216077 } from '../../migrations/1666597216077-UpdatePost';
import { UpdateUser1666600814535 } from '../../migrations/1666600814535-UpdateUser';
import { AttachmentEntity } from '../api/attachment/attachment.entity';
import { CreateAttachmentTable1666860907566 } from '../../migrations/1666860907566-CreateAttachmentTable';
import { UpdateUser1667190205244 } from '../../migrations/1667190205244-UpdateUser';
import { UpdateUserTable1667458671722 } from '../../migrations/1667458671722-UpdateUserTable';

export default new DataSource({
  type: 'mysql',
  host: MYSQL_CONFIG.host,
  port: 3306,
  username: MYSQL_CONFIG.username,
  password: MYSQL_CONFIG.password,
  database: MYSQL_CONFIG.database,
  entities: [
    PermissionEntity,
    RoleEntity,
    RolePermissionEntity,
    UserEntity,
    PostEntity,
    CategoryEntity,
    UserConfigEntity,
    ConfigEntity,
    TeamEntity,
    AttachmentEntity,
  ],
  migrations: [
    CreatePermissions1661154835736,
    CreateRoles1661161731016,
    CreateUser1661224228702,
    UpdateCreateUser1662609677317,
    CreatePost1664425790154,
    UpdateUserPost1665029418996,
    ConfigUser1665549201679,
    CreateConfig1664782456421,
    CreateTeam1666237486640,
    UpdatePost1666597216077,
    UpdateUser1666600814535,
    CreateAttachmentTable1666860907566,
    UpdateUser1667190205244,
    UpdateUserTable1667458671722,
  ],
  synchronize: false,
});
