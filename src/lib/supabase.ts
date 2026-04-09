import { createClient } from "@supabase/supabase-js";

// Server-side client (uses service role key) — created on demand, not at module init
export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase environment variables not configured");
  }
  return createClient(url, key);
}

export type Database = {
  public: {
    Tables: {
      orders: {
        Row: {
          id: string;
          created_at: string;
          stripe_session_id: string;
          product_id: string;
          product_name: string;
          amount: number;
          customer_email: string;
          customer_name: string | null;
          status: "pending" | "paid" | "failed";
        };
        Insert: Omit<
          Database["public"]["Tables"]["orders"]["Row"],
          "id" | "created_at"
        >;
      };
      leads: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          name: string | null;
          service: string | null;
          message: string | null;
          type: "quote" | "community";
        };
        Insert: Omit<
          Database["public"]["Tables"]["leads"]["Row"],
          "id" | "created_at"
        >;
      };
    };
  };
};
