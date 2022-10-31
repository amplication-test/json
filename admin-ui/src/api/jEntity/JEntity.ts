import { JsonValue } from "type-fest";

export type JEntity = {
  createdAt: Date;
  id: string;
  js: JsonValue;
  updatedAt: Date;
};
