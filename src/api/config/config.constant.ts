import { swaggerSchemaExample } from '../../share/utils/swagger_schema';

export const CONFIG_CONST = {
  MODEL_NAME: 'config',
  MODEL_PROVIDER: 'CONFIG_MODEL',
};

export const CONFIG_VALUE = {
  CONFIG_KEY: 'highlight_post',
  CONFIG_TYPE_VALUE: 'post',
};

export const CONFIG_SWAGGER_RESPONSE = {
  GET_LIST_HIGHLIGHT_SUCCESS: swaggerSchemaExample(
    {
      data: [
        {
          id: '1',
          created_at: '2022-10-05T03:21:31.074Z',
          updated_at: '2022-10-05T03:21:31.074Z',
          deleted_at: null,
          title: 'Welcome to DU18',
          slug: 'post',
          description: 'Welcome',
          thumbnail: '...',
          tag: 'content',
          content: 'about post 1',
          status: 1,
          view: 0,
        },
        {
          id: '2',
          created_at: '2022-10-05T03:21:31.075Z',
          updated_at: '2022-10-05T03:21:31.075Z',
          deleted_at: null,
          title: 'hihi',
          slug: 'post1',
          description: 'Welcome',
          thumbnail: '...',
          tag: 'content',
          content: 'about post 2',
          status: 1,
          view: 0,
        },
      ],
    },
    'Get success',
  ),
  GET_LIST_SUCCESS: swaggerSchemaExample(
    {
      data: {
        data: [
          {
            id: '1',
            created_at: '2022-10-05T03:21:31.074Z',
            updated_at: '2022-10-05T03:21:31.074Z',
            deleted_at: null,
            title: 'Welcome to DU18',
            slug: 'post',
            description: 'Welcome',
            thumbnail: '...',
            tag: 'content',
            content: 'about post 1',
            status: 1,
            view: 0,
          },
          {
            id: '2',
            created_at: '2022-10-05T03:21:31.075Z',
            updated_at: '2022-10-05T03:21:31.075Z',
            deleted_at: null,
            title: 'hihi',
            slug: 'post1',
            description: 'Welcome',
            thumbnail: '...',
            tag: 'content',
            content: 'about post 2',
            status: 1,
            view: 0,
          },
        ],
        total: 2,
        page: 1,
        pageSize: 20,
        totalPage: 1,
      },
    },
    'Get success',
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
