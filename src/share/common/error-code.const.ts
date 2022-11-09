export const ERROR = {
  COMMON_SYSTEM_ERROR: {
    CODE: 'sys00001',
    MESSAGE: 'An error has arisen from the system. Please try again later or contact us for a fix.',
  },
  INVALID_MIME_TYPE: {
    CODE: 'att00001',
    MESSAGE: 'Invalid mime type',
  },
  // user
  USER_NOT_FOUND: {
    CODE: 'us00001',
    MESSAGE: 'This email does not exist in our records',
  },
  PASSWORD_INCORRECT: {
    CODE: 'us00002',
    MESSAGE: 'That’s an incorrect password. Please try again.',
  },
  USER_INACTIVE: {
    CODE: 'us00003',
    MESSAGE: 'This account has been deactivated. Please contact the organization admin to reactivate your account.',
  },
  USER_EXISTED: {
    CODE: 'us00004',
    MESSAGE: 'User existed!',
  },
  USER_WRONG_OLD_PASSWORD: {
    CODE: 'us00005',
    MESSAGE: 'Password does not match',
  },
  UER_NOT_MATCH_CONFIRM_PASSWORD: {
    CODE: 'us00006',
    MESSAGE: 'Confirm password is not match new password',
  },

  //company
  COMPANY_NOT_FOUND: {
    CODE: 'co00001',
    MESSAGE: 'Company not found',
  },
  COMPANY_EXISTED: {
    CODE: 'co00002',
    MESSAGE: 'Company already exist',
  },
  COMPANY_DOMAIN_EXISTED: {
    CODE: 'co00003',
    MESSAGE: '"Company Email Domain” already exist',
  },

  //Role
  ROLE_NOT_FOUND: {
    CODE: 'ro00001',
    MESSAGE: 'Role not found',
  },
  ROLE_EXISTED: {
    CODE: 'ro00002',
    MESSAGE: 'Role existed!',
  },

  //Member token
  MEMBER_TOKEN_NOT_FOUND: {
    CODE: 'mt00001',
    MESSAGE: 'Member token not found',
  },
  MEMBER_TOKEN_EXISTED: {
    CODE: 'mt00002',
    MESSAGE: 'Member token existed!',
  },
  MEMBER_TOKEN_EXPIRED: {
    CODE: 'mt00003',
    MESSAGE: 'Sorry, the link has expired.',
  },

  //Post
  POST_NOT_FOUND: {
    CODE: 'p00001',
    MESSAGE: 'This post does not exist in our records',
  },
};
