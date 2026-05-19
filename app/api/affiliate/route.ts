import { NextResponse } from "next/server";
import { resolveAffiliateLink } from "@/lib/affiliate/links";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") ?? "";
  return NextResponse.json({ slug, url: resolveAffiliateLink(slug, "api") });
}
