import * as Yup from "yup";

export const userSchema = Yup.object({
    first_name : Yup.string().required("First Name is required"),
    last_name : Yup.string().required("First Name is required"),
    age : Yup.number().min(0, "Invalid age").max(120, "Invalid age").required("Age is required"),
})