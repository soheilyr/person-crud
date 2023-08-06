import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string().required("فیلد نام ضروری است"),
  familyName: Yup.string(),
  education: Yup.string().required("فیلد تحصیلات اجباری است"),
  nationalCode: Yup.string()
    .test("len", "کد ملی معتبر وارد کنید", (val) => val?.length === 10)
    .required("فیلد کد ملی ضروری است."),
  state: Yup.string().required("فیلد وضعیت اجباری است"),
});
