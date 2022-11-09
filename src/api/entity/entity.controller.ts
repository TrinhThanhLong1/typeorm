import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { SWAGGER_RESPONSE } from './entity.constant';
import { EntityService } from './entity.service';

@Controller({
  version: ['1'],
  path: 'entity',
})
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @ApiOkResponse(SWAGGER_RESPONSE.HEALTH_CHECK)
  @Get()
  public get() {
    return this.entityService.get();
  }
}
