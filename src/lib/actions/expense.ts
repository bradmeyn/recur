"use server";

import { addExpense } from "@/lib/services/expenses";
import { ExpenseSchema, type Frequency } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export async function addExpenseAction(formData: FormData) {
  console.log("Adding expense..");
  // Get the form data
  const newExpense = {
    name: formData.get("name") as string,
    amount: Number(formData.get("amount")),
    frequency: formData.get("frequency") as Frequency,
    category: formData.get("category") as string,
    userId: formData.get("userId") as string,
  };

  const validation = ExpenseSchema.safeParse(newExpense);

  if (!validation.success) {
    console.error(validation.error);
    return;
  }

  const result = await addExpense({
    name: newExpense.name,
    amount: newExpense.amount,
    frequency: newExpense.frequency,
    category: newExpense.category,
    user_id: newExpense.userId,
  });

  console.log(result);
  revalidatePath("/dashboard/budget");
}
