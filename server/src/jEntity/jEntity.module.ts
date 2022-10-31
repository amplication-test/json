import { Module } from "@nestjs/common";
import { JEntityModuleBase } from "./base/jEntity.module.base";
import { JEntityService } from "./jEntity.service";
import { JEntityController } from "./jEntity.controller";
import { JEntityResolver } from "./jEntity.resolver";

@Module({
  imports: [JEntityModuleBase],
  controllers: [JEntityController],
  providers: [JEntityService, JEntityResolver],
  exports: [JEntityService],
})
export class JEntityModule {}
