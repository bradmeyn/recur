import { type Frequency } from "@/lib/types/data";

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
  { label: "Streaming/entertainment", value: "streaming/entertainment" },
  { label: "Insurance", value: "insurance" },
];
