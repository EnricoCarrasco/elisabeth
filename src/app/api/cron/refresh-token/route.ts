import { NextRequest, NextResponse } from "next/server";
import { refreshAccessToken } from "@/lib/instagram";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await refreshAccessToken();

  if (!result) {
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    expires_in: result.expires_in,
  });
}
