"use server";

import { revalidatePath } from "next/cache";
import { mqttConfigSchema } from "@/schema";
import prisma from "@/lib/prisma";

export async function saveMqttConfiguration(data: any) {
  try {
    // Check if configuration exists
    const existingConfig = await prisma.mqttConfig.findFirst();
    const isExisting = !!existingConfig;

    // Validate with schema
    const validatedData = mqttConfigSchema(isExisting).parse(data);

    if (isExisting) {
      // Update existing
      const updateData: any = {
        host: validatedData.host,
        port: validatedData.port,
        basePath: validatedData.basePath,
        protocol: validatedData.protocol,
        username: validatedData.username,
      };

      // Only update password if provided
      if (validatedData.password && validatedData.password.trim()) {
        updateData.password = validatedData.password;
      }

      await prisma.mqttConfig.update({
        where: { id: existingConfig.id },
        data: updateData,
      });

      revalidatePath("/mqtt-config");
      return { success: true, message: "Configuration updated successfully" };
    } else {
      // Create new
      await prisma.mqttConfig.create({
        data: {
          host: validatedData.host,
          port: validatedData.port,
          basePath: validatedData.basePath,
          protocol: validatedData.protocol,
          username: validatedData.username,
          password: validatedData.password as string,
        },
      });

      revalidatePath("/mqtt-config");
      return { success: true, message: "Configuration saved successfully" };
    }
  } catch (error) {
    console.error("Error saving MQTT configuration:", error);
    return {
      success: false,
      error: "Failed to save configuration. Please try again.",
    };
  }
}

export async function getMqttConfiguration() {
  try {
    const config = await prisma.mqttConfig.findFirst({
      select: {
        id: true,
        host: true,
        port: true,
        basePath: true,
        protocol: true,
        username: true,
        password: true,
      },
    });

    return { success: true, data: config };
  } catch (error) {
    console.error("Error fetching MQTT configuration:", error);
    return {
      success: false,
      error: "Failed to fetch configuration. Please try again.",
    };
  }
}
