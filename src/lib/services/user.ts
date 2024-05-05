import { createClient } from "@/lib/supabase/server";

export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
}
