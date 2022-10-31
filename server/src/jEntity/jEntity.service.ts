import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JEntityServiceBase } from "./base/jEntity.service.base";

@Injectable()
export class JEntityService extends JEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
