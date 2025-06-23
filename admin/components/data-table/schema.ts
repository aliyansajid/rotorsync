import z from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  createdAt: z.string(),
});

export const trailerSchema = z.object({
  id: z.string(),
  name: z.string(),
  serialNumber: z.string(),
  createdAt: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type Trailer = z.infer<typeof trailerSchema>;
