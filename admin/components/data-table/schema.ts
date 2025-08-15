import { AssetType } from "@/app/generated/prisma";
import { z } from "zod";

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const serialNumberSchema = z.object({
  id: z.string(),
  assetType: z.enum(AssetType),
  name: z.string(),
  serialNumber: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SerialNumber = z.infer<typeof serialNumberSchema>;
