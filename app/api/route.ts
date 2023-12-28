import { festivals } from "@/data/_data";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const FESTIVAL_KEY = "festivals";

export async function GET() {
  const data = await kv.get(FESTIVAL_KEY);
  return NextResponse.json(data);
}

export async function POST() {
  const data = await kv.set(FESTIVAL_KEY, festivals);
  return NextResponse.json(data);
}
