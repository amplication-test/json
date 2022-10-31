import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type JEntityWhereInput = {
  id?: StringFilter;
  js?: JsonFilter;
};
