import { Test } from '@nestjs/testing';
import { UserEntity } from '../../user/user.entity';
import { AuthService } from '../auth.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { AuthController } from '../auth.controller';

const moduleMocker = new ModuleMocker(global);

const mockUser = {
  email: 'test@gmail.com',
  password: '12345667',
};

describe('Auth Controller', () => {
  let authController: AuthController;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthController],
    })
      .useMocker((token) => {
        if (token === AuthService) {
          return {
            validateUser: jest.fn().mockResolvedValue(mockUser),
            login: jest.fn().mockResolvedValue({
              accessToken: 'randomString',
            }),
          };
        }
        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    authController = moduleRef.get(AuthController);
  });

  describe('login', () => {
    it('should login success', async () => {
      expect(await authController.login(mockUser as UserEntity)).toHaveProperty(['accessToken']);
    });
  });
});
