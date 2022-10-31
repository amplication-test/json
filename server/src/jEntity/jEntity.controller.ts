import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JEntityService } from "./jEntity.service";
import { JEntityControllerBase } from "./base/jEntity.controller.base";

@swagger.ApiTags("jEntities")
@common.Controller("jEntities")
export class JEntityController extends JEntityControllerBase {
  constructor(
    protected readonly service: JEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
