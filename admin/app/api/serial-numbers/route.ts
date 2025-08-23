import { NextResponse } from "next/server";
import {
  getSerialNumbers,
  updateUserSerialNumber,
} from "@/app/actions/serialNumberActions";

export async function GET() {
  try {
    const result = await getSerialNumbers();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch serial numbers" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { serialNumberId, userId } = await request.json();

    if (!serialNumberId || !userId) {
      return NextResponse.json(
        { success: false, error: "Serial number ID and user ID are required" },
        { status: 400 }
      );
    }

    const result = await updateUserSerialNumber(serialNumberId, userId);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update user serial number" },
      { status: 500 }
    );
  }
}
