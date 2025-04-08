import { createBrowserClient } from "@updatedev/ssr/supabase";

export function createClient() {
  const client = createBrowserClient(
    process.env.NEXT_PUBLIC_UPDATE_PUBLIC_KEY!,
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      billing: {
        // NOTE: For Vercel templates, we need to hardcode the environment as "test" even
        // in production. This is uncommon - typically it would be set based on NODE_ENV:
        // environment: process.env.NODE_ENV === "production" ? "live" : "test"
        environment: "test",
      },
    }
  );
  return client;
}
