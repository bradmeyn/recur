import { createClient } from "@/lib/supabase/server";
import { TablesInsert, TablesUpdate } from "@/types/supabase";
import { Income } from "@/types/data";

export async function addIncome(income: TablesInsert<"income">) {
  const supabase = createClient();
  return supabase.from("income").insert(income);
}

export async function updateIncome(income: TablesUpdate<"income">) {
  const supabase = createClient();
  return supabase.from("income").update(income);
}

export async function deleteIncome(incomeId: string) {
  const supabase = createClient();
  return supabase.from("income").delete().eq("id", incomeId);
}

export async function getIncome(userId: string): Promise<Income[]> {
  const supabase = createClient();
  console.log("Getting all income by user id");
  // Perform the query
  const { data, error } = await supabase
    .from("income")
    .select("*")
    .eq("user_id", userId);

  console.log("data", data);

  // Handle potential error
  if (error) {
    console.error("Error fetching income:", error);
    throw error; // or handle it in another appropriate way
  }

  return data as Income[];
}
