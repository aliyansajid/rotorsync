import z from "zod";

export const mqttConfigSchema = (isExisting = false) =>
  z.object({
    host: z
      .string()
      .min(1, "Host is required")
      .max(255, "Host must not exceed 255 characters")
      .refine(
        (val) => {
          const domainRegex =
            /^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*$/;
          const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
          return domainRegex.test(val) || ipRegex.test(val);
        },
        { message: "Please enter a valid hostname or IP address" }
      ),

    port: z
      .number()
      .int("Port must be an integer")
      .min(1, "Port must be between 1 and 65535")
      .max(65535, "Port must be between 1 and 65535"),

    basePath: z
      .string()
      .min(1, "Base path is required")
      .max(50, "Base path must not exceed 50 characters")
      .transform((val) => {
        const cleaned = val.replace(/^\/+|\/+$/g, "").toLowerCase();
        return cleaned;
      })
      .refine((val) => /^[a-z][a-z]*$/.test(val), {
        message: "Base path must contain only lowercase letters",
      }),

    protocol: z.enum(["websocket", "tls"]),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(50, "Username must not exceed 50 characters"),

    password: isExisting
      ? z.string().optional()
      : z.string().min(8, "Password must be at least 8 characters"),
  });

export const serialNumberSchema = z.object({
  assetType: z.enum(["HELICOPTER", "TRAILER"], {
    error: "Please select an asset type",
  }),
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z0-9\s/]+$/, {
      message:
        "Name must contain only letters, numbers, spaces, and forward slashes",
    })
    .max(50, "Name must not exceed 50 characters"),
  serialNumber: z
    .string()
    .min(1, "Serial number is required")
    .regex(/^[A-Za-z0-9\s/]+$/, {
      message:
        "Serial number must contain only letters, numbers, spaces, and forward slashes",
    })
    .max(50, "Serial number must not exceed 50 characters")
    .toUpperCase(),
});

export const raspiSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must not exceed 50 characters"),
  deviceName: z
    .string()
    .min(1, "Device name is required")
    .max(50, "Device name must not exceed 50 characters"),
  mqttTopic: z
    .string()
    .min(1, "MQTT topic is required")
    .max(50, "MQTT topic must not exceed 50 characters"),
  helicopterId: z.string().optional(),
  trailerId: z.string().optional(),
});
