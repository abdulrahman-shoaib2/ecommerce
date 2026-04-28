import * as z from "zod"
import { regex } from "./regex"

export const signinSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required!")
    .regex(regex.email,"Enter a valid email")
    ,
    password: z
    .string()
    .nonempty("Password is required!")
    .regex(regex.password, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!")
    ,
})

// :.JR2xVSN3pVYy.