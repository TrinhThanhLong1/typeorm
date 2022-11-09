import { PERMISSIONS } from '../permissions/permissions.constant';

export const ROLE_CONST = {
  MODEL_NAME: 'roles',
  MODEL_ROLE_COMPANY_NAME: 'company_role',
  MODEL_PROVIDER: 'ROLE_MODEL',
  MODEL_ROLE_COMPANY_PROVIDER: 'ROLE_COMPANY_MODEL',
};

export enum RoleTypes {
  Admin = 1,
  BlueonionHub = 2,
  BlueonionPremiumHub = 3,
  Other = 4,
}

export const ROLES_DEFAULT = [
  {
    name: 'Admin',
    permissions: [PERMISSIONS.USER_CREATE, PERMISSIONS.USER_READ, PERMISSIONS.USER_EDIT, PERMISSIONS.USER_DELETE],
    type: RoleTypes.Admin,
  },
  {
    name: 'Other',
    permissions: [],
    type: RoleTypes.Other,
  },
];
