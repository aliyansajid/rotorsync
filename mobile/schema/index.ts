import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .trim(),
  email: z.email("Please enter a valid email address").toLowerCase(),
  password: z
    .string({ error: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
  role: z.enum(["PILOT", "CREW"], {
    error: "Please select a role",
  }),
});

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string({ error: "Password is required" }),
});

export const editProfileSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .trim(),
  email: z.email("Please enter a valid email address"),
  image: z.url("Please provide a valid image URL").optional(),
  newPassword: z
    .string()
    .optional()
    .refine((password) => {
      if (password && password.length > 0) {
        return password.length >= 8;
      }
      return true;
    }, "Password must be at least 8 characters"),
});
