import { swaggerSchemaExample } from '../../share/utils/swagger_schema';

export const USERCONFIG_CONST = {
  MODEL_NAME: 'user_config',
  MODEL_PROVIDER: 'USERCONFIG_MODEL',
};

export enum UserConfigStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}
export const USERCONFIG_SWAGGER_RESPONSE = {
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
};

export const USERCONFIG_TYPE = {
  VIEW: 'view',
};
