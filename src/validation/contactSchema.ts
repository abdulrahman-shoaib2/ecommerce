import * as z from "zod"
import { regex } from "./regex"

export const contactSchema = z.object({
  name: z.string()
    .nonempty()
    .min(5)
    .max(60),
  email: z
    .string()
    .nonempty("Email is required!")
    .regex(regex.email, "Enter a valid email")
  ,
  subject:z.string()
  ,
  message:z.string().max(600,'the maximum is 600 character')
  
})