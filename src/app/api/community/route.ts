import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
      const supabase = createServerClient();
      await supabase.from("leads").insert({
        email,
        name: name ?? null,
        service: null,
        message: "Community waitlist signup",
        type: "community",
      });
    } catch (dbError) {
      console.error("Supabase error:", dbError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Community route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
