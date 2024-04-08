import { Expense, Income, Savings, Frequency } from "@/types/data";

export function formatAsCurrency(
  value: number,
  includeCents: boolean = false,
  includeSymbol: boolean = false
): string {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: includeCents ? 2 : 0,
    maximumFractionDigits: includeCents ? 2 : 0,
  };
  if (isNaN(value)) {
    value = 0.0;
  }

  if (includeSymbol) {
    options.style = "currency";
    options.currency = "USD";
  } else {
    // If the currency symbol is not included, we use 'decimal' style
    options.style = "decimal";
  }

  return new Intl.NumberFormat("en-US", options).format(value);
}

export function formatAsShortCurrency(value: number): string {
  if (value < 1000) {
    return formatAsCurrency(value, false, true);
  } else if (value < 1000000) {
    return formatAsCurrency(value / 1000, false, true) + "k";
  } else if (value < 1000000000) {
    return formatAsCurrency(value / 1000000, false, true) + "m";
  } else {
    return formatAsCurrency(value / 1000000000, false, true) + "b";
  }
}

// Function to parse the formatted value back to an integer
export function parseCurrency(value: string): number {
  const numericValue = parseInt(value.replace(/[^0-9]+/g, ""));
  if (isNaN(numericValue)) return 0;
  return numericValue;
}

export function formatAsPercentage(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(value);
}

export type CategoryTotal = {
  name: string;
  total: number;
};

export function frequencyTotal(
  valueFrequency: Frequency,
  displayFrequency: Frequency = "annually",
  value: number
): number {
  // Convert the value to an annual amount first.
  let annualValue: number;
  switch (valueFrequency) {
    case "daily":
      annualValue = value * 365;
      break;
    case "weekly":
      annualValue = value * 52;
      break;
    case "fortnightly":
      annualValue = value * 26;
      break;
    case "monthly":
      annualValue = value * 12;
      break;
    case "quarterly":
      annualValue = value * 4;
      break;
    case "half-yearly":
      annualValue = value * 2;
      break;
    case "annually":
      annualValue = value;
      break;
    default:
      throw new Error("Invalid value frequency");
  }

  // Convert the annual value to the display frequency.
  switch (displayFrequency) {
    case "daily":
      return annualValue / 365;
    case "weekly":
      return annualValue / 52;
    case "fortnightly":
      return annualValue / 26;
    case "monthly":
      return annualValue / 12;
    case "quarterly":
      return annualValue / 4;
    case "half-yearly":
      return annualValue / 2;
    case "annually":
      return annualValue;
    default:
      throw new Error("Invalid display frequency");
  }
}

export function consolidateCategoryData(
  data: Income[] | Expense[] | Savings[]
) {
  const categorySums: { [key: string]: number } = {};

  // Process each item in the data array
  data.forEach((item) => {
    // Assume that item.category is the category of the item and item.amount is the value
    const category = item.category || "Uncategorised";
    const amount = item.amount;

    if (!categorySums[category]) {
      categorySums[category] = 0; // Initialize if not present
    }

    categorySums[category] += amount; // Add to the existing sum
  });

  // Convert the sums into the desired array format
  const result: CategoryTotal[] = Object.entries(categorySums).map(
    ([name, total]) => ({
      name,
      total,
    })
  );

  return result;
}

export function capitalise(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
