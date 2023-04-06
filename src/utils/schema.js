import * as yup from "yup";

export const userSchema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your first name should be at least 3 characters.")
      .max(50, "Your first name cannot be longer than 10 characters.")
      .required("Please enter your first name"),
    email: yup
      .string()
      .matches(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
        "Please enter a valid email"
      )
      .max(255)
      .required("E-mail is required"),
    subject: yup
      .string()
      .min(3, "Subjcet should be at least 3 characters.")
      .max(100, "Subject cannot be longer than 100 characters.")
      .required("Please enter a subject"),
    body: yup
      .string()
      .min(3, "Message should be at least 3 characters.")
      .max(1000, "Message cannot be longer than 1000 characters.")
      .required("Please enter a message"),
  })
  .required();
