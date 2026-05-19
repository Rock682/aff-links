import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ ok: true, message: "Click tracked", event: body });
}
