import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: session } = await supabase.auth.getSession();
  return session.session;
}
