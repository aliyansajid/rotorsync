// Updated schema.ts - Add this function
import z from "zod";

export const mqttConfigSchema = (isExisting = false) =>
  z.object({
    host: z
      .string()
      .min(1, "Host is required")
      .max(255, "Host is too long")
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
      .max(100, "Base path is too long")
      .transform((val) => {
        const cleaned = val.replace(/\/+$/, "");
        return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
      })
      .refine((val) => /^\/[a-zA-Z0-9/_-]*$/.test(val), {
        message:
          "Base path must contain only letters, numbers, hyphens, underscores, and forward slashes",
      }),

    protocol: z.enum(["websocket", "tls"]),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(50, "Username must not exceed 50 characters")
      .regex(
        /^[a-zA-Z0-9._-]+$/,
        "Username can only contain letters, numbers, dots, hyphens, and underscores"
      ),

    password: isExisting
      ? z.string().optional()
      : z
          .string()
          .min(8, "Password must be at least 8 characters")
          .max(100, "Password must not exceed 100 characters"),
  });
