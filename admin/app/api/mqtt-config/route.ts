import { NextResponse } from "next/server";
import { getMqttConfiguration } from "@/app/actions/mqttAction";

export async function GET() {
  try {
    const result = await getMqttConfiguration();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch MQTT configuration" },
      { status: 500 }
    );
  }
}
