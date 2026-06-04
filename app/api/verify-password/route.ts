import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, eventId } = body;

    const actualPassword = process.env.GALLERY_PASSWORD;

    if (!password || !actualPassword || password !== actualPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    let url = "";

    switch (eventId) {
      case "haldi":
        url = process.env.HALDI_URL || "";
        break;
      case "wedding":
        url = process.env.WEDDING_URL || "";
        break;
      case "reception":
        url = process.env.RECEPTION_URL || "";
        break;
      default:
        return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }

    if (!url) {
      return NextResponse.json({ error: "Gallery URL not configured" }, { status: 500 });
    }

    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
