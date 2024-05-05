import { createClient } from "@/lib/supabase/server";
import { TablesInsert, TablesUpdate } from "@/lib/types/supabase";
import { Subscription } from "@/lib/types/data";

export async function addSubscription(
  subscription: TablesInsert<"subscription">
) {
  const supabase = createClient();
  return supabase.from("subscription").insert(subscription);
}

export async function updateSubscription(
  subscription: TablesUpdate<"subscription">,
  subscriptionId: string,
  userId: string
) {
  const supabase = createClient();
  return supabase
    .from("subscription")
    .update(subscription)
    .eq("id", subscriptionId)
    .eq("user_id", userId);
}

export async function deleteSubscription(
  subscriptionId: string,
  userId: string
) {
  const supabase = createClient();
  return supabase
    .from("subscription")
    .delete()
    .eq("id", subscriptionId)
    .eq("user_id", userId);
}

export async function getSubscriptions(
  userId: string
): Promise<Subscription[]> {
  const supabase = createClient();
  // Perform the query
  const { data, error } = await supabase
    .from("subscription")
    .select("*")
    .eq("user_id", userId);

  console.log("Data:", data);

  // Handle potential error
  if (error) {
    console.error("Error fetching subscription:", error);
    throw error; // or handle it in another appropriate way
  }

  return data as Subscription[];
}
