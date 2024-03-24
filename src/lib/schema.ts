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

export type Frequency = (typeof frequencyValues)[number];

export const IncomeSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  amount: z.number({ required_error: "Amount is required" }).positive(),
  frequency: z.enum(frequencyValues),
  category: z.string({ required_error: "Category is required" }),
  userId: z.string(),
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
