import { SEND_EMAIL_CONFIG } from '../../configs/constant.config';
import { swaggerSchemaExample } from '../../share/utils/swagger_schema';

export const USER_CONST = {
  MODEL_NAME: 'user',
  MODEL_PROVIDER: 'USER_MODEL',
};

export enum UserTypes {
  ADMIN = 1,
  USER = 2,
}

export enum UserGender {
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
}

export enum UserPosition {
  PM = 'pm',
  Dev = 'dev',
  Tester = 'tester',
}

export enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}

export const USER_SWAGGER_RESPONSE = {
  CREATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        last_name: 'Trinh',
        first_name: 'long',
        email: 'trinhthanhlong2842000@gmail.com',
        birthday: '28/04/2000',
        start_date: '28/04/2020',
        phone: '+84123456789',
        type: 1,
        gender: 1,
        position: 'dev',
        level: 4,
        team: 1,
        password: '$2b$12$jwPKOhPuZRbuZuGBydQZve1puMnRRFBwRHp9OuNtkqbSeFNPL3LbS',
        deleted_at: null,
        avatar: null,
        created_by: null,
        expired_date: null,
        last_login: null,
        id: '5',
        created_at: '2022-10-25T02:18:54.638Z',
        updated_at: '2022-10-25T02:18:54.638Z',
        is_administrator: false,
        status: 1,
      },
    },
    'Create success',
  ),
  UPDATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        success: true,
      },
    },
    'Update success',
  ),
  CREATE_MULTIPLE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        totalSuccess: 1,
        totalError: 0,
      },
    },
    'Create success',
  ),
  GET_USER_SUCCESS: swaggerSchemaExample(
    {
      data: {
        id: '16',
        created_at: '2022-10-25T03:41:37.770Z',
        updated_at: '2022-10-25T03:44:33.000Z',
        deleted_at: null,
        last_name: 'Trinh',
        first_name: 'long',
        email: 'longtt1@vmodev.com',
        avatar: null,
        type: 1,
        gender: 1,
        position: 'dev',
        birthday: '30/04/2000',
        is_administrator: false,
        status: 1,
        created_by: null,
        phone: '+84 123456789',
        start_date: '28/04/2020',
        expired_date: null,
        last_login: null,
        level: 1,
        team: {
          id: '1',
          created_at: '2022-10-20T06:33:49.302Z',
          updated_at: '2022-10-24T08:00:49.000Z',
          deleted_at: null,
          name: 'React Jsxcvfcsdacd',
        },
        hidden: 'phone',
      },
    },
    'get user success',
  ),
  NOT_FOUND_EXCEPTION: swaggerSchemaExample(
    {
      message: 'not found exception',
      code: 'us00001',
      statusCode: 404,
    },
    'not found exception',
  ),
  BAD_REQUEST_CONFIRM_PASSWORD: swaggerSchemaExample(
    {
      message: 'Confirm password is not match new password ',
      code: 'us00006',
      statusCode: 400,
    },
    'bad request',
  ),
  BAD_REQUEST_WRONG_PASSWORD: swaggerSchemaExample(
    {
      message: 'Password does not match',
      code: 'us00005',
      statusCode: 400,
    },
    'bad request',
  ),
  BAD_REQUEST_USER_EXISTED: swaggerSchemaExample(
    {
      message: 'User existed',
      code: 'us00004',
      statusCode: 400,
    },
    'bad request',
  ),
  DELETE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        success: true,
      },
    },
    'Delete success',
  ),
  GET_LIST_SUCCESS: swaggerSchemaExample(
    {
      data: [
        {
          id: '16',
          created_at: '2022-10-25T03:41:37.770Z',
          updated_at: '2022-10-25T03:44:33.000Z',
          deleted_at: null,
          last_name: 'Trinh',
          first_name: 'long',
          email: 'longtt1@vmodev.com',
          avatar: null,
          type: 1,
          gender: 1,
          position: 'dev',
          birthday: '30/04/2000',
          is_administrator: false,
          status: 1,
          created_by: null,
          phone: '+84 123456789',
          start_date: '28/04/2020',
          expired_date: null,
          last_login: null,
          level: 1,
          team: {
            id: '1',
            created_at: '2022-10-20T06:33:49.302Z',
            updated_at: '2022-10-24T08:00:49.000Z',
            deleted_at: null,
            name: 'React Jsxcvfcsdacd',
          },
        },
      ],
      total: 1,
      page: 1,
      pageSize: 2,
      totalPage: 1,
    },
    'get List User',
  ),
  BAD_REQUEST_EXCEPTION: swaggerSchemaExample(
    {
      message: 'bad exception',
      code: 'sys00001',
      statusCode: 400,
    },
    'bad request exception',
  ),
};

export const sendEmail = {
  SUBJECT: SEND_EMAIL_CONFIG.subjectMail,
};
