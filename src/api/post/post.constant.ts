import { swaggerSchemaExample } from '../../share/utils/swagger_schema';

export const POST_CONST = {
  MODEL_NAME: 'post',
  MODEL_PROVIDER: 'POST_MODEL',
};

export enum PostStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}

export enum PostHighlight {
  TRUE = 1,
  FALSE = 0,
}

export const POST_SWAGGER_RESPONSE = {
  CREATE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        title: 'Welcome to DU1asd8',
        description: 'Welcome',
        tag: 'hot',
        content: '<p>This is content</p>',
        slug: 'welcome-to-du18asd',
        user: '6',
        category: 1,
        thumbnail: 'key of thumbnail',
        deleted_at: null,
        id: '4',
        created_at: '2022-11-01T07:41:53.448Z',
        updated_at: '2022-11-01T07:41:53.448Z',
        status: 1,
        view: 0,
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
  GET_POST_SUCCESS: swaggerSchemaExample(
    {
      data: {
        id: '3',
        created_at: '2022-10-25T07:40:47.211Z',
        updated_at: '2022-11-01T07:39:28.299Z',
        deleted_at: null,
        title: 'Welcome to DU18',
        slug: 'welcome-to-du18',
        description: 'Welcome a',
        thumbnail: null,
        tag: 'hot',
        content: '<p>This is content</p>',
        status: 1,
        view: 0,
        category: {
          id: '1',
          name: 'Công nghệ1',
          slug: 'g-d',
        },
        user: {
          id: '3',
          last_name: 'Trinh',
          first_name: 'long',
          avatar: null,
        },
      },
    },
    'get post success',
  ),
  GET_LIST_SUCCESS: swaggerSchemaExample(
    {
      data: [
        {
          id: '3',
          created_at: '2022-10-25T07:40:47.211Z',
          updated_at: '2022-11-01T07:39:28.299Z',
          deleted_at: null,
          title: 'Welcome to DU18',
          slug: 'welcome-to-du18',
          description: 'Welcome a',
          thumbnail: null,
          tag: 'hot',
          content: '<p>This is content</p>',
          status: 1,
          view: 0,
          category: {
            id: '1',
            name: 'Công nghệ1',
            slug: 'g-d',
          },
          user: {
            id: '3',
            last_name: 'Trinh',
            first_name: 'long',
            avatar: null,
          },
        },
      ],
      total: 1,
      page: 1,
      pageSize: 2,
      totalPage: 1,
    },
    'get List Post',
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
  DELETE_SUCCESS: swaggerSchemaExample(
    {
      data: {
        success: true,
      },
    },
    'Delete success',
  ),
};
