import { JEntityWhereInput } from "./JEntityWhereInput";
import { JEntityOrderByInput } from "./JEntityOrderByInput";

export type JEntityFindManyArgs = {
  where?: JEntityWhereInput;
  orderBy?: Array<JEntityOrderByInput>;
  skip?: number;
  take?: number;
};
