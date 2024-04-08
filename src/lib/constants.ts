import { type Frequency } from "@/types/data";

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
  { label: "Annually", value: "annually" },
];

export const INCOME_CATEGORY_OPTIONS = [
  { label: "Salary/Wage", value: "salary/wage" },
  { label: "Dividends", value: "dividends" },
  { label: "Interest", value: "interest" },
  { label: "Rent", value: "rent" },
  { label: "Other", value: "other" },
];

export const EXPENSE_CATEGORY_OPTIONS = [
  { label: "Groceries", value: "groceries" },
  { label: "Fuel", value: "fuel" },
  { label: "Utilities", value: "utilities" },
  { label: "Gym/Health", value: "gym/health" },
  { label: "Rent/Mortgage", value: "rent/mortgage" },
  { label: "Transport", value: "transport" },
  { label: "Phone/Internet", value: "phone/internet" },
  { label: "Medical", value: "medical" },
  { label: "Clothing", value: "clothing" },
  { label: "Fun", value: "fun" },
  { label: "Eating-Out", value: "eating-out" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Education", value: "education" },
  { label: "Insurance", value: "insurance" },
  { label: "Pets", value: "pets" },
  { label: "Other", value: "other" },
];

export const SAVINGS_CATEGORY_OPTIONS = [
  { label: "Emergency", value: "emergency" },
  { label: "Holiday", value: "holiday" },
  { label: "House Deposit", value: "house-deposit" },
  { label: "Retirement", value: "retirement" },
  { label: "Investment", value: "investment" },
  { label: "Other", value: "other" },
];
