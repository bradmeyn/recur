import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "Email is required" }).min(1),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be 8 or more characters" }),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: "First name must be 2 or more letters" }),
    ...loginSchema.shape,
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
