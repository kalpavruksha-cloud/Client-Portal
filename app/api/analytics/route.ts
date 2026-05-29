import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalInvestment: "₹12.8Cr",
    activeClients: 1284,
    payouts: "₹64L",
  });
}