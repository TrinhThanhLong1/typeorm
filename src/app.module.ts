import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EntityModule } from './api/entity/entity.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { LoggerMiddleware } from './share/middlewares/logger.middleware';
import { PermissionsModule } from './api/permissions/permissions.module';
import { RolesModule } from './api/roles/roles.module';
import { PostModule } from './api/post/post.module';
import { CategoryModule } from './api/category/category.module';
import { UserConfigModule } from './api/user-config/user-config.module';
import { ConfigAppModule } from './api/config/config.module';
import { TeamModule } from './api/team/team.module';
import { AttachmentModule } from './api/attachment/attachment.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    EntityModule,
    UserModule,
    AuthModule,
    PermissionsModule,
    RolesModule,
    PostModule,
    CategoryModule,
    UserConfigModule,
    ConfigAppModule,
    TeamModule,
    AttachmentModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
