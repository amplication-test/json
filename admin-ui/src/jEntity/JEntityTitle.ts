import { JEntity as TJEntity } from "../api/jEntity/JEntity";

export const JENTITY_TITLE_FIELD = "id";

export const JEntityTitle = (record: TJEntity): string => {
  return record.id || record.id;
};
