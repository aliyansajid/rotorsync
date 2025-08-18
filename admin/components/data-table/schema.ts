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

export const raspiSchema = z.object({
  id: z.string(),
  name: z.string(),
  deviceName: z.string(),
  mqttTopic: z.string(),
  helicopterId: z.string().nullable().optional(),
  trailerId: z.string().nullable().optional(),
  createdBy: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  helicopter: z
    .object({
      id: z.string(),
      name: z.string(),
      serialNumber: z.string(),
    })
    .nullable()
    .optional(),
  trailer: z
    .object({
      id: z.string(),
      name: z.string(),
      serialNumber: z.string(),
    })
    .nullable()
    .optional(),
  creator: z
    .object({
      fullName: z.string(),
      email: z.string(),
    })
    .optional(),
});

export type Raspi = z.infer<typeof raspiSchema>;
