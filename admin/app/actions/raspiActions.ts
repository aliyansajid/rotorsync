"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { raspiSchema } from "@/schema";
import { revalidatePath } from "next/cache";
import z from "zod";

export async function createRaspi(data: z.infer<typeof raspiSchema>) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      return {
        success: false,
        error: "Your session has expired. Please log in again.",
      };
    }

    // Validate the input data
    const validatedData = raspiSchema.parse(data);

    // Create the Raspi record
    const raspi = await prisma.raspi.create({
      data: {
        name: validatedData.name,
        deviceName: validatedData.deviceName,
        mqttTopic: validatedData.mqttTopic,
        helicopterId: validatedData.helicopterId || null,
        trailerId: validatedData.trailerId || null,
        createdBy: session.user.id,
      },
    });

    revalidatePath("/raspi");

    return {
      success: true,
      message: "Raspi configured successfully",
      data: raspi,
    };
  } catch (error) {
    console.error("Error creating Raspi:", error);
    return {
      success: false,
      error: "Failed to configure Raspi. Please try again.",
    };
  }
}

export async function getRaspis() {
  try {
    const session = await auth();

    if (!session?.user.id) {
      return {
        success: false,
        error: "Your session has expired. Please log in again.",
      };
    }

    const raspis = await prisma.raspi.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Transform the data to include helicopter and trailer details
    const transformedData = await Promise.all(
      raspis.map(async (raspi) => {
        let helicopter = null;
        let trailer = null;

        // Fetch helicopter details if helicopterId exists
        if (raspi.helicopterId) {
          const helicopterData = await prisma.serialNumber.findUnique({
            where: { id: raspi.helicopterId },
            select: { id: true, name: true, serialNumber: true },
          });
          helicopter = helicopterData;
        }

        // Fetch trailer details if trailerId exists
        if (raspi.trailerId) {
          const trailerData = await prisma.serialNumber.findUnique({
            where: { id: raspi.trailerId },
            select: { id: true, name: true, serialNumber: true },
          });
          trailer = trailerData;
        }

        return {
          ...raspi,
          helicopter,
          trailer,
        };
      })
    );

    return {
      success: true,
      data: transformedData,
    };
  } catch (error) {
    console.error("Error fetching Raspis:", error);
    return {
      success: false,
      error: "Failed to fetch Raspi devices",
      data: [],
    };
  }
}

export async function getRaspiById(id: string) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      return {
        success: false,
        error: "Your session has expired. Please log in again.",
      };
    }

    const raspi = await prisma.raspi.findUnique({
      where: { id },
    });

    if (!raspi) {
      return {
        success: false,
        error: "Raspi not found",
        data: null,
      };
    }

    // Fetch helicopter and trailer details
    let helicopter = null;
    let trailer = null;

    if (raspi.helicopterId) {
      const helicopterData = await prisma.serialNumber.findUnique({
        where: { id: raspi.helicopterId },
        select: { id: true, name: true, serialNumber: true },
      });
      helicopter = helicopterData;
    }

    if (raspi.trailerId) {
      const trailerData = await prisma.serialNumber.findUnique({
        where: { id: raspi.trailerId },
        select: { id: true, name: true, serialNumber: true },
      });
      trailer = trailerData;
    }

    const transformedRaspi = {
      ...raspi,
      helicopter,
      trailer,
    };

    return {
      success: true,
      data: transformedRaspi,
    };
  } catch (error) {
    console.error("Error fetching Raspi:", error);
    return {
      success: false,
      error: "Failed to fetch Raspi",
      data: null,
    };
  }
}

export async function updateRaspi(
  id: string,
  data: z.infer<typeof raspiSchema>
) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      return {
        success: false,
        error: "Your session has expired. Please log in again.",
      };
    }

    // Validate the input data
    const validatedData = raspiSchema.parse(data);

    // Update the Raspi record
    const raspi = await prisma.raspi.update({
      where: { id },
      data: {
        name: validatedData.name,
        deviceName: validatedData.deviceName,
        mqttTopic: validatedData.mqttTopic,
        helicopterId: validatedData.helicopterId || null,
        trailerId: validatedData.trailerId || null,
      },
    });

    revalidatePath("/raspi");

    return {
      success: true,
      message: "Raspi updated successfully",
      data: raspi,
    };
  } catch (error) {
    console.error("Error updating Raspi:", error);
    return {
      success: false,
      error: "Failed to update Raspi. Please try again.",
    };
  }
}

export async function deleteRaspi(id: string) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      return {
        success: false,
        error: "Your session has expired. Please log in again.",
      };
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });

    if (!user || user.role !== "ADMIN") {
      return {
        success: false,
        error: "Only admin can delete Raspi devices",
      };
    }

    // Check if Raspi has related data that might prevent deletion
    const raspiData = await prisma.raspiData.findFirst({
      where: { raspiId: id },
    });

    if (raspiData) {
      return {
        success: false,
        error:
          "Cannot delete Raspi with existing sensor data. Please remove all related data first.",
      };
    }

    // Delete the Raspi record
    await prisma.raspi.delete({
      where: { id },
    });

    revalidatePath("/raspi");

    return {
      success: true,
      message: "Raspi deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting Raspi:", error);
    return {
      success: false,
      error: "Failed to delete Raspi. Please try again.",
    };
  }
}
