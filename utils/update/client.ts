import { createSupabaseClient } from "@/utils/supabase/client";
import { createClient } from "@updatedev/js";

export function createUpdateClient() {
  if (!process.env.NEXT_PUBLIC_UPDATE_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_UPDATE_PUBLISHABLE_KEY is required");
  }
  const client = createClient(process.env.NEXT_PUBLIC_UPDATE_PUBLISHABLE_KEY, {
    getSessionToken: async () => {
      const supabase = createSupabaseClient();
      const { data } = await supabase.auth.getSession();
      if (data.session == null) {
        throw new Error("No active session found. User must be authenticated.");
      }
      return data.session.access_token;
    },
    // NOTE: For Vercel templates, we need to hardcode the environment as "test" even
    // in production. This is uncommon - typically it would be set based on NODE_ENV:
    // environment: process.env.NODE_ENV === "production" ? "live" : "test"
    environment: "test",
  });
  return client;
}
