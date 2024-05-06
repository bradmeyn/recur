import { type Frequency, type Subscription } from "@/lib/types/data";

type FrequencyOption = {
  label: string;
  value: Frequency;
};

export const FREQUENCY_OPTIONS: FrequencyOption[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Fortnightly", value: "fortnightly" },
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Half-Yearly", value: "half-yearly" },
  { label: "Yearly", value: "yearly" },
];

export const CATEGORY_OPTIONS = [
  { label: "Entertainment", value: "entertainment" },
  { label: "Insurance", value: "insurance" },
  { label: "Work", value: "work" },
];

export const TEMP_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "1",
    name: "Netflix",
    amount: 10,
    frequency: "monthly",
    category: "entertainment",
    user_id: "1",
    created_at: new Date().toDateString(),
    updated_at: new Date().toDateString(),
  },
  {
    id: "2",
    name: "Amazon Prime",
    amount: 8,
    frequency: "monthly",
    category: "entertainment",
    user_id: "1",
    created_at: new Date().toDateString(),
    updated_at: new Date().toDateString(),
  },
];
