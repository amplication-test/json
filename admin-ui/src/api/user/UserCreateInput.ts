import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  js?: InputJsonValue;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
