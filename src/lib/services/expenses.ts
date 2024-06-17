import { createClient } from "@/lib/supabase/server";
import { TablesInsert, TablesUpdate } from "@/types/supabase";
import { Expense } from "@/types/data";

export async function addExpense(expense: TablesInsert<"expenses">) {
  const supabase = createClient();
  return supabase.from("expenses").insert(expense);
}

export async function updateExpense(expense: TablesUpdate<"expenses">) {
  const supabase = createClient();
  return supabase.from("expenses").update(expense);
}

export async function deleteExpense(expenseId: string, userId: string) {
  const supabase = createClient();
  return supabase
    .from("expenses")
    .delete()
    .eq("id", expenseId)
    .eq("user_id", userId);
}

export async function getExpenses(userId: string): Promise<Expense[]> {
  const supabase = createClient();
  console.log("Getting all expenses by user id");
  // Perform the query
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", userId);

  console.log("data", data);

  // Handle potential error
  if (error) {
    console.error("Error fetching expenses:", error);
    throw error; // or handle it in another appropriate way
  }

  return data as Expense[];
}
