import { Database } from "@/types/supabase";

export type Income = Database["public"]["Tables"]["income"]["Row"];
export type Expense = Database["public"]["Tables"]["expenses"]["Row"];
export type Savings = Database["public"]["Tables"]["savings"]["Row"];
export type Frequency = Database["public"]["Enums"]["frequency"];
