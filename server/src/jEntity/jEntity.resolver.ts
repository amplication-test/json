import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JEntityResolverBase } from "./base/jEntity.resolver.base";
import { JEntity } from "./base/JEntity";
import { JEntityService } from "./jEntity.service";

@graphql.Resolver(() => JEntity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JEntityResolver extends JEntityResolverBase {
  constructor(
    protected readonly service: JEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
