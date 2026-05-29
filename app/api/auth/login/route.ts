import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  if (
    email === "admin@kalpavruksha.com" &&
    password === "Admin@123"
  ) {
    return NextResponse.json({
      success: true,
      role: "admin",
    });
  }

  if (
    email === "client@kalpavruksha.com" &&
    password === "Client@123"
  ) {
    return NextResponse.json({
      success: true,
      role: "client",
    });
  }

  return NextResponse.json({
    success: false,
    message: "Invalid Credentials",
  });
}