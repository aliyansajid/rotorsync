"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { serialNumberSchema, SerialNumberFormData } from "@/schema/index";

export async function createSerialNumber(data: SerialNumberFormData) {
  try {
    // Get the current session
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "You must be logged in to create a serial number",
      };
    }

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true, fullName: true },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    if (user.role !== "ADMIN") {
      return {
        success: false,
        error: "Only admin can create serial numbers",
      };
    }

    // Validate the input data
    const validatedData = serialNumberSchema.parse(data);

    // Check if serial number already exists
    const existingSerial = await prisma.serialNumber.findUnique({
      where: {
        serialNumber: validatedData.serialNumber,
      },
    });

    if (existingSerial) {
      return {
        success: false,
        error: "This serial number already exists",
      };
    }

    // Create the serial number
    const serialNumber = await prisma.serialNumber.create({
      data: {
        assetType: validatedData.assetType,
        name: validatedData.name,
        serialNumber: validatedData.serialNumber,
      },
    });

    return {
      success: true,
      message: "Serial number created successfully",
      data: serialNumber,
    };
  } catch (error) {
    console.error("Error creating serial number:", error);

    return {
      success: false,
      error: "Failed to create serial number. Please try again.",
    };
  }
}
