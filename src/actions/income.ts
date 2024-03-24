"use server";
import { redirect } from "next/navigation";
import { addIncome } from "@/services/income";
import { IncomeSchema, type Frequency } from "@/lib/schema";

export async function addIncomeAction(formData: FormData) {
  console.log("Adding income...");
  // Get the form data
  const newIncome = {
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
}
