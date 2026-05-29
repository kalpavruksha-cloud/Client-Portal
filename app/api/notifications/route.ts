import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    notifications: [
      {
        title: "Monthly payout credited",
      },
      {
        title: "Agreement uploaded",
      },
    ],
  });
}