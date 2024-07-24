import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  userName: yup
    .string()
    .required()
    .min(6)
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/),
  email: yup.string().required().email(),
  phone: yup.string().required().min(10).matches(/^\d+$/),
  status: yup.string().required().oneOf(["active", "not_active"]).nullable(),
});
