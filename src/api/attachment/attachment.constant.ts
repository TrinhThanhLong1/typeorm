import { swaggerSchemaExample } from '../../share/utils/swagger_schema';

export const ATTACHMENT_CONST = {
  MODEL_NAME: 'attachment',
  MODEL_PROVIDER: 'ATTACHMENT_MODEL',
};

export const SWAGGER_RESPONSE = {
  HEALTH_CHECK: swaggerSchemaExample(
    {
      data: {
        message: 'OK Test',
      },
      statusCode: 200,
    },
    'API for health check',
  ),
};

export enum ATTACHMENT_TYPE {
  CONTENT = 'content',
  THUMBNAIL = 'thumbnail',
  AVATAR = 'avatar',
  OTHER = 'other',
}

export const ATTACHMENT_SWAGGER_RESPONSE = {
  CREATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        key: 'uploader/attachment/edbb4d5a-d4b2-4a41-834c-094bc6b35566/mty2njkzmte1mtezng_original.jpg',
        author: '18',
        original_name: 'Screenshot 2022-08-19 170603.png',
        type: 'avatar',
        deleted_at: null,
        id: '24',
        created_at: '2022-10-28T04:25:51.205Z',
        updated_at: '2022-10-28T04:25:51.205Z',
      },
    },
    'Create success',
  ),

  GET_LIST_SUCCESS: swaggerSchemaExample(
    {
      data: {
        data: [
          {
            id: '4',
            created_at: '2022-10-28T06:24:50.839Z',
            updated_at: '2022-10-28T06:24:50.839Z',
            deleted_at: null,
            original_name: 'picture3.jpg',
            key: 'uploader/attachment/8af3abfb-0b7a-4367-a662-7de459f677e4/mty2njkzodi5madq1mw_original.jpg',
            type: 'thumbnail',
            author: '3',
          },
        ],
        total: 1,
        page: 1,
        pageSize: 20,
        totalPage: 1,
      },
    },
    'Get list success',
  ),

  BAD_REQUEST_EXCEPTION: swaggerSchemaExample(
    {
      message: 'bad exception',
      code: 'sys00001',
      statusCode: 400,
    },
    'bad request exception',
  ),

  UPDATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        success: true,
      },
    },
    'Update success',
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
