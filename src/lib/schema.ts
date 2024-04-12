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
  name: z.string().min(1, { message: "Name is required" }),
  amount: z
    .number({ required_error: "Amount is required" })
    .positive({ message: "Amount must be positive" }),
  frequency: z.enum(frequencyValues, {
    required_error: "Frequency is required",
  }),
  category: z.string().min(1, { message: "Category is required" }),
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
