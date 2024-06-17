import { createClient } from "@/lib/supabase/server";
import { TablesInsert, TablesUpdate } from "@/types/supabase";
import { Savings } from "@/types/data";

export async function deleteSavings(savingsId: string, userId: string) {
  const supabase = createClient();
  return supabase
    .from("savings")
    .delete()
    .eq("id", savingsId)
    .eq("user_id", userId);
}
