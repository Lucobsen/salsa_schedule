import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const FESTIVAL_KEY = "festivals";

export async function GET() {
  const festivals = await kv.get(FESTIVAL_KEY);
  return NextResponse.json(festivals);
}

export async function POST() {
  const festivals = await kv.set(FESTIVAL_KEY, "Dominican BALAHAH");
  return NextResponse.json(festivals);
}
