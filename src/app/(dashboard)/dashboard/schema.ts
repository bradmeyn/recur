import { z } from "zod";

const frequencyValues = [
  "daily",
  "weekly",
  "fortnightly",
  "monthly",
  "quarterly",
  "half-yearly",
  "yearly",
] as const;

export type Frequency = (typeof frequencyValues)[number];

export const subscriptionSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  amount: z
    .number({ required_error: "Amount is required" })
    .positive({ message: "Amount must be positive" }),
  frequency: z.enum(frequencyValues, {
    required_error: "Frequency is required",
  }),
  category: z.string().min(1, { message: "Category is required" }),
});
