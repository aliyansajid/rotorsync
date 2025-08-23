"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { serialNumberSchema } from "@/schema/index";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function getSerialNumbers() {
  try {
    const serialNumbers = await prisma.serialNumber.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: serialNumbers,
    };
  } catch (error) {
    console.error("Error fetching serial numbers:", error);
    return {
      success: false,
      error: "Failed to fetch serial numbers",
      data: [],
    };
  }
}

export async function getSerialNumberById(id: string) {
  try {
    const serialNumber = await prisma.serialNumber.findUnique({
      where: { id },
    });

    if (!serialNumber) {
      return {
        success: false,
        error: "Serial number not found",
        data: null,
      };
    }

    return {
      success: true,
      data: serialNumber,
    };
  } catch (error) {
    console.error("Error fetching serial number:", error);
    return {
      success: false,
      error: "Failed to fetch serial number",
      data: null,
    };
  }
}

export async function createSerialNumber(
  data: z.infer<typeof serialNumberSchema>
) {
  try {
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

    // Revalidate the page to show updated data
    revalidatePath("/serial-numbers");

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

export async function updateSerialNumber(
  id: string,
  data: z.infer<typeof serialNumberSchema>
) {
  try {
    // Validate the input data
    const validatedData = serialNumberSchema.parse(data);

    // Check if serial number already exists (excluding current record)
    const existingSerial = await prisma.serialNumber.findFirst({
      where: {
        serialNumber: validatedData.serialNumber,
        NOT: { id },
      },
    });

    if (existingSerial) {
      return {
        success: false,
        error: "This serial number already exists",
      };
    }

    // Update the serial number
    const serialNumber = await prisma.serialNumber.update({
      where: { id },
      data: {
        assetType: validatedData.assetType,
        name: validatedData.name,
        serialNumber: validatedData.serialNumber,
      },
    });

    revalidatePath("/serial-numbers");

    return {
      success: true,
      message: "Serial number updated successfully",
      data: serialNumber,
    };
  } catch (error) {
    console.error("Error updating serial number:", error);
    return {
      success: false,
      error: "Failed to update serial number. Please try again.",
    };
  }
}

export async function deleteSerialNumber(id: string) {
  try {
    // Delete the serial number
    await prisma.serialNumber.delete({
      where: { id },
    });

    revalidatePath("/serial-numbers");

    return {
      success: true,
      message: "Serial number deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting serial number:", error);
    return {
      success: false,
      error: "Failed to delete serial number. Please try again.",
    };
  }
}

export async function updateUserSerialNumber(
  serialNumberId: string,
  userId: string
) {
  try {
    // Verify that the serial number exists
    const serialNumber = await prisma.serialNumber.findUnique({
      where: { id: serialNumberId },
    });

    if (!serialNumber) {
      return {
        success: false,
        error: "Serial number not found",
      };
    }

    // Verify that the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    // Update the user's serial number
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { serialNumberId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        serialNumber: {
          select: {
            id: true,
            assetType: true,
            name: true,
            serialNumber: true,
          },
        },
      },
    });

    return {
      success: true,
      message: "Serial number updated successfully",
      data: updatedUser,
    };
  } catch (error) {
    console.error("Error updating user serial number:", error);
    return {
      success: false,
      error: "Failed to update serial number. Please try again.",
    };
  }
}
