import { AddPersonType } from "@/types/person";
import { ErrToast } from "@/components/Toast";
import Fetch from "@/config/AxiosConfig";

export const addPerson = async (data: AddPersonType) => {
  try {
    await Fetch.post("/api/add-person", data);
  } catch (error) {
    ErrToast("مشکلی از سمت سرور بیش امده است.");
    throw Error();
  }
};
