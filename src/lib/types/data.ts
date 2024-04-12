import { Database } from "@/lib/types/supabase";

export type Subscription = Database["public"]["Tables"]["subscription"]["Row"];
export type Frequency = Database["public"]["Enums"]["frequency"];
export type SubscriptionWithTotal = Subscription & { total: number };
