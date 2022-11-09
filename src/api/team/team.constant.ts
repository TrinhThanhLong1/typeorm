import { swaggerSchemaExample } from '../../share/utils/swagger_schema';

export const TEAM_CONST = {
  MODEL_NAME: 'team',
  MODEL_PROVIDER: 'TEAM_MODEL',
};

export enum teamStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}
export const TEAM_SWAGGER_RESPONSE = {
  CREATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        name: 'React Js',
        deleted_at: null,
        id: '1',
        created_at: '2022-10-20T04:03:26.103Z',
        updated_at: '2022-10-20T04:03:26.103Z',
      },
    },
    'Create success',
  ),

  GET_LIST_SUCCESS: swaggerSchemaExample(
    {
      data: [
        {
          name: 'React Js',
          deleted_at: null,
          id: '1',
          created_at: '2022-10-20T04:03:26.103Z',
          updated_at: '2022-10-20T04:03:26.103Z',
        },
        {
          name: 'Node Js',
          deleted_at: null,
          id: '2',
          created_at: '2022-10-20T04:03:26.103Z',
          updated_at: '2022-10-20T04:03:26.103Z',
        },
      ],
    },
    'Get List success',
  ),

  BAD_REQUEST_EXCEPTION: swaggerSchemaExample(
    {
      message: 'bad exception',
      code: 'sys00001',
      statusCode: 400,
    },
    'bad request exception',
  ),

  NOT_FOUND_EXCEPTION: swaggerSchemaExample(
    {
      message: 'not found exception',
      code: 'us00001',
      statusCode: 404,
    },
    'not found exception',
  ),

  UPDATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        success: true,
      },
    },
    'Update success',
  ),

  BAD_REQUEST_team_EXISTED: swaggerSchemaExample(
    {
      message: 'Slug existed',
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
};

export const TEAM_REPONE = {
  BAD_REQUEST: 'Bad Request',
  TEAM_HAVE_USER: `Team Have Users Don't Delete`,
  TEAM_NOT_FOUND: 'Team not found',
};
