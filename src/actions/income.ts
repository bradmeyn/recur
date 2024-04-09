"use server";
import { addIncome, updateIncome } from "@/services/income";
import { IncomeSchema, type Frequency } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export async function addIncomeAction(formData: FormData) {
  console.log("Adding income...");
  // Get the form data
  const newIncome = {
    id: formData.get("incomeId") as string,
    name: formData.get("name") as string,
    amount: Number(formData.get("amount")),
    frequency: formData.get("frequency") as Frequency,
    category: formData.get("category") as string,
    userId: formData.get("userId") as string,
  };

  const validation = IncomeSchema.safeParse(newIncome);

  if (!validation.success) {
    console.error(validation.error);
    return;
  }

  const result = await addIncome({
    name: newIncome.name,
    amount: newIncome.amount,
    frequency: newIncome.frequency,
    category: newIncome.category,
    user_id: newIncome.userId,
  });

  console.log(result);
  revalidatePath("/dashboard/budget");
}

export async function updateIncomeAction(formData: FormData) {
  const incomeId = formData.get("incomeId") as string;
  const userId = formData.get("userId") as string;

  const updatedIncome = {
    name: formData.get("name") as string,
    amount: Number(formData.get("amount")),
    frequency: formData.get("frequency") as Frequency,
    category: formData.get("category") as string,
  };

  console.log("UPDATING INCOME", updatedIncome);

  const result = await updateIncome(updatedIncome, incomeId, userId);

  console.log("UPDATED INCOME", result);
  revalidatePath("/dashboard/budget");
}
