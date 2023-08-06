import { educationEnum } from "@/constant/educationOptions";
import { stateEnum } from "@/constant/stateOptions";

export interface PersonType {
  lastModified: string;
  name: string;
  familyName: string | undefined;
  nationalCode: number | string;
  state: string;
  education: string;
}

export type AddPersonType = Omit<PersonType, "lastModified">;
