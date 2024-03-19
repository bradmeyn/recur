import { createClient } from "@/lib/supabase/server";
import { TablesInsert, TablesUpdate, Tables } from "@/types/supabase";

const supabase = createClient();

export function addIncome(income: TablesInsert<"income">) {
  return supabase.from("income").insert(income);
}

export function getIncomeByUser(incomeId: string, userId: string) {
  return supabase
    .from("income")
    .select("*")
    .eq("id", incomeId)
    .eq("user_id", userId);
}

export function updateIncome(income: TablesUpdate<"income">) {
  return supabase.from("income").update(income);
}

export function deleteIncome(incomeId: string) {
  return supabase.from("income").delete().eq("id", incomeId);
}

export function getAllIncomeByUserId(userId: string) {
  return supabase.from("income").select("*").eq("user_id", userId);
}
