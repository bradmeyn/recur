import { createClient } from "@/lib/supabase/server";
import { TablesInsert, TablesUpdate } from "@/types/supabase";
import { Income } from "@/types/data";

export async function addIncome(income: TablesInsert<"income">) {
  const supabase = createClient();
  return supabase.from("income").insert(income);
}

export async function updateIncome(
  income: TablesUpdate<"income">,
  incomeId: string,
  userId: string
) {
  const supabase = createClient();
  return supabase
    .from("income")
    .update(income)
    .eq("id", incomeId)
    .eq("user_id", userId);
}

export async function deleteIncome(incomeId: string, userId: string) {
  const supabase = createClient();
  return supabase
    .from("income")
    .delete()
    .eq("id", incomeId)
    .eq("user_id", userId);
}

export async function getIncome(userId: string): Promise<Income[]> {
  const supabase = createClient();
  // Perform the query
  const { data, error } = await supabase
    .from("income")
    .select("*")
    .eq("user_id", userId);

  // Handle potential error
  if (error) {
    console.error("Error fetching income:", error);
    throw error; // or handle it in another appropriate way
  }

  return data as Income[];
}
