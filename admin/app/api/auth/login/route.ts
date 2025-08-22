import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/app/actions/userActions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await loginUser(body);

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 401 });
    }
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
