import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, {message: 'Name can not not be less than 2 characters'}),
  username: z.string().min(2, {message: 'Username can not not be less than 2 characters'}),
  email: z.string().email({message: 'Email is invalid!'}),
  password: z.string().min(8, {message: 'Password can not be less than 8 characters!'})
});
