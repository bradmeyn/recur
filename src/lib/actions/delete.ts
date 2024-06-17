"use server";

import { revalidatePath } from "next/cache";
import { deleteIncome } from "@/lib/services/income";
import { deleteExpense } from "@/lib/services/expenses";
import { deleteSavings } from "@/lib/services/savings";

export async function deleteItemAction(formData: FormData) {
  const itemId = formData.get("id") as string;
  const userId = formData.get("userId") as string;
  const itemType = formData.get("type") as string;

  if (!itemId || !userId || !itemType) {
    console.error("Missing required fields");
    return;
  }

  // Delete the item

  console.log("Deleting item...");

  switch (itemType) {
    case "income":
      await deleteIncome(itemId, userId);
      break;
    case "expense":
      await deleteExpense(itemId, userId);
      break;
    case "savings":
      await deleteSavings(itemId, userId);
      break;
    default:
      console.error("Invalid item type");
      return;
  }

  revalidatePath("/dashboard/budget");
}
