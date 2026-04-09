import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { sendQuoteNotification } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Save to Supabase
    try {
      const supabase = createServerClient();
      await supabase.from("leads").insert({
        name,
        email,
        service: service ?? "General Inquiry",
        message,
        type: "quote",
      });
    } catch (dbError) {
      console.error("Supabase error:", dbError);
      // Don't fail the request if DB is not configured
    }

    // Send email notification
    try {
      await sendQuoteNotification({ name, email, service: service ?? "General", message });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the request if email is not configured
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
