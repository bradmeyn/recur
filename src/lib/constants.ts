export const FREQUENCY_OPTIONS = [
  { label: "Daily", value: "daily", number: 365 },
  { label: "Weekly", value: "weekly", number: 52 },
  { label: "Fortnightly", value: "fortnightly", number: 26 },
  { label: "Monthly", value: "monthly", number: 12 },
  { label: "Quarterly", value: "quarterly", number: 4 },
  { label: "Half-Yearly", value: "half-yearly", number: 2 },
  { label: "Annually", value: "annually", number: 1 },
];

export const INCOME_CATEGORY_OPTIONS = [
  { label: "Salary/wage", value: "salary/wage" },
  { label: "Dividends", value: "dividends" },
  { label: "Interest", value: "interest" },
  { label: "Rental Income", value: "rent" },
  { label: "Other", value: "other" },
];

export const EXPENSE_CATEGORY_OPTIONS = [
  { label: "Groceries", value: "groceries" },
  { label: "Fuel", value: "fuel" },
  { label: "Utilities", value: "utilities" },
  { label: "Gym/health", value: "gym/health" },
  { label: "Rent/Mortgage", value: "rent/mortgage" },
  { label: "Transport", value: "transport" },
  { label: "Phone/Internet", value: "phone/internet" },
  { label: "Medical", value: "medical" },
  { label: "Clothing", value: "clothing" },
  { label: "Fun", value: "fun" },
  { label: "Eating Out", value: "eating-out" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Education", value: "education" },
  { label: "Insurance", value: "insurance" },
  { label: "Pets", value: "pets" },
  { label: "Other", value: "other" },
];

export const SAVINGS_CATEGORY_OPTIONS = [
  { label: "Emergency Fund", value: "emergency" },
  { label: "Holiday", value: "holiday" },
  { label: "House Deposit", value: "house-deposit" },
  { label: "Retirement", value: "retirement" },
  { label: "Investment", value: "investment" },
  { label: "Other", value: "other" },
];

// export function getFrequencyNumber(value: string) {
//   return (
//     FREQUENCY_OPTIONS.find((option) => option.value === value)?.number || 1
//   );
// }
