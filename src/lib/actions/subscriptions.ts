"use server";
import {
  addSubscription,
  updateSubscription,
  deleteSubscription,
} from "@/lib/services/subscriptions";
import { SubscriptionSchema, type Frequency } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export async function addSubscriptionAction(formData: FormData) {
  // Get the form data
  const newSubscription = {
    id: formData.get("subscriptionId") as string,
    name: formData.get("name") as string,
    amount: Number(formData.get("amount")),
    frequency: formData.get("frequency") as Frequency,
    category: formData.get("category") as string,
    userId: formData.get("userId") as string,
  };

  const validation = SubscriptionSchema.safeParse(newSubscription);

  if (!validation.success) {
    console.log("Validation:", validation);
    return;
  }

  const result = await addSubscription({
    name: newSubscription.name,
    amount: newSubscription.amount,
    frequency: newSubscription.frequency,
    category: newSubscription.category,
    user_id: newSubscription.userId,
  });

  revalidatePath("/dashboard");
}

export async function updateSubscriptionAction(formData: FormData) {
  const subscriptionId = formData.get("subscriptionId") as string;
  const userId = formData.get("userId") as string;

  const updatedSubscription = {
    name: formData.get("name") as string,
    amount: Number(formData.get("amount")),
    frequency: formData.get("frequency") as Frequency,
    category: formData.get("category") as string,
  };

  const result = await updateSubscription(
    updatedSubscription,
    subscriptionId,
    userId
  );

  revalidatePath("/dashboard/budget");
}

export async function deleteSubscriptionAction(formData: FormData) {
  const subscriptionId = formData.get("id") as string;
  const userId = formData.get("userId") as string;

  await deleteSubscription(subscriptionId, userId);

  revalidatePath("/dashboard/budget");
}
