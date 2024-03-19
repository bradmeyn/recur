import { z } from "zod";

const frequencyValues = [
  "daily",
  "weekly",
  "fortnightly",
  "monthly",
  "quarterly",
  "half-yearly",
  "annually",
] as const;

export const IncomeSchema = z.object({
  name: z.string(),
  amount: z.number().positive(),
  frequency: z.enum(frequencyValues),
  category: z.string(),
});

export const ExpenseSchema = z.object({
  name: z.string(),
  amount: z.number().positive(),
  frequency: z.enum(frequencyValues),
  category: z.string(),
});

export const SavingsSchema = z.object({
  name: z.string(),
  amount: z.number().positive(),
  frequency: z.enum(frequencyValues),
  category: z.string(),
});
