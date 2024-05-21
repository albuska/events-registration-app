import * as yup from "yup";
import { ESelectedRadio } from "../models";

export const schema = yup
  .object({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    dateOfBirth: yup.string().required("Enter a date of birth"),
    selectedRadio: yup
      .string()
      .oneOf([
        ESelectedRadio.SOCIAL_MEDIA,
        ESelectedRadio.FRIENDS,
        ESelectedRadio.FOUND_MYSELF,
      ])
      .required("Radio is required"),
    event: yup.string().optional(),
  })
  .required();
